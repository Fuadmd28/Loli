import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn,
 usedPrefix,
 args, 
 command, 
 text 
 }) => {
 
if (!text) throw `Linknya?\nExample: *.soundcloud https://soundcloud.com/ndaa-212683099/dj-coba-kau-ingat-ingat-kembali-seharusnya-aku-jungle-dutch-terbaru-2021-full-bass-viral-tik?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing*`
  m.reply(wait)
  
  let { link, thumb, title } = await scdl(text);
  
  await conn.sendFile(m.chat, thumb || emror, 'error.jpg', `Title: ${title}
`, m)
 await conn.sendFile(m.chat, link, '', m)
}
handler.help = ['soundcloud']
handler.tags = ['downloader']
handler.command = /^(soundcloud)$/i
handler.limit = true
handler.register = false

export default handler

export async function scdl(url) {
	return new Promise(async (resolve, reject) => {
		await axios.request({
			url: "https://www.klickaud.co/download.php",
			method: "POST",
			data: new URLSearchParams(Object.entries({'value': url, 'afae4540b697beca72538dccafd46ea2ce84bec29b359a83751f62fc662d908a' : '2106439ef3318091a603bfb1623e0774a6db38ca6579dae63bcbb57253d2199e'})),
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
			}
		}).then(res => {
			const $ = cheerio.load(res.data)
			const result = {
				link: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0],
				thumb: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				title: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text()

			}
			resolve(result)
		}).catch(reject)
})
  }
