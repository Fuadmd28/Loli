import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply(`Masukan Judul Video!\n\nContoh : \n${usedPrefix + command} Hu Tao Amv`)
    await m.reply('_In Progress Please Wait..._')
    let response = await fetch(API('skizo', '/api/ttsearch', { search: text }, 'apikey'))
    let data = await response.json()
    conn.sendFile(m.chat, data.play, 'tiktok.mp4', data.title, m)
}
handler.help = ['tiktoksearch']
handler.tags = ['search']
handler.command = /^tiktoksearch|ttsearch$/i
handler.onlyprem = true
handler.limit = true
export default handler