import fetch from 'node-fetch';

const timeout = 100000;
const poin = 600;

const handler = async (m, { conn, usedPrefix }) => {
    conn.lengkapikalimat = conn.lengkapikalimat ? conn.lengkapikalimat : {};
    const id = m.chat;

    if (id in conn.lengkapikalimat) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.lengkapikalimat[id][0]);
        throw false;
    }

    const src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/lengkapikalimat.json')).json();
    const json = src[Math.floor(Math.random() * src.length)];
    const caption = `${json.pertanyaan}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}leka untuk bantuan
Bonus: ${poin} XP
`.trim();

    conn.lengkapikalimat[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.lengkapikalimat[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.lengkapikalimat[id][0]);
                delete conn.lengkapikalimat[id];
            }
        }, timeout)
    ];
};

handler.help = ['lengkapikalimat'];
handler.tags = ['game'];
handler.command = /^lengkapikalimat/i;
handler.limit = true;
handler.group = true;

export default handler;
