class Commands {
  constructor() {
    this.type = ["saying"],
    this.command = ["bot"]
  }
    async operate({ m, text, kntol}) {
        if(!text) return kntol("Ok!")
        let woi = await axios.get(`https://apii.ambalzz.biz.id/api/say?q=${text}`).then(c => c.data.say.q)
        await kntol(woi)
   }
}

module.exports = new Commands()