import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `*LIST PUBG MOBILE*
_DI JAMIN MUMER_

*•  25 UC = Rp 7,000*
*• 50 UC = Rp 11,448*
*• 70 UC = Rp 16,310*
*• 100 UC = Rp 20,850*
*• 150 UC = Rp 30,925*
*• 210 UC = Rp 42,820*
*• 250 UC = Rp 47,550*
*• 300 UC = Rp 58,900*
*• 375 UC = Rp 72,200*
*• 500 UC = Rp 93,475*
*• 700 UC = Rp 135,700*
*• 1000 UC = Rp 184,475*

_Minat Hub_
http://wa.me/6282147781510

Pembayaran Bisa Via
*• Qris All Payment*
*• Dana*
*• Ovo*
*• Gopay*
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1ccc52b1a7aa06fe99b35.jpg' }, caption: rules }, m)
}
handler.help = ['pubg']
handler.tags = ['topup']
handler.command = /^(pubg)$/i;

export default handler;