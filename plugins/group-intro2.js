let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `𝐢𝐧𝐭𝐫𝐨 𝐦𝐞𝐦𝐛𝐞𝐫 𝐛𝐚𝐫𝐮
•┈┈┈••✦ ♡ ✦••┈┈┈•

❀𝐧𝐚𝐦𝐚:
❀𝐮𝐦𝐮𝐫:
❀𝐚𝐬𝐤𝐨𝐭:
❀𝐠𝐞𝐧𝐝𝐞𝐫:
❀𝐡𝐨𝐛𝐛𝐲:
❀𝐠𝐚𝐦𝐞 𝐟𝐚𝐯:
❀𝐬𝐭𝐚𝐭𝐮𝐬:
•┈┈┈••✦ ♡ ✦••┈┈┈•


𝐰𝐞𝐥𝐜𝐨𝐦𝐞𝐞𝐞 𝐦𝐞𝐧𝐧 𝐬𝐨𝐤𝐚𝐩"𝐢𝐧 𝐬𝐚𝐣𝐚𝐚 
𝐚𝐫𝐢𝐠𝐚𝐭𝐨𝐨 ><




*Powered By* @⁨WhatsApp⁩
`
conn.reply(m.chat, krtu, m)
}
handler.help = ['intro2']
handler.tags = ['group']
handler.command = /^(intro2)$/i

export default handler