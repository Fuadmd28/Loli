let handler = async (m, { conn, text }) => {

  let [t1, t2] = text.split `|`

    let name = conn.getName(m.sender)

 conn.fakeReply(m.chat,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' , '0@s.whatsapp.net', t1+ 'Hai' ,'17608914335-1615035634@g.us')

}

 

handler.help = ['fakespam']

handler.tags = ['group']

handler.command = /^fakespam$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = true

handler.private = false

handler.admin = true

handler.botAdmin = false

handler.fail = null

handler.exp = 3

export default handler

