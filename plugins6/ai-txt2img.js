import fetch from "node-fetch"


let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Example: .txt2img highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed'
m.reply(wait)
try {
let anu = `https://aemt.me/ai/text2img?text=${text}`
conn.sendFile(m.chat, anu, 'anu.jpg', `Prompt: ${text}`, m)
} catch (e) {
conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}}

handler.help = ['txt2img']
handler.tags = ['ai']
handler.command = /^(txt2img)$/i
handler.limit = true
export default handler 
