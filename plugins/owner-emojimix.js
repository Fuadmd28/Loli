import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text || !text.includes('+')) throw `Usage : ${usedPrefix + command} emoji1|emoji2\n\nExample: *${usedPrefix + command} 😎+😁*`
    let [l, r] = text.split`+`
    if (!l) throw 'emoji1 tidak boleh kosong'
    if (!r) throw 'emoji2 tidak boleh kosong'
    const res = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(l)}_${encodeURIComponent(r)}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.results) throw 'Error!'
    try {
        const stiker = await sticker(false, json.results[0].url, global.packname, global.author)
        await conn.sendFile(m.chat, stiker, 'sticker.webp', 'done', m)
    } catch (e) {
        console.log(e)
        m.reply('Emoji tidak bisa digunakan')
    }
}

handler.help = ['emojimix 😎+🥶']
handler.tags = ['tools']
handler.command = /^(emojimix)$/i
handler.limit = true
handler.onlyprem = true
export default handler