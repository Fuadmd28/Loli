import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/Hai.mp3";
	conn.sendFile(m.chat, vn, "Hai.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(lofi|kak lofi|lofii)$/i;
handler.command = new RegExp();

export default handler;