// Nama file: handler.mjs atau handler.js
import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

const handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let name = await conn.getName(who);
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (!mime) throw 'Send/Reply Images with the caption *.pixelate*';

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let media = await q.download();
  let url = await uploadImage(media);
  let hasil = await (await fetch(`https://api.lolhuman.xyz/api/editor/pixelate?apikey=${global.lolkey}&img=${url}`)).buffer();

  await conn.sendFile(m.chat, hasil, '', '```Success...\nDont forget to donate```', m);
};

handler.help = ['pixelate','pixel'];
handler.tags = ['ai'];
handler.premium = false;
handler.command = /^(pixelate|pixel)$/i;
handler.limit = true;

export default handler;