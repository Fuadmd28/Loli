import api from 'api-dylux';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `*Example*: .fb https://www.facebook.com/xxxxxxx`;
  }

  try {
    const response = await api.fbdl(text);
    conn.sendMessage(m.chat, {
      react: {
        text: 'Ã°Å¸â¢â',
        key: m.key,
      }
    })
    conn.sendFile(m.chat, response.videoUrl, 'fb.mp4', response.title, m);
  } catch (error) {
    console.log(error);
    m.reply('There seems to be a problem downloading the video.');
  }
};

handler.help = ['facebook']
handler.tags = ['downloader'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
export default handler;