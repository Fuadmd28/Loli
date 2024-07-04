import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSNbrfcGw/`;
  }
    if (!args[0].match(/tiktok/gi)) {
      throw `URL Tidak Ditemukan!`;
    }
    m.reply(wait);
    try {
    const api = await fetch(`https://aemt.me/download/tiktokslide?url=${args[0]}`);
    const res = await api.json();
    var {
      id, 
      region, 
      title,
      play
    } = res.result.data
    conn.sendFile(m.chat, play, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
    for (let i of res.result.data.images) {
    await sleep(3000)
    conn.sendFile(m.chat, i, null, `*Deskripsi:* ${title}\n*Region*: ${region}\n*ID:* ${id}\n*Audio:* ${play}`, m)
        }
  } catch (e) {
    console.log(e);
    conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  }
};
handler.command = handler.help = ['tiktokslide','ttslide','slide'];
handler.tags = ['downloader'];
handler.limit = true;

export default handler

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}