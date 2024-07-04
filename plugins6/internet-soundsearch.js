import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await SoundSearch(text)
  res = res.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  let loadd = [
 '▒▒▒▒▒▒▒▒▒▒▒▒▒ 0%',
 '██▒▒▒▒▒▒▒▒▒▒▒ 10%',
 '████▒▒▒▒▒▒▒▒▒ 30%',
 '███████▒▒▒▒▒▒ 50%',
 '██████████▒▒▒ 70%',
 '█████████████ 100%',
 `${res}`
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Bentar_'})

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
  }
handler.help = ['soundsearch']
handler.tags = ['internet']
handler.command = /^(soundsearch)$/i
handler.limit = true

export default handler

async function SoundSearch(search) { 
   return new Promise(async (resolve, reject) => { 
     try { 
       const { data, status } = await axios.get(`https://soundcloud.com/search?q=${search}`) 
       const $ = cheerio.load(data) 
       const ajg = [] 
       $('#app > noscript').each((u, i) => { 
         ajg.push($(i).html()) 
       }) 
       const _$ = cheerio.load(ajg[1]) 
       const hasil = [] 
       _$('ul > li > h2 > a').each((i, u) => { 
         if ($(u).attr('href').split('/').length === 3) { 
           const linkk = $(u).attr('href') 
           const judul = $(u).text() 
           const link = linkk ? linkk : 'Tidak ditemukan' 
           const jdi = `https://soundcloud.com${link}` 
           const jadu = judul ? judul : 'Tidak ada judul' 
           hasil.push({ 
             link: jdi, 
             judul: jadu 
           }) 
         } 
       }) 
       if (hasil.every(x => x === undefined)) return { developer: '@Zeltoria', mess: 'no result found' } 
       resolve(hasil) 
     } catch (err) { 
       console.error(err) 
     } 
   }) 
 }