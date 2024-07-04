let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} nekopoi`)
  let res = API('https://api.lolhuman.xyz', '/api/tweettrump', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'error.jpg', 'Ini Dia Kak', m, false)
}
handler.help = ['donal']
handler.tags = ['maker']
handler.command = /^(donal)$/i
handler.limit = true
handler.onlyprem = true
export default handler