import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) throw 'Input Url!';
  const kemii = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=${global.lolkey}&url=${text}`);
  const res = await kemii.json();
  await conn.sendMessage(m.chat, { react: { text: "â³", key: m.key } });
  const hasil = `Title: ${res.result.title}\nTag: ${res.result.tag}\nLike: ${res.result.likes}\nViews: ${res.result.views}\nUploader: ${res.result.uploader}\nDuration: ${res.result.duration}`;
  conn.sendFile(m.chat, res.result.nowm, 'cocofun.mp4', `${hasil}`, m);
};

handler.help = ['cocofun'];
handler.tags = ['downloader'];
handler.command = /^cocofun$/i;
handler.premium = false;

export default handler;