import fetch from 'node-fetch'

import axios from 'axios';

let handler = async (m, { conn, args, text, usedPrefix, command, quoted }) => {
  if (!text) throw `┌  • *S T Y L E - C H O I C E
│  ◦ *imaginev1*
│  ◦ *imaginev2*
│  ◦ *realistic*
│  ◦ *creative*
│  ◦ *anime*
│  ◦ *potrait*
└──···
*example:* .stablediff ⧼style⧽ a woman taking a picture of herself in a mirror, ulzzang, lalisa manobal, cute top, polka dot, wearing a cute top, petite, dots, lalisa manoban of blackpink, polkadots, mirror selfie, cute outfit, black dots, bralette, suki, outfit photo, wearing a camisole, slender waist
`

  let [style, ...message] = text.split(' ');
  message = message.join(' ');
  let pushname = m.pushName || "No Name";
  let setStyle;

  switch(style) {
      case 'imaginev1':
      setStyle = 'imagine%20v1';
      break;
       case 'imaginev2':
      setStyle = 'imagine%20v2';
      break;
      case 'realistic':
      setStyle = 'realistic';
      break;
       case 'creative':
      setStyle = 'creative';
      break;
       case 'anime':
      setStyle = 'anime';
      break;
       case 'potrait':
      setStyle = 'potrait';
      break;
      default:
      throw 'Style yang dipilih tidak tersedia.';
  }
let res = await (await fetch(`https://api.itsrose.life/image/stable/diffusion?prompt=${text}&negative_prompt=nsfw%2C%203d%2C%20nuked&style=${setStyle}&ratio=1%3A1&cfg=7.5&hiresFix=true&apikey=${global.rose}`)).buffer()
  conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
await conn.sendFile(m.chat, res, 'hd.jpg', "Here your image.", m)
};

handler.help = ['stablediff']
handler.tags = ['ai']
handler.command = /^(stablediff|stabledif|stablediffusion)$/i

handler.register = true
handler.premium = false
handler.limit = true

export default handler