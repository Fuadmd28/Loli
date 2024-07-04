import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

const handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw '*Contoh:* .ai presiden Indonesia yang pertama';
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    },
  });

  let hasil = await fetch(`https://skizo.tech/api/openai?text=${text}&apikey=${global.skizo}`);

  try {
    let res = await hasil.json();
    let kiku = `❏ *Pertanyaan:*\n${text}\n\n❏ *Jawaban:*\n${res.result}`;
    conn.reply(m.chat, kiku, m, {
      contextInfo: {
        externalAdReply: {
          title: 'GPT - 3 CHATBOTS',
          thumbnailUrl: 'https://telegra.ph/file/68dd82b54ea1ad55f7ec7.jpg',
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    });
  } catch (e) {
    console.log(e);
    m.reply('Gagal Meminta Apa Yang Kamu Mau:(');
  }
};

handler.command = /^(ai|openai|gpt)$/i;
handler.help = ['ai','openai','gpt'];
handler.tags = ['ai'];
handler.limit = true;
handler.onlyprem = true;

export default handler;
