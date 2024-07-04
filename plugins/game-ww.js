let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status != "undefined" && werewolf.status == "playing") {
    conn.reply(m.chat, "Werewolf game is already in progress", m)
    return
  }
  werewolf.status = "playing"
  werewolf.players = {}
  werewolf.villagers = []
  werewolf.wolves = []
  werewolf.votes = {}
  global.db.data.werewolf = werewolf
  conn.reply(m.chat, "Silakan Kirim '.wwjoin' Untuk Join Game Nya", m)
}
handler.help = ['ww']
handler.tags = ['game']
handler.command = /^ww$/i
handler.limit = true
handler.group = true

export default handler