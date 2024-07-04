let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        global.db.data.users[m.sender].koin = 9999999999
        global.db.data.users[m.sender].limit = 99999999
        global.db.data.users[m.sender].exp = 9999
        m.reply(`Done Sayang`)
}
handler.command = /^(sayang)$/i
handler.owner = true

export default handler