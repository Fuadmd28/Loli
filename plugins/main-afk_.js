var handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  await new Promise(resolve => setTimeout(resolve, 7000)) // Delay selama 7 detik
  m.reply(`${conn.getName(m.sender)} AFK Dengan Alasan ${text ? ': ' + text : ''}`)
}

handler.help = ['afk']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler