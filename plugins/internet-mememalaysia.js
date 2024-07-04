import { googleImage } from '@bochilteam/scraper';
import { pickRandom } from "../lib/func.js";

const handler = async (m, { conn, command }) => {
    const res = await googleImage('meme malaysia');
    const image = pickRandom(res);
    await conn.sendFile(m.chat, image, null, `Nih ${command} nya`, m);
};

handler.help = ['mememalaysia'];
handler.tags = ['internet'];
handler.command = /^(mememalaysia)$/i;
handler.limit = true;

export default handler;
