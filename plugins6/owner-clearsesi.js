import { tmpdir } from 'os';
import { join } from 'path';
import fs from 'fs';

let handler = async (m, { args, text, conn }) => {
  const sessionsDir = join('sessions');

  function deleteFiles(sessions) {
    fs.readdir(sessions, (err, files) => {
      if (err) throw err;
      let deletedFiles = 0;

      for (const file of files) {
        if (file !== 'creds.json') {
          const filePath = join(sessions, file);
          fs.unlink(filePath, (err) => {
            if (err) throw err;
            deletedFiles++;
            if (deletedFiles === files.length - 1) {
              conn.reply(m.chat, 'Berhasil menghapus semua sesi kecuali creds.json', m);
            }
          });
        }
      }
    });
  }

  deleteFiles(sessionsDir);
};

handler.help = ['clearsession'];
handler.tags = ['owner'];
handler.command = /^(c(lear)?)(sessi|session)$/i;
handler.rowner = true;

export default handler;