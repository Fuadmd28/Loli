import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `*LIST FREE FIRE*
_DI JAMIN MUMER_

*• 12 DM = Rp 3,899*
*• 50 DM = Rp 8,182*
*• 70 DM = Rp 10,291*
*• 140 DM = Rp18,523*
*• 210 DM = Rp 27,158*
*• 355 DM = Rp42,770*
*• 500 DM = Rp 60,895*
*• 720 DM = Rp 83,335*
*• 1000 DM = Rp 117,404*

_Paket Membersip Mingguan_
*Rp 27,162*

_Paket Membersip Bulanan_
*Rp 77,064*

_Minat Hub_
http://wa.me/6282147781510

_Pembayaran Bisa Via_
*• Qris All Payment*
*• Dana*
*• Ovo*
*• Gopay*
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1ccc52b1a7aa06fe99b35.jpg' }, caption: rules }, m)
}
handler.help = ['ff']
handler.tags = ['topup']
handler.command = /^(ff)$/i;

export default handler;