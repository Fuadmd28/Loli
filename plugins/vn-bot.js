import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/apa.mp3";
	conn.sendFile(m.chat, vn, "apa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(tes|p|apa|bot|lofi)$/i;
handler.command = new RegExp();

export default handler;