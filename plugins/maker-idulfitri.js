// Nama file: handler.mjs atau handler.js
import fetch from 'node-fetch';

const handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|');
  if (!args[0]) throw `Example: ${usedPrefix}${command} Kemii`;
  
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let res = `https://api.lolhuman.xyz/api/idulfitri?apikey=${global.lolkey}&text=${response[0]}`;
  conn.sendFile(m.chat, res, 'idulfitri.jpg', `Done`, m, false);
};

handler.help = ['idulfitri'];
handler.tags = ['maker'];
handler.command = /^(idulfitri)$/i;
handler.limit = true;
handler.onlyprem = true;
export default handler;