import fetch from 'node-fetch'

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukan Teksnya`;
  await m.reply(wait)
  try {
  let sange = await fetch(`https://aemt.me/bingimg?text=${text}`)
  let anu = await sange.json()
  conn.sendFile(m.chat, anu.result, 'anu.jpg', `*Teks:* ${text}`, m)
} catch (e) {
conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}}
handler.command = ['bingimg'];
handler.help = ['bingimg'];
handler.tags = ['ai'];
handler.limit = true
export default handler;