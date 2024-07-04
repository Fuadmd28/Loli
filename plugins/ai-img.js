import { Configuration, OpenAIApi } from "openai";

const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw (`Membuat gambar dari AI.\n\nContoh:\n${usedPrefix}${command} Wooden house on snow mountain`);
    
    await m.reply('Searching...');
    
    const configuration = new Configuration({
        apiKey: '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'
    });
    
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
        prompt: text,
        n: 1,
        size: "512x512",
    });

    conn.sendMessage(m.chat, { image: { url: response.data.data[0].url }, caption: `Hai @${m.sender.split("@")[0]}\n\nhasil pencarian: ${text}\n\n`, mentions: [m.sender] }, { quoted: m });
};

handler.help = ['ai-image', 'dalle', 'aiimg', 'aiimage', 'openaiimage']
handler.tags = ['ai'];
handler.command = ['ai-image', 'dalle', 'aiimg', 'aiimage', 'openaiimage'];
handler.limit = true;

export default handler;