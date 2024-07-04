let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Payment* 」
│ • *Dana:* ${global.dana}
│ • *Gopay:* ${global.gopay}
│ • *Ovo:* ${global.ovo}
❏──────────────๑

_Jangan Lupa Untuk Screenshot Pembayaran_
_Sebagai Bukti Kalau Sudah Membayar_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^(payment|pay)$/i

export default handler
