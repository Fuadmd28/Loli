const handler = async (m, { usedPrefix }) => {
    let id = m.chat
    global.conn.absen = global.conn.absen ? global.conn.absen : {}
    if (!(id in global.conn.absen)) throw `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`

    let absen = global.conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*Kamu sudah absen!*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `â ${i + 1}. @${v.split`@`[0]}`).join('\n')
    global.conn.reply(m.chat, `*ã ABSEN ã*\n\nTanggal: ${date}\n${global.conn.absen[id][2]}\n\nâ *List absen:*\nâ \nâ Total: ${absen.length}\n${list}\nâ \nâââââ\n\n_${global.wm}_`, m, { contextInfo: { mentionedJid: absen } })
}

handler.help = ['absen']
handler.tags = ['group']
handler.command = /^(absen|hadir)$/i
handler.group = true

export default handler;