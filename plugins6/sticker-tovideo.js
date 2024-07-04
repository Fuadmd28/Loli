import { webp2mp4 } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `balas stiker dengan caption *${usedPrefix + command}*`
   let q = m.quoted ? m.quoted : m
   let mime = (q.msg || q).mimetype || ''
    if (!/webp/g.test(mime)) throw `balas stiker dengan caption *${usedPrefix + command}*`
    let media = await q.download?.()
    let out = Buffer.alloc(0)
    if (/webp/g.test(mime)) {
        out = await webp2mp4(media)
    }
    await conn.sendMessage(m.chat, {
                video: { url: out },
                caption: '_Nih Kak Hasilnya_',
                gifPlayback: true,
                gifAttribution: Math.floor(Math.random() * 2) + 1
            }, {
                quoted: m
            })
}
handler.help = ['tovideo','tomp4','togif']
handler.tags = ['convert']
handler.command = /^(togif|tovideo|tomp4)$/i
handler.limit = true;

export default handler
