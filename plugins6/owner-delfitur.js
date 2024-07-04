import path from 'path';
import fs from 'fs';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (conn.user.jid !== global.conn.user.jid) return;
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} plugins/creator.js`, m);
  
  let filePath = path.join(process.cwd(), text);
  if (!fs.existsSync(filePath)) {
    return m.reply('File/Folder Not Found!');
  }
  
  if (fs.statSync(filePath).isDirectory()) {
    fs.rmdirSync(filePath, { recursive: true });
  } else {
    fs.unlinkSync(filePath);
  }

  conn.reply(m.chat, `🚨 Sukses Delete ${text}!`, m);
};

handler.help = ['df *<text>*', 'deletefitur *<text>*', 'delfitur *<text>*'];
handler.command = /^df|deletefitur|delfitur$/i;
handler.tags = ['owner'];
handler.owner = true;

export default handler;