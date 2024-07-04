import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, global.API(`https://telegra.ph/file/d936507d2a956fcb96fa4.png`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(😄|✌|oke)$/i;
handler.command = new RegExp();

export default handler