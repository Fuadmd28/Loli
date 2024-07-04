import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
m.reply(wait)
try {
let anu = await fetch(`https://aemt.me/asupandouyin`)
let data = await anu.json()
await conn.sendFile(m.chat, data.url, 'anu.mp4', `*_Nih Kak Douyin Nya_*`, m)
} catch (e) {
conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}
}

handler.help = ['douyin']
handler.tags = ['internet']
handler.command = /^(douyin)$/i
handler.limit = true

export default handler
