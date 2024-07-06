import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} 1girl, solo, ponytail, blush.`, m);
  }

  if (typeof conn.sendReadReceipt === 'function') {
    conn.sendReadReceipt(m.chat);
  } else {
    console.warn('conn.sendReadReceipt is not a function');
  }

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    },
  });

  await m.reply(`_Generate Image From: *${text}*_`);
  const url = `https://api.fumifumi.xyz/api/text2img?query=${text}`;
  let capt = '```Success Generate Image```\n\n';
  capt += '```- Prompt:```' + '```' + ` ${text}` + '```\n';
  
  await conn.sendFile(m.chat, url, 'freefire.jpg', capt, m);
};

handler.help = ['txt2img'];
handler.tags = ['ai'];
handler.command = /^(txt2img)$/i;
handler.premium = true;

export default handler;