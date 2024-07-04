import axios from "axios"
import { readFileSync } from "fs"
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let handler = async (m, { conn, usedPrefix, text, command }) => {
conn.hairstyle = conn.hairstyle ? conn.hairstyle : {};
if (m.chat in conn.hairstyle) {
return m.reply("_Mohon Tunggu Sebentar, Masih Ada Proses Yang Belum Selesai_");
}
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Send Foto Nya Kak' 
if (!text) throw `Masukan Stylenya, Contoh .hairstyle K_man\nList Stye Yang Tersedia:${readMore} layered_1\nairy_bangs\nfishtail\nblunt_bangs\nschool_girl\nripples_2\nlong_curtains_1\ncockhorse\nside_split_1\nstraight_hair_1\nmermaid\negg_roll\ncurly_hair\nlayered_2\nlong_curtains_2\nbarbie\nairy_long\nside_fringe\nstraight_hair_2\nfrench\nripples_1\nlong_curtains_3\npeach-shaped\nslicked-back\ncomma_hair\ncoside_split_2de\nnatural\nk-style\nshor_curls`
const apiKey = 'Apikey-Lu';
const apiUrl = `https://api.itsrose.rest/image/hair_style?hair_id=${text}&json=true`
m.reply(wait)
let media = await q.download()
const imageBufer = media
const form = new FormData();
const blob = new Blob([imageBufer], { type: "image/jpg" });
form.append("file", blob, "image.jpg");
axios.post(apiUrl, form, {
  headers: {
    'accept': 'application/json',
    'Authorization': apiKey,
    'Content-Type': 'multipart/form-data'
  }
})
.then(response => {
    console.log(response.data);
    const buffer = Buffer.from(response.data.result.base64Image, 'base64')
conn.sendFile(m.chat, buffer, 'conco.jpg', `_Sukses Mengubah ake Style *${text}*_`, m)
})
.catch(error => {
    console.error(error);
})
delete conn.hairstyle[m.chat];
}
handler.tags = ['ai']
handler.help = ['hairstyle']
handler.command = /^(hairstyle)$/i
handler.limit = 10

export default handler