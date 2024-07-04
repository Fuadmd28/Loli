import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    try {
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'google.jpg', `*Result:* ${text}
*Source:* Google
`,m)
} catch (e) {
  conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  }
}
handler.help = ['gimage']
handler.tags = ['downloader']
handler.command = /^(gimage|image)$/i
handler.limit = true
export default handler
