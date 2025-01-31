const { readdirSync, rmSync } = require("fs")
const cwd = process.cwd()

module.exports = {
  type: ["owner"],
  command: ["clear"],
  operate: async ({ client, m, text, kntol, Access, reaction }) => {
    if (!Access) return
        await reaction(m.chat, "🍃")   
        const cintaKemi = `${cwd}/src/session`
        readdirSync(cintaKemi)
          .filter(v => v !== "creds.json")
          .forEach(f => rmSync(`${cintaKemi}/${f}`))   
        const balzz = `${cwd}/src/tmp`
        readdirSync(balzz).forEach(f => rmSync(`${balzz}/${f}`))
        kntol("```successfully cleaned sesi and tmp folder```")
    }
}