import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, isOwner ,usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 100000))
let coin = (Math.floor(Math.random() * 100))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag Orang Yang Ingin Kamu Rampok'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna Tidak Ada Didalam Database'
  if (global.db.data.users[who].nama == 'Zel Suka Loli') return conn.sendFile(m.chat, './vn/anjay.mp3', "lah.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  let __timers = (new Date - global.db.data.users[m.sender].udahrampok)
  let nama = conn.getName(m.sender)
  let _timers = (86400000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].udahrampok > 86400000){
  if (1 > users[who].koin) throw 'Orang Yang Kamu Tag, Tidak Memiliki Uang\nApakah Kamu Tidak Kasihan?'
  if (1 > users[who].limit) throw 'Orang Yang Kamu Tag, Tidak Memiliki Uang\nApakah Kamu Tidak Kasihan?'
  users[who].koin -= dapat * 1
  users[m.sender].koin += dapat * 1
  users[who].limit -= coin * 1
  users[m.sender].limit += coin * 1
  global.db.data.users[m.sender].udahrampok = new Date * 1
  conn.reply(m.chat, `Berhasil Merampok Koinnya Dan Kamu Mendapatkan ${dapat} Koin Dan ${coin} Limit`, m)
  conn.sendMessage(who, { text: `Kamu Telah Di Rampok Oleh ${nama} Dan Kehilangan ${dapat} Koin Serta ${coin} Limit`})

}else conn.reply(m.chat, `Kamu Sudah Merampok Dan Berhasil Sembunyi , Tunggu ${timers} Untuk Merampok Lagi`, m)
}
handler.help = ['merampok']
handler.tags = ['game']
handler.command = /^(merampok|rampok)$/
handler.limit = true
handler.group = true

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Hari* ', h, ' *Jam* ', m, ' *Menit* ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}