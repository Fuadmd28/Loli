import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
	if (!res.ok) throw await res.text()
	let json = await res.json()
	conn.sendFile(m.chat, json.url, null, `Nyaww~ 🐾💗 ${command.capitalize()}\n`, m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']

export default handler
