// Nama file: handler.mjs atau handler.js
import fetch from 'node-fetch';

const handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|');

  if (!args[0]) throw `Example: ${usedPrefix}${command} Mungkin pekerjaanku yang paling diakui, tapi aku takkan bisa membuatnya sendirian.`;

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let res = `https://api.lolhuman.xyz/api/quotemaker?apikey=${global.lolkey}&text=${response[0]}`;
  conn.sendFile(m.chat, res, 'quotesmaker.jpg', '```Success...\nDont forget to donate```', m, false);
};

handler.help = ['quotemaker']
handler.tags = ['maker'];
handler.command = /^(quotemaker)$/i;
handler.limit = true;

export default handler;