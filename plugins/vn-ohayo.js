import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/ohayo.mp3";
	conn.sendFile(m.chat, vn, "ohayo.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(pagi|selamat pagi|ohayou|ohayo)$/i;
handler.command = new RegExp();

export default handler;
