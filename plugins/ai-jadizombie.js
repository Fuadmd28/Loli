import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

const handler = async (m, { conn, usedPrefix, command, text }) => {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const name = await conn.getName(who);
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'Send/Reply Images with the caption *.jadizombie*';
  conn.sendMessage(m.chat, {
    react: {
      text: 'ð',
      key: m.key,
    }
  });
  const media = await q.download();
  const url = await uploadImage(media);
  const hasil = await (await fetch(`https://api.lolhuman.xyz/api/zombie-effect?apikey=${global.lolkey}&img=${url}`)).buffer();
  await conn.sendFile(m.chat, hasil, '', 'ð± Successfully converted', m);
};

handler.help = ['jadizombie'];
handler.tags = ['ai'];
handler.premium = false;
handler.command = /^(jadizombie)$/i;
handler.register = false;
handler.limit = true;
handler.private = false;

export default handler;
