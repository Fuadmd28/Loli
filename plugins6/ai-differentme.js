import axios from "axios"
import { readFileSync } from "fs"
import uploadImage from '../lib/uploadImage.js'

const apiKey = 'Apikey-Lu';
const apiUrl = 'https://api.itsrose.rest/image/differentMe';
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let handler = async (m, { conn, text, usedPrefix, command }) => {
conn.different = conn.different ? conn.different : {};
if (m.chat in conn.different) {
return m.reply("_Mohon Tunggu Sebentar, Masih Ada Proses Yang Belum Selesai_");
}
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Send Foto Nya Kak`
if (!text) throw `Sertakan Stylenya, Contoh .differentme anime\n\nList Stye Yang Tersedia:${readMore} color_line\nfresh\nmakima\ncat_ears\nfull_bloom\nangel\ngracefull\ncold\nsnow_fall\nmanga\ncharming\nstipple\ncg\nidol\ncomic_world\nprincess\nanime25d\nrealistic\nanime\ncomic\nmanhwa\nmanhwa_female\nmanhwa_male\njewelry\njewelry_sky\nbasketball\nsummer\ncute_child\nmakeup_sunny\nanime_idol\nazure_sky\ntoday\nmajestic\nftlove\nloveft\nsamyang\nstudent\nbaby\nanime_1\nanime_2\nanime_3\nanime_4\ndrawing`
let media = await q.download()
let url = await uploadImage(media)
conn["different"][m.chat] = true;
m.reply(`_Mengubah Foto Ke Style *${text}*_`);
try {
const requestData = {
    init_image: url,
    style: text
};
axios.post(apiUrl, requestData, {
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    }
}).then(response => {
    console.log(response.data);
    const { status, result, message, styles } = response.data
conn.sendFile(m.chat, result.images[0], 'conco.jpg', `_Sukses Mengubah Foto Ke Style *${text}*_`, m)
})
.catch(error => {
    console.error(error);
})
delete conn.different[m.chat];
} catch (e) {
conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}}
handler.tags = ['ai']
handler.help = ['differentme']
handler.command = /^(differentme)$/i
handler.limit = 25

export default handler