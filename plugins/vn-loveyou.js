import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, global.API(`https://telegra.ph/file/e24878e8a15727c94f008.png`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(love you|sayang lofi)$/i;
handler.command = new RegExp();

export default handler