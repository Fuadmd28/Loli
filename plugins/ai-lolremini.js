import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana? Reply gambar yg gk ada button aja'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
  m.reply(wait)
  let img = await q.download()
  let url = await uploadImage(img)
  let out = API('lol', '/api/upscale', { img: url }, 'apikey')
  await conn.sendFile(m.chat, out, 'error.jpg', 'Ini Dia Kak', m)
}
handler.help = ['upscale','jernih','remini']
handler.tags = ['tools,'ai']
handler.command = /^(upscale|jernih|remini)$/i
handler.limit = true
handler.onlyprem = true

export default handler