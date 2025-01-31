const { execSync } = require("child_process")
const fs = require("fs")
module.exports = {
  type: ["owner"],
  command: ["backup"],
     operate: async ({ client, m, text, kntol, Access, reaction }) => {
        if (!Access) return kntol("Otw")
        await reaction(m.chat, "🍃")
        await kntol("please wait a few seconds")
        try {
        const ls = execSync("ls").toString().split("\n").filter((jir) =>
                jir != "node_modules" &&
                jir != "package-lock.json" &&
                jir != "proxyactive.txt" &&
                jir != "proxy.txt" &&
                jir != "proxypro.txt" &&
                jir != "./start/tmp" &&
                jir != "./start/session" &&
                jir != ""
        )
      await execSync(`zip -r backup.zip ${ls.join(" ")}`)
      await client.sendMessage(m.chat, {
            document: fs.readFileSync("./backup.zip"),
            mimetype: "application/zip",
            fileName: "backup.zip",
            caption: "here!"
        }, { quoted: m })
      await execSync("rm -rf backup.zip")
      } catch(e) {
          kntol(e)
      }
   }
}