module.exports = {
  type: "owner",
  command: ["mode"],
     operate: async ({ Access, client, m, text, kntol }) => {
     if(!Access) return
        if(!text) return kntol("why? self or public?.")
        if (text === "self") {
          global.status = false
          return kntol("OK *self*.")
        } else if (text === "public") {
          global.status = true
          return m.reply("OK *public*.")
        } else {
          return m.reply("apcb")
        }
    },
}