let handler = async (m, { conn, text }) => {
    let yh = global.alok
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendMessage(m.chat, { video: { url: url }, caption: '*Jedag Jedug Cosplay 🥵*'}, m)
  }
  handler.command = /^(jjcosplay)$/i
  handler.tags = ['anime']
  handler.help = ['jjcosplay']
  
  handler.limit = true
  
  export default handler
  
 global.alok = [
 "https://telegra.ph/file/544f3b4f04a61bf2df2a8.mp4",
"https://telegra.ph/file/22ca2d660038950349c70.mp4",
"https://telegra.ph/file/cf13e85a999c02d45f000.mp4",
"https://telegra.ph/file/3b135b7b383bb30b87868.mp4",
"https://telegra.ph/file/37f45ea2b2bd517b96bd8.mp4",
"https://telegra.ph/file/44599a8c4f5bc0ec96a9d.mp4",
  ]