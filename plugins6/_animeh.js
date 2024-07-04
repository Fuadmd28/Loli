import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, conn, command }) => {
let text
if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Masukan Text Nya"

let audio = await fetch(`https://api.alyachan.pro/api/voice-ai?text=${text}&voice_over=Siti&apikey=${global.alya}`)
let anu = await audio.json()
const buffer = Buffer.from(anu.data.audio_base64, 'base64')
await conn.sendMessage(m.chat, { audio: buffer, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
}
handler.help = ['voice']
handler.tags = ['ai']
handler.command = ['voice']
handler.limit = true
export default handler