=let handler = async (m, { conn, text }) => {
    let yh = global.loli
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendMessage(m.chat, { video: { url: url }, caption: '*ni jj nya om😋*'}, m)
  }
  handler.command = /^(loli2)$/i
  handler.tags = ['anime']
  handler.help = ['loli2']
  
  handler.limit = true
  
  export default handler
  
 global.loli = [
 "https://telegra.ph/file/f47676262d11720da1737.mp4",
 "https://telegra.ph/file/d393f2258e89e2d0e3b10.mp4",
 "https://telegra.ph/file/2bcfef403fc0c4e8e6733.mp4",
 "https://telegra.ph/file/be86c9b84bb0727b55064.mp4",
  "https://telegra.ph/file/b907e36effc3f13e1d343.mp4",
  "https://telegra.ph/file/672e1ee48cfb18ec02a33.mp4",
  "https://telegra.ph/file/276a13786e8b627902c43.mp4",
  "https://telegra.ph/file/412b70e3462bd62eddaed.mp4",
  "https://telegra.ph/file/ca00227a698705670d058.mp4",
  "https://telegra.ph/file/d2652b3a4becf88249f21.mp4",
  "https://telegra.ph/file/5d401fcad7a54d68234e2.mp4",
  "https://telegra.ph/file/7a4424f35a5191123a476.mp4",
  ]