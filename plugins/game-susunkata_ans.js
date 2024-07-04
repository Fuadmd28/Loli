import similarity from 'similarity'

const threshold = 0.72
let handler = m => m

handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*suska/i.test(m.quoted.text)) return !0
  this.susunkata = this.susunkata ? this.susunkata : {}
  if (!(id in this.susunkata)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == this.susunkata[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].money += this.susunkata[id][2]
      global.db.data.users[m.sender].limit += 1
      m.reply(`*WAH BENAR SIAPA SANGKA 😁👊🏻*\n+${this.susunkata[id][2]} °Money\n+1 « Limit`)
      
      // Tambahkan delay selama 5 detik dengan menggunakan loop while
      const start = Date.now()
      while (Date.now() - start < 5000) {
        // Tunggu selama 5 detik
      }
      
      clearTimeout(this.susunkata[id][3])
      delete this.susunkata[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
      m.reply(`*Dikit Lagi!*`)
    } else {
      m.reply(`*Kurang Tepat!*`)
    }
  }
  return !0
}

handler.exp = 0

export default handler