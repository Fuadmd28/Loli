let handler = async (m, { conn }) => {
    let vn = "./vn/salam.mp3"
	conn.sendFile(m.chat, vn, "lah.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(assalamualaikum|Assalamualaikum)$/i;
handler.command = new RegExp();

export default handler;