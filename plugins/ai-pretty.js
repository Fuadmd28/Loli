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
      text: 'ð',
      key: m.key,
    }
  });

  const media = await q.download();
  const url = await uploadImage(media);
  const hasil = await fetch(`https://skizo.tech/api/aimirror?&apikey=${global.skizo}&url=${url}&filter=pretty_soldier`);
  const res = await hasil.json();
  await conn.sendFile(m.chat, res.generated_image_addresses, 'pretty.jpg', 'ð± Successfully converted', m);
};

handler.help = ['pretty'];
handler.tags = ['ai'];
handler.premium = false;
handler.command = /^(pretty)$/i;
handler.register = true;
handler.limit = true;
handler.private = false;

export default handler;