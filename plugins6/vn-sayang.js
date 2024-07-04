let handler = async (m, { conn, text, isOwner ,usedPrefix, command }) => {
  if (global.db.data.users[m.sender].nama == 'Zel Suka Loli') return conn.sendFile(m.chat, './vn/claraaa.mp3', "lah.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
	conn.sendFile(m.chat, './vn/claraaaa.mp3', "lah.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});

}
handler.customPrefix = /^(sayang|ayang|ay)$/i;
handler.command = new RegExp();

export default handler;