import { spotifydl } from 'betabotz-tools'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
await m.reply(wait)
let anu = await spotifydl(text)
conn.sendFile(m.chat, anu, 'anu.mp3', null, m)
}

handler.help = ['spotifydl']
handler.tags = ['downloader']
handler.command = /^(spotifydl|spotdl)$/i
handler.limit = true

export default handler
