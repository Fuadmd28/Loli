import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.lolhuman.xyz/api/random/art?apikey=${global.lolkey}`
	conn.sendFile(m.chat, url, null, 'Istri Owner Mana Tahan🥵', m)
}
handler.command = /^(fanart)$/i
handler.tags = ['anime']
handler.help = ['fanart']
handler.limit = true
handler.onlyprem = true
export default handler