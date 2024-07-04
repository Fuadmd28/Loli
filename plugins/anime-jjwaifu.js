let handler = async (m, { conn, text }) => {
    let yh = global.waifu
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendMessage(m.chat, { video: { url: url }, caption: '*Jedag Jedug Waifu 💦 🥵*'}, m)
  }
  handler.command = /^(jjwaifu)$/i
  handler.tags = ['anime']
  handler.help = ['jjwaifu']
  
  handler.limit = true
  
  export default handler
  
 global.waifu = [
 "https://telegra.ph/file/7a9630fc40a6d20900a89.mp4",
"https://telegra.ph/file/011be5c460c01c5d666f5.mp4",
"https://telegra.ph/file/65de240a4b236426c56da.mp4",
"https://telegra.ph/file/da5d5c57d070730982ae5.mp4",
"https://telegra.ph/file/0461ab1c0e49f842a0f18.mp4",
"https://telegra.ph/file/52d868a90202489bc6110.mp4",
"https://telegra.ph/file/da0c95967c9f518170f7a.mp4",
  ]