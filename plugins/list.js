const handler = async ( m ) => {
m.reply(`*•••—–PRICE LIST–—•••* 

   _Ketik List Untuk Daftar Harga :_ 
╔➥ Instagram
╠➥ Tiktok
╠➥ Youtube
╠➥ Twitter
╠➥ Facebook
╠➥ Shopee
╚➥ Threads`)
}
handler.customPrefix = /^(list)$/i;
handler.command = new RegExp();
export default handler