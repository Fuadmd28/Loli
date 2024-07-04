import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, global.API(`https://telegra.ph/file/c715feb61f687ef25af3e.png`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(.bot|Bot|bott)$/i;
handler.command = new RegExp();
handler.limit = true
handler.onlyprem = true
export default handler