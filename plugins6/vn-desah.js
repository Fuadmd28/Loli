let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, "./vn/desahh.mp3", "lah.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Desah|desah)$/i;
handler.command = new RegExp();

export default handler;