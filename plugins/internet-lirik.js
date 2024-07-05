import fetch from "node-fetch";

const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Ex: ${usedPrefix}${command} Jiwa yang bersedih`;
    try {
        const response = await fetch(`https://api.betabotz.eu.org/api/search/lirik?lirik=${text}&apikey=${lann}`);
        const data = await response.json();
        const caption = `
${data.result.lyrics}

ℹ️ More info:
🔗 ${data.result.image}
🎤 Artist: ${data.result.artist}`;
        await conn.relayMessage(m.chat, {
            extendedTextMessage: {
                text: caption,
                contextInfo: {
                    externalAdReply: {
                        title: `🎵 ${data.result.title} - ${data.result.artist} 🎵`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: data.result.image,
                        sourceUrl: ''
                    }
                },
                mentions: [m.sender]
            }
        }, {});
    } catch (e) {
        console.log(e);
        m.reply('Terjadi kesalahan, silahkan coba lagi nanti');
    }
};

handler.help = ['lirik'].map(v => v + ' <Title>');
handler.tags = ['internet'];
handler.command = /^(lirik|lyrics|lyric)$/i;

export default handler;
