let handler = async (m, { conn, text }) => {
    let yh = global.loli
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendMessage(m.chat, { video: { url: url }, caption: '*Jedag Jedug Loli 💦 🥵*'}, m)
  }
  handler.command = /^(jjloli)$/i
  handler.tags = ['anime']
  handler.help = ['jjloli']
  
  handler.limit = true
  
  export default handler
  
 global.loli = [
"https://telegra.ph/file/3dcf83b4fa0a0aa461cdf.mp4",
"https://telegra.ph/file/8edec81da4df602836aff.mp4",
"https://telegra.ph/file/9a3bb0e1c086306e44aa5.mp4",
"https://telegra.ph/file/91b114e3fc1ac294a77ef.mp4",
  ]
