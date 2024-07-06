import ytdl from 'ytdl-core'

let handler = async (m, { usedPrefix, command, conn, text, args }) => {
    if (!text) return m.reply('Umh... Linknya??');
    m.reply(wait)
    try {
        let Ytdl = await ytmp3(args[0]);
        let dls = "Download Audio Success";
        let ytthumb = await (await conn.getFile(Ytdl.meta.image)).data;
        
        let doc = {
            audio: Ytdl.buffer,
            mimetype: "audio/mp4",
            fileName: Ytdl.meta.title,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: args[0],
                    title: Ytdl.meta.title,
                    body: dls,
                    sourceUrl: args[0],
                    thumbnail: ytthumb
                }
            }
        };
        
        await conn.sendMessage(m.chat, doc, { quoted: m });
    } catch (e) {
        throw eror;
    }
};

handler.tags = ['downloader'];
handler.help = ['ytmp3'];
handler.command = /^(yta|ytmp3|ytaudio)$/i;
handler.limit = true;

export default handler

async function ytmp3(url) {
    try {
        const { videoDetails } = await ytdl.getInfo(url, { lang: "id" });
        const stream = ytdl(url, { filter: "audioonly", quality: 140 });
        const chunks = [];
        
        stream.on("data", (chunk) => {
            chunks.push(chunk);
        });
        
        await new Promise((resolve, reject) => {
            stream.on("end", resolve);
            stream.on("error", reject);
        });
        
        const buffer = Buffer.concat(chunks);
        
        return {
            meta: {
                title: videoDetails.title,
                channel: videoDetails.author.name,
                seconds: videoDetails.lengthSeconds,
                description: videoDetails.description,
                image: videoDetails.thumbnails.slice(-1)[0].url,
            },
            buffer: buffer,
            size: buffer.length,
        };
    } catch (error) {
        throw error;
    }
}