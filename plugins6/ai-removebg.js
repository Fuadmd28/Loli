import fetch from "node-fetch"
import { readFileSync } from "fs"
import uploadImage from '../lib/uploadImage.js'


let handler = async (m, { conn, usedPrefix, command, text }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Send Media Nya Kak'
let media = await q.download()
let url = await uploadImage(media)
m.reply(wait)
try {
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await conn.sendFile(m.chat, data.url.result, 'anu.jpg', '_Succes Removing Background_', m)
} catch (e) {
conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}}
handler.help = ['removebg']
handler.tags = ['ai']
handler.command = /^(removebg)$/i
handler.limit = true

export default handler