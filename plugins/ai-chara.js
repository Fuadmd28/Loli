import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Masukan Promptnya\nExample:\n.animedif neko girl, cute face, upper body, white hair, look at viewer'
m.reply(wait)
let anu = `https://api.ibeng.tech/api/ai/animediffusion?q=${text}&apikey=${global.ibeng}`
conn.sendFile(m.chat, anu, 'anu.jpg', `Prompt: ${text}`, m)
    
}
handler.help = ['animedi']
handler.tags = ['ai']
handler.command = /^(animedi)$/i
handler.limit = true
handler.premium = true
expndlerimport fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Masukan Promptnya\nExample:\n.animedif neko girl, cute face, upper body, white hair, look at viewer'
m.reply(wait)
let anu = `https://api.clayzaaubert.my.id/api/ai/animediffusion?q=${text}&apikey=${global.clayza}`
conn.sendFile(m.chat, anu, 'anu.jpg', `Prompt: ${text}`, m)
    
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(ani)$/i
handler.limit = true
export default handle