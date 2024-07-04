import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `
╭––『 *PREMIUM USER*  』
┆➭ Rp 5,000 15 Hari
┆➭ Rp 10,000 23 Hari
┆➭ Rp 15,000 35 Hari
╰–––––––––––––––༓
  - Unlimited Limit 🔓
  - Fitur Private Chat 🔓

_Payment_
✅ QRIS - DANA - GOPAY - OVO - PULSA

_Minat Hub wa.me/6282147781510_
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/292355c93464e071fe4c5.jpg' }, caption: rules }, m)
}
handler.help = ['premium']
handler.tags = ['menulist']
handler.command = /^(premium)$/i;

export default handler;