let handler = async (m, { conn, args, usedPrefix }) => {
	let info = `*Contoh:* ${usedPrefix}feed kucing
- - - - - - - - - - - - - - - - - - - - - - - - - 
LIST PET 
🐈 • Cat
🐕 • Dog
🦊 • Fox
🐎 • Horse`
let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])
    let type = (args[0] || '').toLowerCase()
    let emo = (type == 'fox' ? '🦊':'' || type == 'cat' ? '🐈':'' || type == 'dog' ? '🐕':'' || type == 'horse' ? '🐴':'' ) 
    let user = global.db.data.users[m.sender]
    let rubah = global.db.data.users[m.sender].fox
    let kuda = global.db.data.users[m.sender].horse
    let kucing = global.db.data.users[m.sender].cat
    let anjing = global.db.data.users[m.sender].dog
    switch (type) {
        case 'fox':
            if (rubah == 0) return m.reply(`Kamu Tidak Memiliki Pet Ini, Beli Dulu Sana`)
            if (rubah == 10) return m.reply(`Pet Kamu Sudah Level Tertinggi`)
            let __waktur = (new Date - user.foxlastfeed)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - user.foxlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.foxexp += 20
                    user.foxlastfeed = new Date * 1
                    m.reply(`Memakan *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (user.foxexp > naiklvl) {
                            user.fox += 1
                            user.foxexp -= (rubah * 100)
                            m.reply(`Selamat Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Berilah Makan Dalam ${waktur} Lagi`)
            break
        case 'cat':
            if (kucing == 0) return m.reply(`Kamu Tidak Memiliki Pet Ini, Beli Dulu Sana`)
            if (kucing == 10) return m.reply(`Pet Kamu Sudah Di Level Tertinggi`)
            let __waktuc = (new Date - user.catlastfeed)
            let _waktuc = (600000 - __waktuc)
            let waktuc = clockString(_waktuc)
            if (new Date - user.catlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.catngexp += 20
                    user.catlastfeed = new Date * 1
                    m.reply(`Memakan *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            
                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (user.catexp > naiklvl) {
                            user.cat += 1
                            user.catngexp -= (kucing * 100)
                            m.reply(`Selamat Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada`)
            } else m.reply(`Pet Kamu Sudah Kenyang`)
            break
        case 'dog':
            if (anjing == 0) return m.reply(`Kamu Tidak Memiliki Pet Ini, Beli Dulu Sana`)
            if (anjing == 10) return m.reply(`Pet Kamu Sudah Di Level Tertinggi`)
            let __waktua = (new Date - user.doglastfeed)
            let _waktua = (600000 - __waktua)
            let waktua = clockString(_waktua)
            if (new Date - user.doglastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.dogexp += 20
                    user.doglastfeed = new Date * 1
                    m.reply(`Memakan *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (user.dogexp > naiklvl) {
                            user.dog += 1
                            user.dogexp -= (anjing * 100)
                            m.reply(`Selamat Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada`)
            } else m.reply(`Pet Kamu Sudah Kenyang`)
            break
        case 'horse':
            if (kuda == 0) return m.reply(`Kamu Tidak Memiliki Pet Ini`)
            if (kuda == 10) return m.reply(`Pet Kamu Sudah Di Level Tertinggi`)
            let __waktuk = (new Date - user.horselastfeed)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - user.horselastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.horseexp += 20
                    user.horselastfeed = new Date * 1
                    m.reply(`Memakan *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (user.horseexp > naiklvl) {
                            user.horse += 1
                            user.horseexp -= (kuda * 100)
                            m.reply(`Selamat Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada`)
            } else conn.reply(m.chat, `Pet Kamu Sudah Kenyang, Tunggu ${waktuk} Lagi`, m)
            break
        default:
            return conn.reply(m.chat, info, m)
    }
}
handler.help = ['feed']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
