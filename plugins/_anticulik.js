import fs from 'fs';

const handler = m => m;

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return;
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        let teks = `Invite Group
• 13 Hari / Rp 5,000
• 30 Hari  / Rp 10,000
• Permanen / Rp 30,000

Jika berminat hubungi: @${global.owner[0]} untuk order:)
        `;
        this.reply(m.chat, teks, m);
        const data = global.owner.filter(([id, isCreator]) => id && isCreator);
        this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m);
    }
}

export default handler;
