import fetch from 'node-fetch';

const handler = async (m, { conn, command }) => {
    m.reply('SIAP UNTUK DJ OM');
    let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`;
    await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
        type: 'audioMessage',
        ptt: false,
        seconds: 0,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                mediaUrl: 'www.instagram.com/zzyko_04',
                mediaType: 2,
                description: 'www.instagram.com/zzyko_04',
                title: "Now Playing...",
                body: wm,
                thumbnail: await (await fetch('https://telegra.ph/file/0dd3974f6f589f500be54.png')).buffer(),
                sourceUrl: 'www.instagram.com/zzyko_04'
            }
        }
    });
};

handler.help = ['mangkane25', 'mangkane26', 'mangkane27', 'mangkane28', 'mangkane29', 'mangkane30', 'mangkane31', 'mangkane32', 'mangkane33', 'mangkane34', 'mangkane35', 'mangkane36', 'mangkane37', 'mangkane38', 'mangkane39', 'mangkane40', 'mangkane41', 'mangkane42', 'mangkane43', 'mangkane44', 'mangkane45', 'mangkane46', 'mangkane47', 'mangkane48', 'mangkane49', 'mangkane50', 'mangkane51', 'mangkane52', 'mangkane53', 'mangkane54'];
handler.tags = ['audio'];
handler.command = /^(mangkane25|mangkane26|mangkane27|mangkane28|mangkane29|mangkane30|mangkane31|mangkane32|mangkane33|mangkane34|mangkane35|mangkane36|mangkane37|mangkane38|mangkane39|mangkane40|mangkane41|mangkane42|mangkane43|mangkane44|mangkane45|mangkane46|mangkane47|mangkane48|mangkane49|mangkane50|mangkane51|mangkane52|mangkane53|mangkane54)$/i;
handler.limit = true;

export default handler;
