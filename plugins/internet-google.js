import googleIt from 'google-it'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `Example : ${usedPrefix + command} cara bikin kue`
	let anu = await googleIt({'query': text})
	if (anu.length == 0) throw 'No Result Found.'
	let txt = `Found : ${text}`
	for (var x of anu) {
		txt += `\n\n*${x.title}*\n`
		txt += `${x.link}\n`
		txt += `_${x.snippet}_\n`
		txt += `───────────────────`
	}
	await m.reply(txt)
}

handler.help = ['google']
handler.tags = ['internet']
handler.limit = true
handler.onlyprem = true
handler.command = /^(google?)$/i

export default handler