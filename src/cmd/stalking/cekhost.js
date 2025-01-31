module.exports = {
  type: "stalking",
  command: ["cek", "host", "cek-host"],
  operate: async ({ client, m, kntol, Access, pushname, quoted, text, reaction }) => {
    if (!text) return kntol("where url?")
      let res = await axios.get(`https://apii.ambalzz.biz.id/api/tools/cekhost?url=${text}`)
      await reaction(m.chat, "🍃")
      let status = res.data.result.status
      let message = res.data.result.message
      let reqID = res.data.result.id
      let pLINK = res.data.result.report
      await client.sendMessage(
        m.chat,
        {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `Check-Host`,
              body: "Sh-Xploit",
              mediaType: 1,
              renderLargerThumbnail: false,
              thumbnailUrl: "https://apii.ambalzz.biz.id/logoku.png",
              sourceUrl: null,
            },
          },
          text: `
> *Status:* ${status}
> *Message:* ${message}...
> *Request ID:* ${reqID}
> *Report Link:* ${pLINK}`,
        },
        { quoted: m }
      )
  },
}