import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan Text! *Contoh .badgirl Lofi*';
  m.reply('Tunggu Sebentar...');
  const res = `https://api.lolhuman.xyz/api/badgirl?apikey=${global.lolkey}&name=${text}`;
  conn.sendFile(m.chat, res, 'badgirl.jpg', `Nih kak`, m, false);
};

handler.help = ['badgirl']
handler.tags = ['maker'];
handler.command = /^badgirl$/i;
handler.limit = true;
handler.onlyprem = true;
export default handler;