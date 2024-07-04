import axios from 'axios';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`;

  try {
    const response = await axios.get(`https://id.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro&explaintext&titles=${encodeURIComponent(text)}`);
    const pages = response.data.query.pages;
    const pageId = Object.keys(pages)[0];
    const page = pages[pageId];
    
    if (page.extract) {
      m.reply(`
*${page.title}*
${page.extract}
`.trim());
    } else {
      m.reply('Artikel tidak ditemukan.');
    }
  } catch (error) {
    console.log(error);
    throw 'Terjadi kesalahan dalam memproses permintaan.';
  }
};

handler.help = ['wikipedia']
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i;
handler.onlyprem = true
export default handler;