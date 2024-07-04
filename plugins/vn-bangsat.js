import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/bangsat.mp3";
	conn.sendFile(m.chat, vn, "bangsat.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(kontol|memek|ajg|anjing|babi|mek|bangsat)$/i;
handler.command = new RegExp();

export default handler;