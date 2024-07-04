import path from "path";
import fs from "fs/promises";

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Enter Name File!!\n\nExample: ${usedPrefix + command} plugins/creator.js`;
  const filePath = path.join(process.cwd(), text);
  try {
    await fs.access(filePath);
    const stats = await fs.stat(filePath);
    if (stats.isDirectory()) {
      await fs.rm(filePath, { recursive: true });
    } else {
      await fs.unlink(filePath);
    }
    m.reply(`Sukses Delete ${text}!`);
  } catch (error) {
    m.reply('File/Folder Not Found!');
  }
};

handler.command = handler.help = ['df', 'deletefitur', 'delfitur'];
handler.tags = ['owner'];
handler.owner = true;

export default handler;