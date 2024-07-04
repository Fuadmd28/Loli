import fetch from "node-fetch";

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukkan URL!\n\nContoh:\n${usedPrefix + command} https://vm.tiktok.com/ZSNwE3JNT/`;
  if (!args[0].match(/tiktok/gi)) throw `URL Tidak Ditemukan!`;
  m.reply("Tunggu sebentar...");  
  const url = args[0];
  const apis = await fetch(`https://skizo.tech/api/tiktok?url=${args[0]}&apikey=${global.skizo}`);
  
  var json = await apis.json()
  if(json.msg != "success") throw "_Error_ Ulang Lagi Aja Atau Yg Satu Nya .tiktok"
  var { 
    play, 
    wmplay, 
    region,
    title,
    duration,
    music,
  } = json.data
  await conn.sendFile(m.chat,play, 'tiktok.mp4', `
• *Deskripsi*: ${title}
\n• *Username*: ${region}
\n• *Durasi*: ${duration} detik`, m)

  conn.sendMessage(m.chat, { audio: { url: music }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
      title: title,
      body: "",
      thumbnailUrl: thumb,
      sourceUrl: nomorown,
      mediaType: 1,
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }} , { quoted: m })
};

handler.help = ['tiktok2','tt2']
handler.command = /^(tiktok2|tt2|tiktokdl|tiktoknowm|dltt)$/i
handler.tags = ['downloader'];
handler.onlyprem = true
handler.limit = 5
export default handler;