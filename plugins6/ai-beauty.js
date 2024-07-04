import axios from "axios"
import { readFileSync } from "fs"

const apiKey = 'Apikey-Lu';
const apiUrl = 'https://api.itsrose.rest/image/beauty_plus?enhance=6&json=true';
let handler = async (m, { conn, usedPrefix, command }) => {
conn.beauty = conn.beauty ? conn.beauty : {};
if (m.chat in conn.beauty) {
return m.reply("_Mohon Tunggu Sebentar, Masih Ada Proses Yang Belum Selesai_");
}
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime) {
return m.reply(`Balas/Kirim Gambar Dengan Caption *${usedPrefix + command}*`);
}
if (!/image\/(jpe?g|png)/.test(mime)) {
return m.reply(`File Tidak Support!`);
} 
let media = await q.download()
const imageBufer = media
const form = new FormData();
const blob = new Blob([imageBufer], { type: "image/jpg" });
form.append("file", blob, "image.jpg");
conn["beauty"][m.chat] = true;
m.reply(wait)
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
conn.sendFile(m.chat, buffer, 'conco.jpg', 'Nih Kak, Btw Udah Cantik Kok Pake Beauty >,<', m)
})
.catch(error => {
    console.error(error);
})
delete conn.beauty[m.chat];
}
handler.tags = ['ai']
handler.help = ['beauty']
handler.command = /^(beauty)$/i
handler.premium = true

export default handler