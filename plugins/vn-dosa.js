import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/dosa.mp3";
	conn.sendFile(m.chat, vn, "dosa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(bangsat|ajg|goblok|mek|memek|babi|ngen|ngentod|ngewe)$/i;
handler.command = new RegExp();

export default handler;
