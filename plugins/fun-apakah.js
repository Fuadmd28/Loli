let handler = async (m, { command, text }) => {
  setTimeout(() => {
    m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'].getRandom()}
    `.trim(), null, m.mentionedJid ? {
      mentions: m.mentionedJid
    } : {});
  }, 5000); // Add a delay of 5000 milliseconds (2 seconds)
}

handler.help = ['apakah']
handler.tags = ['fun']
handler.command = /^apakah$/i
handler.onlyprem = true

export default handler