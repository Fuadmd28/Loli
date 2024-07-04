const handler = async (m, { usedPrefix, text }) => {
    m.reply(`Berhasil memulai absen!\n\n*${usedPrefix}absen* - untuk absen\n*${usedPrefix}cekabsen* - untuk mengecek absen\n*${usedPrefix}hapusabsen* - untuk menghapus data absen`);

    conn.absen = conn.absen || {};
    const id = m.chat;

    if (id in conn.absen) {
        throw `_*Masih ada absen di chat ini!*_\n\n*${usedPrefix}hapusabsen* - untuk menghapus absen`;
    }

    conn.absen[id] = [m, [], text];
};

handler.help = ['mulaiabsen <teks>'];
handler.tags = ['group'];
handler.command = /^(start|mulai)absen$/i;
handler.group = true;
handler.admin = true;

export default handler;