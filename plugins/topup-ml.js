import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `*LIST MOBILE LEGEND*
_DI JAMIN MUMER_

*• 12 DM = Rp 5,542*
*• 19 DM = Rp 7,575*
*• 28 DM = Rp 9,065*
*• 44 DM = Rp 13,099*
*• 86 DM = Rp 21,753*
*• 112 DM = Rp 27,400*
*• 172 DM = Rp 40,658*
*• 185 DM = Rp 45,105*
*• 257 DM = Rp 59,755*
*• 344 DM = Rp 78,660*
*• 514 DM = Rp 116,090*
*• 600 DM = Rp 136,000*

*• Weekly Diamond Pass*
 *Rp 27,680*

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
handler.help = ['ml']
handler.tags = ['topup']
handler.command = /^(ml)$/i;

export default handler;