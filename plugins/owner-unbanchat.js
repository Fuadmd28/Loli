let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('Oke Sayang')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^(unbanchat|ayangon)$/i
handler.admin = true

export default handler