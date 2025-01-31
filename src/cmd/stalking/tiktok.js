module.exports = {
  type: ["stalking"],
  command: ["ttstalk", "tiktok-stalk"],
  operate: async ({ client, m, Access, kntol, pushname, quoted, text, reaction }) => {
    if (!text) return kntol("where username?")
    let p = await TIKTOK_STALK(text).catch(e => {
    return kntol("Account Not Found.")})
    await reaction(m.chat, "🍃")
    let stats = p.data.stats 
    let l = `
*Username:* ${p.data.user.nickname}
*Followers:* ${stats.followerCount}
*Following:* ${stats.followingCount}
*Total Video:* ${stats.videoCount}
*Bio*: ${p.data.user.signature}
*Region:* ${p.data.user.region}`
    await kntol("*TIKTOK STALK*", l)
  },
}

async function TIKTOK_STALK(username) {
    let response = await axios.get(`https://apii.ambalzz.biz.id/api/stalker/ttstalk?username=${username}`)
    if (response && response.data) {
        return response.data
    }
}