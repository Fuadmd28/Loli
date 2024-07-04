let handler = async (m, { conn }) => {
    let vn = "./vn/lopyou.mp3"
	if (global.db.data.users[m.sender].nama == 'Zel Suka Loli') return conn.sendFile(m.chat, vn, "lah.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
	conn.sendFile(m.chat, './vn/claraa.mp3', "lah.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
	
}
handler.customPrefix = /^(lopyou|lopyu|lopeyu|lopeyou|loveyu|loveyou|love you|love yu|i love you)$/i;
handler.command = new RegExp();

export default handler;