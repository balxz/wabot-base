const fs = require("fs")
const axios = require("axios")
const fetch = require("node-fetch")
const cheerio = require ("cheerio")
const baileys = require("@whiskeysockets/baileys")
const all = require("./src/lib/myfunction")

global.owner = "6281276400345"
global.chString = "0029VaSY7Lp8F2pCmQLKNn0g"
global.ambalzz = "https://apii.ambalzz.biz.id"
global.siputz = "https://api.siputzx.my.id"
global.ssa = "https://api.ssateam.my.id"
global.bail = baileys
global.status = false
global.axios = axios
global.fetch = fetch
global.cheerio = cheerio
global.cwd = process.cwd()
global.func = all

let file = require.resolve(__filename)
require("fs").watchFile(file, () => {
  require("fs").unwatchFile(file)
  console.log("file " + __filename + " updated!")
  delete require.cache[file]
  require(file)
});

/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
