let handler = async (m, { conn }) => {
    let vn = "./vn/nyaut.mp3"
	conn.sendFile(m.chat, vn, "lh.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Bot|bot|Clara|clara)$/i;
handler.command = new RegExp();

export default handler;