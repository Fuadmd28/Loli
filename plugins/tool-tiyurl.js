import axios from 'axios';
import fetch from 'node-fetch';

const handler = async (m, { text, conn: fur, args }) => {
    if (!text) throw 'URL/link mana?\n\n*CONTOH:*\n.tinyurl https://instagram.com';

    fur.reply(m.chat, await shortlink(text), m);
}

handler.help = ['tinyurl']
handler.tags = ['tools'];
handler.command = /^tinyurl$/i;

export default handler;

async function shortlink(url) {
    const isURL = /https?:\/\//.test(url);
    return isURL ? (await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)).data : '';
}