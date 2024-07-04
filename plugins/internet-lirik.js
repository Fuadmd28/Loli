import axios from 'axios';

const handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
    if (!teks) throw `Ex: ${usedPrefix}${command} Jiwa yang bersedih`;
    try {
        const result = await lirik(text);
        const caption = `
${result.lyrics}

ℹ️ More info:
🔗 ${result.url}
🎤 Artist: ${result.artistName}
📅 Released: ${result.releasedAt}`;
        await conn.relayMessage(m.chat, {
            extendedTextMessage:{
                text: caption, 
                contextInfo: {
                     externalAdReply: {
                        title: `🎵 ${result.title} - ${result.artist} 🎵`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: result.thumbnail,
                        sourceUrl: 'https://aemt.me'
                    }
                }, mentions: [m.sender]
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

async function lirik(q) {
    try {
        const searches = await axios.get(`https://aemt.me/lirik?text=${q}`);
     
        const result = searches.data.result;
        const data = {
            lyrics: result.lyrics,
            thumbnail: result.thumbnail,
            title: result.title,
            artist: result.artist,
            image: result.image,
            fullTitle: result.fullTitle,
            featuredTitle: result.featuredTitle,
            url: result.url,
            artistName: result.artistName,
            artistUrl: result.artistUrl,
            artistThumbnail: result.artistThumbnail,
            artistImage: result.artistImage,
            releasedAt: result.releasedAt,
            instrumental: result.instrumental,
            iq: result.iq,
            stats: result.stats,
            releaseDateForDisplay: result.releaseDateForDisplay,
            releaseDateWithAbbreviatedMonthForDisplay: result.releaseDateWithAbbreviatedMonthForDisplay
        };
        return data;
    } catch (error) {     
        return { error: 'Internal server error!' };
    }
              }
