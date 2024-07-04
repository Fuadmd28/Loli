import { post } from '../lib/api.js'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw 'Apa Yang Ingin Kamu Tanyakan?'
  try {
const { data } = await post("/cai/chat", {
			character_id: "2b0b6676-1723-464e-9d05-5de615698ff7",
			message: text,
			enable_nsfw: false,
			model: "rs_v8_72b",
		})
		const { status, message, result } = data
		let res = await translate(result.message, { to: 'id', autoCorrect: true }).catch(_ => null)
		m.reply(res.text)
		} catch (e) {
conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}}
handler.help = ['clara','cai']
handler.tags = ['ai']
handler.command = /^(clara|cai)$/i
handler.limit = true

export default handler
