import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw 'Example: .ai how are you'
  let gambar = 'https://technet-it.co.uk/wp-content/uploads/2022/12/open-ai-768x402.jpeg'
  try {
  let anu = await fetch(`https://ssa-api.vercel.app/api/chatgpt?message=${text}`)
  let data = await anu.json()
  conn.sendFile(m.chat, gambar, 'anu.jpg', data.data.response, m)
  } catch (e) {
  conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  }}
handler.help = ['openai']
handler.tags = ['ai']
handler.command = /^(ai|openai|gpt)$/i
handler.limit = true

export default handler
