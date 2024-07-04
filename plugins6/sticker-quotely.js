import axios from 'axios';
import { sticker } from '../lib/sticker.js';
import uploadImage from '../lib/uploadImage.js';
import { webp2png } from '../lib/webp2mp4.js';

let handler = async (m, { conn, text, usedPrefix , command }) => {
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
const { mtype } = m;
  
if (!text) return m.reply('Ummmhh.. Textnya??');
if (text.length > 30) return m.reply('Maksimal 30 Teks!');

let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg');

if (m.quoted) {
if (q.mtype == 'extendedTextMessage') {
    
let objj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
        "entities": [],
        "avatar": true,
        "from": {
          "id": 1,
          "name": m.name,
          "photo": { "url": pp }
        },
        "text": text,
        "replyMessage": {
          "name": await conn.getName(m.quoted.sender),
          "text": m.quoted.text || '',
          "chatId": m.chat.split('@')[0],
        }
    }]
};

const bufferr = await Quotly(objj);

let stikerr = await sticker(bufferr, false, global.packname, global.author);
if (stikerr) return conn.sendFile(m.chat, stikerr, 'quotly.webp', '', m);

// Batas
} else if (q.mtype == 'stickerMessage' || q.mtype == 'imageMessage') {
let img = await q.download();

let up;
if (/webp/g.test(mime)) {
  up = await webp2png(img);
} else if (/image/g.test(mime)) {
  up = await uploadImage(img);
} else ''

let obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
        "entities": [],
        "media": { "url": up },
        "avatar": true,
        "from": {
          "id": 1,
          "name": m.name,
          "photo": { "url": pp }
        },
        "text": text,
        "replyMessage": {}
    }]
};

const buffer = await Quotly(obj);

let stiker = await sticker(buffer, false, global.packname, global.author);
if (stiker) return conn.sendFile(m.chat, stiker, 'quotly.webp', '', m);
}
 
// Batas lagi
} else {

let obj2 = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
        "entities": [],
        "avatar": true,
        "from": {
          "id": 1,
          "name": m.name,
          "photo": { "url": pp }
        },
        "text": text || text,
        "replyMessage": {}
    }]
};

const buffer = await Quotly(obj2);

let Sstiker = await sticker(buffer, false, global.packname, global.author);
if (Sstiker) return conn.sendFile(m.chat, Sstiker, 'quotly.webp', '', m);
}

}; 
handler.help = ['qc'];
handler.tags = ['sticker'];
handler.command = /^(qc|quotely|quoted|quotly)$/i;
handler.limit = true;

export default handler;

async function Quotly(obj) {
let json;
  try {
json = await axios.post("https://quote.btch.bz/generate", obj, { headers: { "Content-Type": "application/json" }});
    
} catch {
try {
json = await axios.post('https://mxmxk-quote-api.hf.space/generate', obj, { headers: { 'Content-Type': 'application/json' }});
    
} catch (e) {
return e;
}
}

const results = json.data.result.image;
const buffer = Buffer.from(results, "base64");
return buffer;
}