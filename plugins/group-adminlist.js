const getAdmin = (participants) => {
    let getAdminAll = [];
    for (let b of participants) {
        if (b.admin === "admin" || b.admin === "superadmin") {
            getAdminAll.push(b.id);
        }
    }
    return getAdminAll;
};

const handler = async (m, { conn, args, participants }) => {
    let grup = await conn.getName(m.key.remoteJid);
    let mimin = m.isGroup ? getAdmin(participants) : '';
    let txt = `List Admin Group *${grup}*\n*Total:* ${mimin.length}\n\n`;
    for (let min of mimin) {
        txt += `• @${min.split('@')[0]}\n`;
    }
    conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) });
};

handler.help = ['listadmin','adminlist'];
handler.tags = ['group'];
handler.command = /^(adminlist|listadmin)$/i;
handler.group = true;
handler.register = false;

export default handler;
