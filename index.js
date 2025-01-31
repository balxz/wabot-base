console.clear()
console.log('Starting...')
require('./cnfigs')

const {
  default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    makeInMemoryStore,
    jidDecode,
    downloadContentFromMessage,
} = require("@whiskeysockets/baileys")

const pino = require('pino')
const readline = require("readline")
const fs = require('fs')
const path = require("path")
const { Boom } = require('@hapi/boom')
const { color } = require('./src/lib/color')
const { smsg } = require('./src/lib/myfunction')

const usePairingCode = true
  
const question = (text) => {
const rl = readline.createInterface({
      input: process.stdin, output: process.stdout
    })
    return new Promise((resolve) => {
      rl.question(text, resolve)
    })
  }

const store = makeInMemoryStore({
    logger: pino().child({
      level: 'silent', stream: 'store'
    })
  })


async function clientstart() {
const { state, saveCreds } = await useMultiFileAuthState('./src/session') 
const client = makeWASocket({
      logger: pino({
        level: "silent"
      }),
      printQRInTerminal: !usePairingCode,
      auth: state,
      version: [2, 3000, 1017531287],
      browser: ['Ubuntu', 'Firefox', '20.0.00']
    })

    if (usePairingCode && !client.authState.creds.registered) {
      const phoneNumber = await question('— Paste Your WhatsApp Number: ')
      const code = await client.requestPairingCode(phoneNumber.trim())
      console.log(`Your Pairing Code: ${code}`)
    }

    store.bind(client.ev)
    client.ev.on("messages.upsert", async (chatUpdate, msg) => {
      try {
        const mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message: mek.message
        /*if (mek.key && mek.key.remoteJid === 'status@broadcast') {
      const r = "😯"
      const k = mek.key
          if (k.participant) {
            await client.readMessages([k])
            await client.sendMessage('status@broadcast', {
              react: {
                text: r,
                key: k
              }
            }, {
              statusJidList: [k.participant]
            })
            console.log(`
memberikan reaksi ke status ${k.participant}
REAKSI: [${r}]`
            )
          }
        }*/
        if (!client.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('SH-') && mek.key.id.length === 7) return
        if (mek.key.id.startsWith('balxzzy')) return
    const m = smsg(client, mek, store)
        require("./src/system")(client, m, chatUpdate, store)
      } catch (err) {
        console.log(err)
      }
    })

    client.decodeJid = (jid) => {
      if (!jid) return jid
      if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {}
        return decode.user && decode.server && decode.user + '@' + decode.server || jid
      } else return jid
    }

    client.ev.on('contacts.update', update => {
      for (let contact of update) {
        let id = client.decodeJid(contact.id)
        if (store && store.contacts) store.contacts[id] = {
          id,
          name: contact.notify
        }
      }
    })

    client.public = global.status

    client.ev.on('connection.update',
      async (update) => {
    const { connection, lastDisconnect } = update
        if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output.statusCode
          console.log(color(lastDisconnect.error, 'deeppink'))
          if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
            process.exit()
          } else if (reason === DisconnectReason.badSession) {
            console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
            process.exit()
          } else if (reason === DisconnectReason.connectionClosed) {
            console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
            process.exit()
          } else if (reason === DisconnectReason.connectionLost) {
            console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
            process.exit()
          } else if (reason === DisconnectReason.connectionReplaced) {
            console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
            client.logout()
          } else if (reason === DisconnectReason.loggedOut) {
            console.log(color(`Device Logged Out, Please Scan Again And Run.`))
            client.logout()
          } else if (reason === DisconnectReason.restartRequired) {
            console.log(color('Restart Required, Restarting...'))
            await clientstart()
          } else if (reason === DisconnectReason.timedOut) {
            console.log(color('Connection TimedOut, Reconnecting...'))
            clientstart()
          }
        } else if (connection === "connecting") {
          console.log(color('Conecting . . . '))
        } else if (connection === "open") {
          console.log(color('Conected . . .'))
        }
      })

    client.sendText = (jid, text, quoted = '', options) => client.sendMessage(jid,
      { text: text, ...options },
      { quoted })

    client.downloadMediaMessage = async (message) => {
      let mime = (message.msg || message).mimetype || ''
      let messageType = message.mtype ? message.mtype.replace(/Message/gi,
        ''): mime.split('/')[0]
      const stream = await downloadContentFromMessage(message,
        messageType)
      let buffer = Buffer.from([])
      for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])}
      return buffer
    }

    client.ev.on('creds.update', saveCreds)
    return client
  }

  clientstart()

  let file = require.resolve(__filename)
  require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[032m' + __filename + ' \x1b[132mupdated!\x1b[0m')
    delete require.cache[file]
   require(file)
})