import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `Linknya??, Example: ${usedPrefix + command} https://pin.it/2sofHzZ`; 
m.reply(wait);

const api = await fetch(`https://aemt.me/download/pindl?url=${args[0]}`);
const res = await api.json();
let { media_type, image, title } = res.result.data;
if (media_type === 'video/mp4') {
await conn.sendMessage(m.chat, {video: {url: image}, caption: `*Downloader Pinterest*\n\n*Title :* ${title}\n*Mediatype :* ${media_type}\n*Source Url :* ${image}`},{quoted:m});
} else {
conn.sendFile(m.chat, image, 'pindl.png', `*Downloader Pinterest*\n\n*Title :* ${title}\n*Mediatype :* ${media_type}\n*Source Url :* ${image}`, m);
}
}
handler.help = ['pindl'];
handler.command = /^(pindl)$/i;
handler.tags = ['downloader'];

handler.limit = true;

export default handler