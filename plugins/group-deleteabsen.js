const handler = async (m, { usedPrefix }) => {
  const id = m.chat;
  conn.absen = conn.absen ? conn.absen : {};
  if (!(id in conn.absen)) throw `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`;
  delete conn.absen[id];
  m.reply(`Done!`);
};

handler.help = ['hapusabsen'];
handler.tags = ['group'];
handler.command = /^(delete|hapus)absen$/i;
handler.group = true;
handler.admin = true;

export default handler;