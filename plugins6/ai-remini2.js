import FormData from "form-data";
import Jimp from "jimp";

async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}
let handler = async (m, { conn, usedPrefix, command }) => {
	switch (command) {
		case "remini2":
		case "hdr2":
			{
				conn.enhancer = conn.enhancer ? conn.enhancer : {};
				if (m.sender in conn.enhancer)
					throw "Masih Ada Proses Yang Belum Selesai Ayang, Silahkan Tunggu Sampai Selesai Yah >//<";
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `Fotonya Mana Sayang?`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `Mime ${mime} tidak support`;
				else conn.enhancer[m.sender] = true;
				m.reply(wait);
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", `Nih Ayang Udah Jadi >,<`, m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Proses Gagal :(");
					}
					delete conn.enhancer[m.sender];
				}
			}
			break;
};
}
handler.help = ["remini2","hdr2"];
handler.tags = ["ai"];
handler.limit = true;
handler.command = ["remini2","hdr2"];
export default handler;