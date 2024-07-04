import fetch from 'node-fetch';

const handler = async ({ conn, text, command, usedPrefix, m }) => {
  if (!text) return conn.reply(m.chat, `â¢ *Example:* ${usedPrefix}${command} Kemii`, m);
  conn.sendMessage(m.chat, {
    react: {
      text: 'ð',
      key: m.key,
    },
  });
  const res = `https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=${global.lolkey}&text=${text}`;
  conn.sendFile(m.chat, res, 'maskot.jpg', '```Success...\nDon't forget to donate```', m, false);
};

handler.help = ['aovwall'];
handler.tags = ['maker'];
handler.command = /^(aovwall)$/i;
handler.register = true;
handler.limit = true;

export default handler;