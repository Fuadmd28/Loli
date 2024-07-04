import fetch from 'node-fetch';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  let response = args.join(' ').split('|');
  if (!args[0]) throw `Example: ${usedPrefix}${command} Kemii|Sazumi`;
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
  let res = `https://api.betabotz.eu.org/api/photooxy/pubg?text=${response[0]}&text2=${response[1]}&apikey=${global.lann}`;
  conn.sendFile(m.chat, res, 'pubg.jpg', '```Success...\nDont forget to donate```', m, false);
};

handler.help = ['pubg']
handler.tags = ['maker'];
handler.command = /^(pubg)$/i;
handler.limit = true;

export default handler;