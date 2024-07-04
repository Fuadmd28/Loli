import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Input item growtopia\n\nExample: ${usedPrefix + command} magplant`;
    const kemii = await fetch(`https://api.lolhuman.xyz/api/growiki?apikey=${global.lolkey}&query=${text}`);
    const res = await kemii.json();
    const hasil = `Name: ${res.result.name}\nDeskripsi: ${res.result.desc}\nRarity: ${res.result.rarity}\nRecipe: ${res.result.recipe}\nSplice: ${res.result.splice}\n\nInfo: ${res.result.info}`;
    const thumb = `https://api.lolhuman.xyz/api/gimage?apikey=${global.lolkey}&query=growtopia%20${text}`;
    conn.sendMessage(m.chat, {
        text: hasil,
        contextInfo: {
            externalAdReply: {
                title: 'G r o w - W i k i',
                thumbnailUrl: 'https://telegra.ph/file/6790948a797277fd34033.jpg',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    });
};

handler.help = ['growiki'];
handler.tags = ['internet'];
handler.command = /^(growiki)$/i;

export default handler;