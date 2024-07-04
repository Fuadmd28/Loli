const handler = async (m, { conn }) => {
    conn.lengkapikalimat = conn.lengkapikalimat ? conn.lengkapikalimat : {};
    const id = m.chat;

    if (!(id in conn.lengkapikalimat)) throw false;

    const json = conn.lengkapikalimat[id][1];
    const ans = json.jawaban.trim();
    const clue = ans.replace(/[AIUEOaiueo]/g, '_');

    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.lengkapikalimat[id][0]);
};

handler.command = /^leka$/i;
handler.limit = true;

export default handler;