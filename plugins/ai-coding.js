import fetch from 'node-fetch';

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* buatkan saya code express.js`;

  try {
    await m.reply(wait);
    const apiKey = 'fDJb474t'; // Ganti dengan API key yang diberikan
    const formattedText = encodeURIComponent(text);
    const apiUrl = `https://api.betabotz.eu.org/api/search/blackbox-chat?text=${formattedText}&apikey=${apiKey}`;
    const apii = await fetch(apiUrl);
    const res = await apii.json();
    await m.reply(res.message);
  } catch (err) {
    console.error(err);
    throw "Terjadi kesalahan dalam menjawab pertanyaan";
  }
};

handler.command = handler.help = ['blackbox', 'blackboxai', 'aicoding'];
handler.tags = ['tools'];
handler.premium = false;

export default handler;
