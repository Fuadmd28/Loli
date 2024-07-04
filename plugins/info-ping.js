import os from 'os'

let handler = async (m, { conn, text }) => {
  let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'GB'
  let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'GB'
  let cpuModel = os.cpus()[0].model
  let cpuSpeed = os.cpus()[0].speed / 1000
  let cpuCount = os.cpus().length

  let message = `
*Your Bot Specifications*:

• *Total Storage*: ${totalStorage}
• *Free Storage*: ${freeStorage}
• *CPU Model*: ${cpuModel}
• *CPU Speed*: ${cpuSpeed} GHz
• *Number of CPU Cores*: ${cpuCount}
`

  m.reply(message)
}

handler.help = ['ping']
handler.tags = ['tools']
handler.command = /^(ping|ram|p)$/i
export default handler
