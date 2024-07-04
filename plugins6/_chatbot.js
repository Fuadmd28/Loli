import cheerio from 'cheerio';
import fetch from 'node-fetch';

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.chatbot) {
    try {
   let res = await fetch(`https://api-charaai.vercel.app/charaai?chara=Klee&text=${m.text}`)
let oke = await res.json()
   await conn.sendMessage(m.chat, { text: `${oke}`,
contextInfo: {
externalAdReply: {
showAdAttribution: false,
title: "Klee Genshin Impact",
body: "Character Ai",
mediaUrl: '',
description: '',
previewType: "PHOTO",
thumbnailUrl: `https://telegra.ph/file/0154eda64600f9cc42c38.jpg`
}
}
}, { quoted: m })
  } catch (e) {
  m.reply('Error')
    }
}}