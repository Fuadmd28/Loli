import fs from 'fs'
let timeout = 180000
let money = 499
let limit = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.game = conn.game ? conn.game: {}
    let id = 'susunkata-' + m.chat
    if (!(id in conn.game)) {
        let src = JSON.parse(fs.readFileSync('./database/susunkata.json', 'utf-8'))
        let json = src[Math.floor(Math.random() * src.length)]
        let caption = `
${json.soal}

Tipe : ${json.tipe}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}suska untuk bantuan
Bonus: ${money} Koin 
`.trim()
        conn.game[id] = [
            await conn.reply(m.chat, caption, m),
            json, money,
            setTimeout(() => {
                if (conn.game[id]) conn.reply(m.chat, `Waktu habis!\n📑Jawabannya adalah *${json.jawaban}*`, conn.game[id][0])
                delete conn.game[id]
            }, timeout)
        ]
    } else conn.reply(m.chat, '*Masih ada soal yg belum terjawab!* ', conn.game[id][0])

}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata|sskata$/i

export default handler