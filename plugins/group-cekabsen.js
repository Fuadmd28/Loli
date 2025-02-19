const handler = async (m, { conn, usedPrefix }) => {
  const id = m.chat;
  conn.absen = conn.absen ? conn.absen : {};
  if (!(id in conn.absen)) throw `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`;

  const d = new Date();
  const date = d.toLocaleDateString('id', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const absen = conn.absen[id][1];
  const list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n');
  conn.reply(
    m.chat,
    `*「 ABSEN 」*

Tanggal: ${date}
${conn.absen[id][2]}

┌ *List absen:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────

_${global.wm}_`,
    m,
    { contextInfo: { mentionedJid: absen } }
  );
};

handler.help = ['cekabsen'];
handler.tags = ['group'];
handler.command = /^cekabsen$/i;
handler.group = true;

export default handler;