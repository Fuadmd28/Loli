import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar Dengan Caption .burn'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.ibeng.tech/api/maker/facebook?url=${url}&apikey=${global.ibeng}`)).buffer()
await conn.sendFile(m.chat, hasil, '', 'Cie Di Posting Bot Fotonya :v', m)
}
handler.help = ['pesbuk']
handler.tags = ['maker']
handler.command = /^(pesbuk)$/i
handler.limit = true

export default handler