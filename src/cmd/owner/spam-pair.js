const ngentot = require("@whiskeysockets/baileys")
const {
    makeWASocket, 
    useMultiFileAuthState,
    DisconnectReason,
    makeInMemoryStore,
    jidNormalizedUser,
    makeCacheableSignalKeyStore,
    PHONENUMBER_MCC,
    delay
} = ngentot
const Pino = require("pino")
const fs = require("fs")
const Boom = require("@hapi/boom")
const NodeCache = require("node-cache") 

module.exports = {
  type: "owner",
  command: ["pair"],
  operate: async ({ client, m, kntol, reaction, Access, pushname, quoted, text }) => {
      if(!Access) return 
      if(!text) return kntol("where jid? Ex 628")
      await reaction(m.chat, "🍃")
      let [nomor, jumlah] = text.split(" ")
      let ajng = "start/session/spams/" + m.sender.split("@")[0]
      const { state, saveCreds } = await useMultiFileAuthState(ajng)
      const cache = new NodeCache()
      m.reply(`Process Request :
    - Number : ${nomor}
    - Total : ${jumlah || 2}`)
      const config = {
            logger: Pino({
                level: "fatal"
            }).child({
                level: "fatal"
            }),
            printQRInTerminal: false,
            mobile: false,
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, Pino({
                    level: "fatal"
                }).child({
                    level: "fatal"
                }))
            },
            version: [2, 3e3, 1015901307],
            browser: ["Ubuntu", "Edge", "110.0.1587.56"],
            markOnlineOnConnect: true,
            generateHighQualityLinkPreview: true,
            msgRetryCounterCache: cache,
            defaultQueryTimeoutMs: undefined
        }
       client = makeWASocket(config)
       setTimeout(async () => {
         for (let i = 0; i < + jumlah || i < 2; i++) {
             let pairing = await client.requestPairingCode(nomor)
             await delay(5000)
             let code = pairing?.match(/.{1,4}/g)?.join("-") || pairing
             console.log("😜 Kode pairing anda : " + code)
         }
    }, 1000)
  }
}