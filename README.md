<p align="center">
<img src="https://files.catbox.moe/mbeerk.jpg">
</p>
<p align="center">
<img src="https://komarev.com/ghpvc/?username=balxz&label=Profile%20views&color=0e75b6&style=flat">
</p>
<p align="center">
<a href="#"><img title="balxzzy" src="https://img.shields.io/badge/Shiina-Ai-green?colorA=%23ff0000&colorB=C13584&style=for-the-badge"></a>
</p>


## Installation

You can download via git clone:
```bash
apt install git
```
download this repo:

```bash
git clone https://github.com/balxz/wabot-base.git
```
join the directory folder:

```bash
cd wabot-base
```
starts / run

```bash
npm i
node .
```
```bash
bash run.sh
```

How To Update?
```bash
git pull
```

## Settings Your Owner
*/cnfigs.js
```Javascript
module.exports = {
  owner: ["62", "62"], // own 1 own 2
  pairingNumber: "62", // pair
  TeleIDBot: "", // opsional 
  TeleIDOwn: "", // opsional 
  self: true, // true? false?
  autoReadStory: true, // true? false?
  autoReadStoryEmoji: true, // true? false?
  autoOnline: true, // true? false?
  storyReadInterval: 1000, // default 
  autoRestart: "350 MB", // default 
  autoReadMessage: false, // true? false?
  writeStore: true, // true? false?
  session: "session", // folder sessions
}
```

## Plugins Events Example

```Javascript
module.exports = {
  cmd: ["command"], // string in array
  name: "name.", // string
  category: " category.", // string
  description: "desc", // desc
  async execute(m, { client }) {
    try {
   /* CODE */
    } catch (error) {
      console.error("Error sending message:", error)
    }
  },
}
```
## Ex
```javascript
module.exports = {
  cmd: ["ping"],
  name: "ping",
  category: "main",
  description: "Balas dengan pong",
  async execute(m, { client }) {
    try {
      await client.sendMessage(m.from, { text: "Pong!" });
    } catch (error) {
      console.error("Error sending pong message:", error);
    }
  },
}
```

Sekian Yth bálzz.
