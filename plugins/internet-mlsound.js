import axios from "axios";
import fetch from "node-fetch";
import cheerio from "cheerio";
import { JSDOM } from "jsdom";

const handler = async (m, { conn, args, usedPrefix, text, command }) => {
    if (!text) throw `• *Example:* .${command} Fanny`;
    try {
        conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }});
        let res = await MLSound("id", text);
        let rdm = res[Math.floor(Math.random() * res.length)];
        conn.sendFile(m.chat, rdm, 'error', '', m);
    } catch (e) {
        throw e;
    }
};

handler.help = ["mlsound"].map(v => v + ' <nama>');
handler.tags = ["internet"];
handler.command = /^mlsound$/i;

export default handler;

/* New Line */
async function MLSound(tema, query) {
    let res;
    if (tema == "id") {
        res = await fetch("https://mobile-legends.fandom.com/wiki/" + query + "/Audio/id");
    }
    if (tema == "en") {
        res = await fetch("https://mobilelegendsbuild.com/sound/" + query);
    }
    let html = await res.text();
    let dom = new JSDOM(html);
    var totals = dom.window.document.getElementsByTagName("audio");
    let audio = [];
    for (var i = 0; i < totals.length; i++) {
        audio.push(totals[i].getAttribute("src"));
    }
    return audio;
}
