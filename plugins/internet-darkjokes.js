import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
await conn.sendButton(m.chat,`Dark banget kayak Negro`, wm, res, [['Darkjoke','.darkjoke']] ,m)
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^(darkjoke)$/i
handler.limit = true
handler.onlyprem = true

export default handler