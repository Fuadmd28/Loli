import { googleImage } from '@bochilteam/scraper';
import { pickRandom } from "../lib/func.js";

const handler = async (m, { conn, command }) => {
    let res = await googleImage('meme china');
    let image = pickRandom(res);
    await conn.sendFile(m.chat, image, null, `Nih ${command} nya`, m);
};

handler.help = ['memechina'];
handler.tags = ['internet'];
handler.command = /^(memechina)$/i;
handler.limit = true;

export default handler;
