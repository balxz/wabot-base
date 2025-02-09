require(process.cwd() + "/cnfigs")

const fs = require("fs")
const axios = require("axios")
const chalk = require("chalk")
const util = require("util")
const path = require("path")
const moment = require("moment-timezone")
const { spawn, exec, execSync } = require("child_process")

const {
  default: baileys,
  proto,
  generateWAMessage,
  generateWAMessageFromContent,
  getContentType,
  downloadContentFromMessage,
  prepareWAMessageMedia
} = require("@whiskeysockets/baileys")

module.exports = client = async (client, m, chatUpdate, store) => {
  try {
    const body = (
      m.mtype === "conversation" ? m.message.conversation :
      m.mtype === "imageMessage" ? m.message.imageMessage.caption :
      m.mtype === "videoMessage" ? m.message.videoMessage.caption :
      m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
      m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
      m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
      m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
      m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
      m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
      m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
    )

    const sender = m.key.fromMe ? client.user.id.split(":")[0] + "@s.whatsapp.net" || client.user.id : m.key.participant || m.key.remoteJid

    const senderNumber = sender.split("@")[0]
    const budy = (typeof m.text === "string" ? m.text : "")
    const prefa = ["", "!", "."]
    const prefix = /^[°zZ#$@+,.?=""():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=""():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : "."
    const from = m.key.remoteJid
    const isGroup = from.endsWith("@g.us")

    const kontributor = JSON.parse(fs.readFileSync("./src/lib/database/owner.json"))
    /*const chName = await client.newsletterMetadata("invite", "0029VaSY7Lp8F2pCmQLKNn0g").then(v => v.name)
    const chId = await client.newsletterMetadata("invite", "0029VaSY7Lp8F2pCmQLKNn0g").then(v => v.id)*/

    const parseMention = (text) => [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(match => match[1] + "@s.whatsapp.net")

    const botNumber = await client.decodeJid(client.user.id)
    const isBot = [botNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const Tolak = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
    const isCmd = body.startsWith(prefix)
   
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()

    // no prefix
    //const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()

    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const text = q = args.join(" ")
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ""
    const qmsg = (quoted.msg || quoted)
    const isMedia = /image|video|sticker|audio/.test(mime)

    const groupMetadata = isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : ""
    const groupOwner = isGroup ? groupMetadata.owner : ""
    const groupName = m.isGroup ? groupMetadata.subject : ""
    const participants = isGroup ? await groupMetadata.participants : ""
    const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : ""
    const groupMembers = isGroup ? groupMetadata.participants : ""
    const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false
    const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false

    const time = moment.tz("Asia/Makassar").format("HH:mm:ss")
    if (m.message) {
      console.log("\x1b[30m--------------------\x1b[0m")
      console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`))
      console.log(
        chalk.bgHex("#00FF00").black(
          `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
          `   ⌬ Pesan: ${m.body || m.mtype} \n` +
          `   ⌬ Pengirim: ${m.pushname} \n` +
          `   ⌬ JID: ${senderNumber}`
        )
      )
      if (m.isGroup) {
        console.log(
          chalk.bgHex("#00FF00").black(
            `   ⌬ Grup: ${groupName} \n` +
            `   ⌬ GroupJid: ${m.chat}`
          )
        )
      }
      console.log()
    }

    const kntol = (footer) => {
      const {
        message,
        key
      } = generateWAMessageFromContent(m.chat, {
        interactiveMessage: {
          body: {
            text: null
          },
          footer: {
            text: footer
          },
          nativeFlowMessage: {
            buttons: [{
              text: null
            }],
          }
        },
      }, {
        quoted: {
          key: {
            participant: sender, remoteJid: sender
          }, message: {
            conversation: body
          }
        }
      })
      client.relayMessage(m.chat, {
        viewOnceMessage: {
          message
        }
      }, {
        messageId: key.id
      })
    }
    
    const sendIAMessage = async (jid, btns = [], qoted, opts = {}) => {
    let messageContent = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: opts.content
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: opts.footer
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: opts.header,
              subtitle: "",
              hasMediaAttachment: false,
            }),
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: false,
              mentionedJid: parseMention(opts.header + opts.content + opts.footer)
            },
            externalAdReply: { 
              showAdAttribution: true, 
              renderLargerThumbnail: false, 
              mediaType: 1
            },
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: btns
            })
          })
        }
      }
    }
    if (opts.media) {
      const media = await prepareWAMessageMedia({
        [opts.mediaType || "image"]: { url: opts.media } // type image/video { url: params }
      }, {
        upload: client.waUploadToServer
      })
      messageContent.viewOnceMessage.message.interactiveMessage.header.hasMediaAttachment = true
      messageContent.viewOnceMessage.message.interactiveMessage.header = {
        ...messageContent.viewOnceMessage.message.interactiveMessage.header,
        ...media
      }
    }
    let msg = await generateWAMessageFromContent(jid, messageContent, { quoted: qoted })
    await client.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    })
  }

    const reaction = async (jidss, emoji) => {
      client.sendMessage(jidss, {
        react: {
          text: emoji, key: m.key
        }
      })
    }
    
    const wokk = (seconds) => {
        seconds = Number(seconds)
        var d = Math.floor(seconds / (3600 * 24)) 
        var h = Math.floor((seconds % (3600 * 24)) / 3600)
        var m = Math.floor((seconds % 3600) / 60) 
        var s = Math.floor(seconds % 60) 
        var dDisplay = d > 0 ? d + "d, " : ""
        var hDisplay = h > 0 ? h + "h, " : ""
        var mDisplay = m > 0 ? m + "m, " : ""
        var sDisplay = s > 0 ? s + "s" : ""
        return (dDisplay + hDisplay + mDisplay + sDisplay).trim().replace(/,\s*$/, "")
    }
    
    const im = String.fromCharCode(8206)
    const r = im.repeat(4001)
    
    const IDR = (num) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        currency: 'IDR',
        minimumFractionDigits: 0,
    })
    return formatter.format(num)
}

    const loadPlugins = (directory) => {
      let plugins = []
          const folders = fs.readdirSync(directory)
          folders.forEach((folder) => {
            const folderPath = path.join(directory, folder)
            if (fs.lstatSync(folderPath).isDirectory()) {
              const files = fs.readdirSync(folderPath)
              files.forEach((file) => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
                  delete require.cache[require.resolve(filePath)]
                  const plugin = require(filePath)
                  if (plugin && plugin.command && Array.isArray(plugin.command)) {
                    plugin.filePath = filePath
                    plugins.push(plugin)
                 }
               }
            })
         }
      })
     return plugins
   }

    const plugins = loadPlugins(path.resolve(__dirname, "./cmd"))
    const Access = Tolak
    const context = { client, m, kntol, Access, pushname, quoted, text, reaction, sendIAMessage}
    let handled = false
    for (const plugin of plugins) {
      if (Array.isArray(plugin.command) && plugin.command.includes(command)) {
        await plugin.operate(context)
        handled = true
        break
      }
   }
     /*let regex = /\bapi\b/i
     if(regex.test(text)) {
     if(!m.isBaileys) return 
         kntol(`hi? do you need rest api *(aplication inteligace)*?\nStalk Here Free Api By Shiina Api!\n${ambalzz}\n se next time the features will continue to be updated!\n\nSource Code: github.com/balxz/swagger-nextjs\ndont forgot give stars in repo❤️\n\n— bálzz`)
     }*/

    switch (command) {
      case "npm_stalk": {
        const { NPM_STALK } = require("./lib/scrape/AxiosStalk")
        if (!text) return kntol("what npm do you want to search?")
        await reaction(m.chat, "🍃")
        let c = await NPM_STALK(text).catch(e => {
          return kntol("npm name not found.")
        })
        if (c && c.data) {
          let o = c.data
          let name = o.name
          let versiLatest = o.versionLatest
          let totalUpdate = o.versionUpdate
          let rilis = o.publishTime
          let trakhirUfdet = o.latestPublishTime
          let AllTeks = `
*Npm Name:* ${name}
*Versi Trakhir:* ${versiLatest}
*Total Update:* ${totalUpdate} ×
*Rilis:* ${rilis}
*Update Trakhir:* ${trakhirUfdet}`
          await kntol(AllTeks)
        } else {
          await kntol("haha npm name not found.")
        }
        await reaction(m.chat, "")
      }
      break
      
      case "menu": {
      let name = m.pushName || "bálxzzy users"
      let limit = "NaN"
      let role = "-"
      let users = "Not Found"
      
      let moment = require("moment-timezone")
      let jm = moment().tz("Asia/Makassar").format("HH:mm:ss")
      let hari = {
        timeZone: "Asia/Makassar",
        weekday: "long"
      }
      let hri = new Intl.DateTimeFormat("id-ID", hari).format(new Date())
      let dt = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
         }
      let date = new Intl.DateTimeFormat('id-ID', dt).format(new Date())
      await reaction(m.chat, "🍃")
      let iyakah = `
*乂 ɪ ɴ ғ ᴏ  ᴜ s ᴇ ʀ*
> ɴᴀᴍᴇ : -
> ʟɪᴍɪᴛ : ${limit}
> ʀᴏʟᴇ : ${role}
–
*乂 ᴛ ᴏ ᴅ ᴀ ʏ*
> *ᴊᴀᴍ : ${jm} ᴡɪT*
> *ʜᴀʀɪ : ${hri}*
> *ᴅᴀᴛᴇ : ${date}*
> *ʀᴜɴᴛɪᴍᴇ : ${(wokk(process.uptime()))}*
> *ᴜsᴇʀs : ${users}*
–
X — forwarded / copyright
> *—* ${ambalzz}
> *—* ${ambalzz}/tqto
> *—* ${ambalzz}/docs
${r}

 — OWNER 
> — 々 *.backup* (backup source code "zip")
> — 々 *.clear* (clear sesions and tmp)
> — 々 *.mode* (self / public)
> — 々 *.pair* (spam pairing)
> — 々 *.exc* (shell)
> — 々 *.eval* (await)

 — OPEN - AI *(apii.ambalzz.biz.id)*
> — 々 *.meta-ai* (ask with meta ai by Llama 3.0)
> — 々 *.shiina-ai* (shiina ai by apii.ambalzz.biz.id)

— DOWNLOADER 
> — 々 *.ttdl* (download video tiktok with urls)
> — 々 *.teradl* (download for terabox url)

 — STALKING *(apii.ambalzz.biz.id)*
> — 々 *.ttstalk* (stalk your tiktok with username)

 — TOOLS *(apii.ambalzz.biz.id)*
> — 々 *.cekhost* (check your ping here)
> — 々 *.btton* (aj sndr)

 — API *(apii.ambalzz.biz.id)*
> — 々 *.serv* (check server api)

 — OTHER
> — 々 *.say* (saying with apii.ambalzz.biz.id)

      `
      await client.sendMessage(
        m.chat,
        {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `Shiina – Ai`,
              body: "Sh-Xploit",
              mediaType: 1,
              renderLargerThumbnail: true,
              thumbnailUrl: "https://files.catbox.moe/te4bg5.jpg",
              sourceUrl: null,
            },
          },
          text: iyakah,
        },
        { quoted: m }
      )
        await reaction(m.chat, "")
      }
      break
      
      case "shiina-ai": {
          if(!text) return kntol("hi?")
          await reaction(m.chat, "🍃")
          let pi = await axios.get(ambalzz + `/api/openai/shiina-ai?ask=${text}`)
          await kntol(`
*Status:* ${pi.data.result.status}
*Message:* ${pi.data.result.message}
*Creator:* ${pi.data.result.creator}

${pi.data.result.shiina}
          `)
          await reaction(m.chat, "")
      }
      break
      
      case "meta-ai": {
            if(!text) return kntol("Hi! How can I assist you today?")
            await reaction(m.chat, "🍃")
            let a = await axios.get(ambalzz + `/api/openai/meta-ai?ask=${text}`)
            await kntol(`
*Status:* ${a.data.r.status}
*Message:* ${a.data.r.message}
*Creator:* ${a.data.r.creator}

${a.data.r.meta}
            `)
            await reaction(m.chat, "")
      }
      break
      
      case "tt": case "ttdl": {
            if (!text) return kntol("where url? Ex: .tt https://vt.tiktok.com/ZSjunPJbq")
                await reaction(m.chat, "🍃")
                let res = await axios.get(ambalzz + `/api/downloader/tiktokdl?url=${text}`)
                let u = res.data.data
        
                await client.sendMessage(m.chat, {
                    video: { url: u.video },
                    caption: `
• *Fetching*: ${u.fetching}

— *INFO*
> — 々 Author:  ${res.data.author.nickname}
> — 々 Username:  ${res.data.author.username}
> — 々 Like: ${IDR(res.data.video_view.likes)}
> — 々 Views:  ${IDR(res.data.video_view.views)}
> — 々 Command: ${IDR(res.data.video_view.comments)} 

${u.caption_vid || "No caption"}`
                }, { quoted: m })
                await client.sendMessage(m.chat, {
                    audio: { url: u.music },
                    mimetype: "audio/mpeg",
                    ptt: false
                }, { quoted: m})
                await reaction(m.chat, "")
        }
        break   
        
      case "btton": {
            const btns = [
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "Hai",
                  id: null
                })
              }, {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "Saya menggunakan WhatsApp",
                  id: null
                })
              }
            ]
            
            sendIAMessage(m.chat, btns, m, {
              header: "kamu mana",
              content: "punya",
              footer: "ini"
            })
       }
       break
       
        case "brat": case "sbrat": {
        let bujang = m.quoted ? m.quoted.text : text
            if(!bujang) return kntol("where text?")
            await reaction(m.chat, "🍃")
            await client.sendMessage(m.chat, { sticker: { url: `https://apii.ambalzz.biz.id/api/sticker/brat?text=${encodeURIComponent(bujang)}`}}, { quoted: m })
            await reaction(m.chat, "")
        }
        break
        
        //case "a": {
        // client.relayMessage(m.chat, {requestPhoneNumberMessage: {}},{})
        // }
        //  break
        
        case "eval": {
            if (!Tolak) return
            let duh = m.quoted ? m.quoted.text : text || "m"
            await reaction(m.chat, "🍃")
            try {
               let evaled = await eval(`(async () => { ${duh} })()`)
                if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
                await reaction(m.chat, "")
                await kntol(evaled)
            } catch (err) {
                kntol(String(err))
            }
        }
        break
        
        case "exc": {
            if (!Tolak) return
            let duh = m.quoted ? m.quoted.text : text || "ls"
            await reaction(m.chat, "🍃")
            exec(duh, (err, stdout) => {
            if (err) return kntol(`${err}`)
            if (stdout) return kntol(stdout)
          })
          await reaction(m.chat, "")
        }
        break
      
      default:
            /** other 😹 **/

    }
  } catch (err) {
    console.log(require("util").format(err))
  }
}

let file = require.resolve(__filename)
require("fs").watchFile(file, () => {
  require("fs").unwatchFile(file)
  console.log("file" + __filename + "  updated!")
  delete require.cache[file]
  require(file)
})
