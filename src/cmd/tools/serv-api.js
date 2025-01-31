class Commands {
  constructor() {
    this.type = ["tools"],
    this.command = ["serv"]
  }

  async operate({ m }) {
      let l = await axios.get("https://apii.ambalzz.biz.id/api/stats")
      let f = l.data
      let t = `
> *Platform:* ${f.platform}
> *CPU Model:* ${f.cpuModel}
> *OS Type:* ${f.osType}
> *Node Version:* ${f.nodeVersion}
> *Current Working Directory:* ${f.cwd}`
      await m.reply(t)
  }
}

module.exports = new Commands()