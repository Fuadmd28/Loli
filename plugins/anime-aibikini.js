import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

const handler = async (m, { conn, usedPrefix, command, text }) => {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const name = await conn.getName(who);
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw `Send/Reply Images with the caption *.${command}*`;
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  const media = await q.download();
  const url = await uploadImage(media);
  const hasil = await fetch(`https://skizo.tech/api/aimirrorvip?&apikey=${global.skizo}&url=${url}&filter=bikini`);
  const res = await hasil.json();
  const kemii = `_◦ Status_ : ${res.draw_status}
_◦ Time Clear_ : ${res.time_processing}
_◦ Image To_ : ${res.your_choice_filter}`;
  await conn.sendFile(m.chat, res.generated_image_addresses, 'bikini.jpg', kemii, m);
};

handler.help = ['bikini'];
handler.tags = ['anime'];
handler.premium = false;
handler.command = /^(bikini)$/i;
handler.register = false;
handler.limit = true;
handler.premium = true;

export default handler;