import fetch from "node-fetch";

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Example: ${usedPrefix + command} avatar`;
  await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  const kemii = await fetch(`https://api.neoxr.eu/api/film?q=${text}&apikey=raczmf`);
  const res = await kemii.json();

  let resultText = "";
  for (let i = 0; i < res.data.length; i++) {
    const result = res.data[i];
    const hasil = `• Title: *${result.title}*• Tags: *${result.tags}*\n• Directors: *${result.directors}*\n• Actors: *${result.actors}*\n• Link: *${result.url}*\n`;
    resultText += hasil + "\n";
  }
  const thumb = res.data[0].thumbnail;
  const name = m.sender;
  const fkonn = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: "6283137550315@s.whatsapp.net" } : {}),
    },
    message: {
      contactMessage: {
        displayName: await conn.getName(name),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };
  conn.sendMessage(m.chat, {
    text: resultText,
    contextInfo: {
      externalAdReply: {
        title: "Film Search - 𝐿yosh",
        thumbnailUrl: thumb,
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  });
};

handler.help = ["film"]
handler.tags = ["internet"];
handler.command = /^film|filem$/i;
handler.limit = true;

export default handler;
