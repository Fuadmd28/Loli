let handler = async (m, { conn, args }) => { 
    if (!args || !args[0]) throw 'Siapa yang mau di banned nih?'
    let mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    if (!mention) throw 'Tag salah satu lah'
    if (!(mention in global.db.data.users)) throw 'User tidak terdaftar dalam DATABASE!!'
    let user = global.db.data.users[mention]
    if (user.banned) throw 'User telah terbanned!!'
    let txt = (args.length > 1 ? args.slice(1).join(' ') : 'Tanpa Alasan') || 'Tanpa Alasan' 
    user.banned = true 
    user.BannedReason = txt 
    m.reply('Berhasil Banned User!')
    conn.reply(mention, `Kamu Telah DiBanned ${txt ? `Dikarenakan ${txt}` : 'Melanggar Ketentuan Bot Aduhai Xixixi'}`, null)
}

handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.owner = true

export default handler