import ytdl from 'ytdl-core';

var handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Link YouTube Nya Mana';
  m.reply(wait);
  let q = 'highestaudio';
  let v = args[0];

  // Ambil info dari video
  const info = await ytdl.getInfo(v);
  const format = ytdl.chooseFormat(info.formats, { quality: q });
  const dl_url = format.url;
  const ttl = info.videoDetails.title;
  const size = format.contentLength;

  // Tampilkan informasi file
  const caption = `
• JUDUL: ${ttl}
• UKURAN: ${size}
• LINK YOUTUBE: ${v}`;

  // Kirim file audio beserta informasi
  await conn.sendMessage(m.chat, {
    document: { url: dl_url },
    mimetype: 'audio/mpeg',
    fileName: `${ttl}.mp3`,
    caption: caption
  }, { quoted: m });
}

// Jika ingin menambahkan tag, ubah code berikut:
handler.tags = ['downloader'];
handler.help = ['ytdoc', 'ytdoc','ytaudio'];
handler.command = /^(ytdoc)$/i;
handler.limit = true;
export default handler;
