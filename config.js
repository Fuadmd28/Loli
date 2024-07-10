import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6288980860521', 'Mass Fuad', true],
]
global.mods = []
global.nomorown = '6282147781510'
global.prems = []
// Info
global.nomorwa = '6282147781510'
global.packname = 'Made With'
global.author = '© LOFI - IMUTT'
global.namebot = 'LOFI - IMUTT'
global.wm = '© LOFI IMUTT'
global.stickpack = 'Made With'
global.stickauth = '© LOFI IMUTT'
global.fotonya = 'https://telegra.ph/file/7a72c74871ac2fb87b8df.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/danil_'
global.sgh = 'https://github.com/Zeltoria'
global.sgc = 'https://chat.whatsapp.com/Fi5CZvazVIcLCrxiqDV'
// Payment
global.dana = '08989513496'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = './vn/eror.mp3'
global.multiplier = 69 
// Apikey
global.zahwan = 'zenzkey_1ec92f71d3bb'
global.skizo = 'alya'
global.lolkey = 'lofi'
global.caliph = 'Lwlct6wi'
global.xzn = 'alya'
global.skizo = 'alya'
global.neoxr = 'UbShlx'
global.btc = 'fDJb474t'
global.rose = 'J1wsPVIQ1IGeYrllDJNl530sfaMTWX35EeP7mWr68gcUVCnVf9YBTnOkWyJI4K3x'
global.lann = 'yz7kyjji'
global.zeltoria = 'Elistz'
global.ibeng = 'aQj6EqeUej'
global.xyro = 'ClaraOfficial'
global.xcode = 'Frieren'
global.APIs = {
  lol: 'https://api.lolhuman.xyz',
  violetics : 'https://violetics.pw',
  rose: 'https://api.itsrose.site',
  neoxr: 'https://api.neoxr.eu',
  fgmods: 'https://api-fgmods.ddns.net',
  btc: 'https://api.botcahx.eu.org/',
  lann: 'https://api.betabotz.eu.org',
  skizo: 'https://skizo.tech/',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
}

global.APIKeys = { 
  'https://api.xyroinee.xyz': 'm4Z5cyszoi',
  'https://api.neoxr.eu': 'UbShlx',
  'https://api.botcahx.eu.org/': 'fDJb474t',
  'https://api.lolhuman.xyz': 'lofi',
  'https://violetics.pw': 'beta',
  'https://skizo.tech/': 'alya',
  'https://api.itsrose.site': 'Rs-Danil_Elistz',
  'https://api-fgmods.ddns.net': 'YanFLmUt',
  'https://api-xcoders.site': 'Frieren',
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
