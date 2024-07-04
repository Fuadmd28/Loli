import { readFileSync } from 'fs';

const handler = async (m, { usedPrefix, command, text, conn }) => {
    if (conn.user.jid !== global.conn.user.jid) return;
    const ar = Object.keys(plugins);
    const ar1 = ar.map(v => v.replace('.js', ''));
    if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} kemii-menu`, m);
    if (!ar1.includes(text)) return conn.reply(m.chat, `'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join('\n')}`, m);
    const kemii = readFileSync(`./plugins/${text}.js`, 'utf-8');
    conn.sendMessage(m.chat, {
        text: kemii,
        contextInfo: {
            externalAdReply: {
                title: "Get Plugins - Kikuchanj",
                thumbnailUrl: 'https://telegra.ph/file/a4c154090b560b2c531f6.jpg',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};

handler.help = ['getplugin'].map(v => v + ' *<teks>*');
handler.tags = ['owner'];
handler.command = /^(getplugin|gp)$/i;

handler.owner = true;

export default handler;