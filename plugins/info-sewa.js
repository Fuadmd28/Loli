const handler = async ( m ) => {
m.reply(`_Sewa Bot WhatsApp_

- *Rp 5,000* _13 Hari_
- *Rp 10,000* _1 Bulan_
- *Rp 30,000* _Permanen_

*_Katalog_*
https://wa.me/p/7131058013620947/6282147781510

*_Pembayaran_*

- _Dana_
- _Ovo_
- _Shopeepa_
- _Gopay_
- _Qris All paymen_
- _Mobile Banking_


*_Testimoni_*
https://wa.me/p/6331501620289183/6282147781510

*_Jika Minat Hub_*
wa.me/6282147781510`)
}
handler.customPrefix = /^(.sewa|Sewa)$/i;
handler.help = ['.sewa']
handler.tags = ['menulist']
handler.command = new RegExp();
export default handler