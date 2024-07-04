import fs from 'fs'
let timeout = 120000
let poin = 499
let handler = async (m, { conn, usedPrefix }) => {
    conn.game = conn.game ? conn.game: {}
    let id = 'siapakahaku-' + m.chat
    if (id in conn.game) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.game[id][0])
    let src = JSON.parse(fs.readFileSync('./database/siapakahaku.json', 'utf-8'))
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Siapakah aku? ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}who untuk bantuan
Bonus: ${poin} Koin
`.trim()
    conn.game[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.game[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, ['siapahaku', '/siapakahaku'], conn.game[id][0])
            delete conn.game[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku$/i
export default handler