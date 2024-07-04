import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let cap = `*Special Thanks To:*

- *WaSocket*
_https://github.com/WhiskeySockets/Baileys_

- *Amirul*
_https://github.com/amiruldev20_

- *Ryzen*
_https://github.com/ShirokamiRyzen_

- *Prinz*
_https://github.com/PrinzXz_

- *NajmyW*
_https://github.com/NajmyW_

- *Dims*
_https://github.com/Im-Dims_

_Script Bot Clara - MD Made With Zeltoria_`

await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/5478e28cc3ace94df0d43.jpg' }, caption: cap }, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto|thanksto|credits)$/i

export default handler