import axios from "axios";

async function chatWithGPT(messages, txt) {
    return new Promise((resolve, reject) => {
        const url =
            "https://www.freechatgptonline.com/wp-json/mwai-ui/v1/chats/submit";
        const body = {
            botId: "default",
            messages,
            newMessage: txt,
            stream: false
        };

        axios
            .post(url, body)
            .then(response => {
                resolve(response.data.reply);
            })
            .catch(error => {
                resolve(error.data.message);
            });
    });
}

const handler = async (m, { usedPrefix, command, text }) => {
    if (!text)
        throw `enter text?\n\nContoh: ${usedPrefix + command} siapa presiden Indonesia`;
    let json = await chatWithGPT(
        [
            {
                role: "assistant",
                content:
                        "Kamu adalah chatbot whatsapp yang bernama *ZYKOBOTZ - MD*. Kamu dibuat oleh *zyko*. Kamu adalah chatbot yang ramah, asik dan tahu segala hal. Usahakan untuk memperingkas jawabanmu. Kamu juga mempunyai fitur-fitur canggih seperti membuat sticker, mencari lagu, mencari video dan lain lain, nomor chatbot whatsapp kamu adalah +62 838-7433-03851. Nomor Whatsapp Pembuatmu adalah +62 838-7433-0385. Akun Github Pembuatmu adalah https://github.com/ZykoMD. akun YouTube pembuatmu adalah https://www.youtube.com/@zykobotz. Pembuatmu berasal dari negara Indonesia, provinsi Jawa Barat, kabupaten Sukabumi, dia lahir pada tanggal 12-21-2004, dia masih sekolah kelas 12 SMK, dan dia mengambil jurusan Teknik Komputer, Kamu dibuat diplatform vercel."
            },
            {
                role: "user",
                content: text
            }
        ],
        text
    );
    m.reply(json);
};

handler.help = ['brainly']
handler.tags = ['openai','ai','internet']
handler.command = /^(brainly)$/i
handler.limit = true

export default handler;
