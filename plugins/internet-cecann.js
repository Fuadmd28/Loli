let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendFile(m.chat, pickRandom(cecan), null, `*Pake Elit Sewa Sulit 🥴*`, m)
}
handler.help = ['cecan']
handler.tags = ['internet']
handler.onlyprem = true
handler.limit = 3
handler.command = /^(cecan)$/i

handler.premium = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const cecan = [

 "https://i.pinimg.com/736x/c3/6f/d2/c36fd27e0442eb42f6fe8484f8f78ac1.jpg",
        "https://i.pinimg.com/originals/0d/e1/85/0de185bac62985c458c11b8d792df94e.png",
        "https://i.pinimg.com/originals/be/80/40/be8040c058cab42b3cc8801e12def999.png",
        "https://i.pinimg.com/originals/85/ee/bb/85eebb987dd9d293db9fb6e3e42e68dc.png",
        "https://i.pinimg.com/originals/40/36/ae/4036aeed400524e658f1c011394b4558.png",
        "https://i.pinimg.com/736x/f2/eb/00/f2eb00ba1c70e6498137fbc67629e70b.jpg",
        "https://i.pinimg.com/736x/9d/8b/bd/9d8bbdc12a300017b9a03ec4da129b02.jpg",
        "https://i.pinimg.com/originals/05/cf/04/05cf0495529b85f23361307286d97735.png",
        "https://i.pinimg.com/564x/95/2b/9e/952b9ee005ac8a674838999dfedd83c0.jpg",
        "https://i.pinimg.com/474x/76/b1/17/76b117b30e45c8c7ccebbfc4d161ea3c.jpg",
        "https://i.pinimg.com/736x/6f/af/cd/6fafcd547b5ac5419fc5ca35d1015fdb.jpg",
        "https://i.pinimg.com/736x/77/0f/f3/770ff383463fe7c685dc6e98bbfdaa40.jpg",
        "https://i.pinimg.com/originals/c3/7b/c4/c37bc41e2c66f2edcbbdcb603445dac5.jpg",
        "https://i.pinimg.com/736x/cd/63/37/cd633789385b61d68a0dfdeb3b8e23c6.jpg",
        "https://i.pinimg.com/736x/0e/68/72/0e6872b32ddacf0ff1adf90a2cf445c4.jpg",
        "https://i.pinimg.com/736x/a2/9c/dc/a29cdcecc1be0866284375042c40b6e8.jpg",
        "https://i.pinimg.com/originals/ee/1a/c8/ee1ac8cfb8accf173d1531d1806b6a00.jpg",
        "https://i.pinimg.com/750x/08/c0/e5/08c0e5bd2ec54224c122ffd2333133f2.jpg",
        "https://i.pinimg.com/originals/bc/34/27/bc34272a3ba6461141057ca84ec6eca8.jpg",
        "https://i.pinimg.com/474x/34/aa/83/34aa83a3ea443cef48614ec6964bf3cb.jpg",
        "https://i.pinimg.com/736x/ad/5e/38/ad5e38a5a5560b8301a0b959904ea502.jpg",
        "https://i.pinimg.com/736x/93/b1/cf/93b1cf7d11d51a766211fceaff7a42c1.jpg",
        "https://i.pinimg.com/474x/3f/b5/b2/3fb5b2adad60cdce4ca3ca11a1d40af6.jpg",
        "https://i.pinimg.com/736x/e3/e4/61/e3e4618d1e174261918149c41e2b621b.jpg",
        "https://i.pinimg.com/originals/fd/be/98/fdbe989807f325b3fa1386aaf0a68391.jpg",
        "https://i.pinimg.com/474x/fa/e7/68/fae7683b381e3fbb54ddc8858986a3b1.jpg",
        "https://i.pinimg.com/474x/0a/d2/51/0ad2518f3ac8c744a5b7de75cdead84d.jpg",
        "https://i.pinimg.com/736x/e9/96/b2/e996b21b2eb8f318e8deba797d9c764c.jpg",
        "https://i.pinimg.com/originals/94/16/8b/94168b6f3bf04b1157e61d5ad0196064.jpg",
        "https://i.pinimg.com/736x/6c/9b/e5/6c9be52d57acb79e9f4e54a59923ef5d.jpg",
        "https://i.pinimg.com/564x/49/71/8a/49718a8398aee7ee23844f80349ab5a5.jpg",
        "https://i.pinimg.com/originals/2d/da/0d/2dda0da873958dd3e7bd6a9e41d90d9a.jpg",
        "https://i.pinimg.com/564x/7d/28/50/7d2850655706d9fd60f3731dfedb4a79.jpg",
        "https://i.pinimg.com/564x/45/47/45/45474578a490c673bd6cfa51ce6fe7ea.jpg",
        "https://i.pinimg.com/736x/d9/5e/81/d95e81e339a2026378102e41ba1119ec.jpg",
        "https://i.pinimg.com/originals/83/00/98/8300982fe53e57f4c9185af9f1ae8980.png",
        "https://i.pinimg.com/originals/73/8f/f3/738ff3110cbb4f1a9e6b2a8e134a471e.jpg",
        "https://i.pinimg.com/originals/84/65/58/8465584f5991d2c56df4135f48a727a1.jpg",
        "https://i.pinimg.com/474x/d5/f2/cd/d5f2cdda14a98c55c7214fefa5d89a49.jpg",
        "https://i.ytimg.com/vi/AAdugnMgXlA/maxresdefault.jpg",
        "https://i.pinimg.com/originals/c4/2b/38/c42b38ebaa52e3f4c45aaa53e8e75264.jpg",
        "https://i.pinimg.com/originals/6c/82/9a/6c829a4978d696d2aa1f0683594efcb9.png",
        "https://i.pinimg.com/736x/2a/cc/af/2accaf997aaa1a7eb727ea67624e8918.jpg",
        "https://i.pinimg.com/originals/18/83/02/188302915e4dbc1bf18c091457b9ff59.jpg",
        "https://i.pinimg.com/736x/1e/be/69/1ebe69ed94d37458c89a9a67cd332acf--gadis-cantik-indonesian-girls.jpg",
        "https://i.pinimg.com/originals/58/78/f3/5878f36e79d7f66b1c2b3305cf6140b1.jpg",
        "https://i.pinimg.com/564x/3e/45/7c/3e457c5a5e95657fae7cecb1ed98b379.jpg",
        "https://i.pinimg.com/474x/b9/50/67/b95067deb441256c4c97b2e18a1449e7.jpg",
        "https://i.pinimg.com/564x/fa/0a/95/fa0a95485d71eee0805fde38bc720829.jpg",
        "https://i.pinimg.com/474x/3e/fc/5d/3efc5d3040b368b33266d51cf137b3a2.jpg",
        "https://i.pinimg.com/originals/45/80/a8/4580a830420aff66662fe8f5e7a8dd15.jpg",
        "https://i.pinimg.com/736x/46/61/49/466149b8a900ecdbf0a52efe60dc96ef.jpg",
        "https://i.pinimg.com/originals/d7/09/4f/d7094f318cde7b8a1130bf8484dd4dd7.jpg",
        "https://i.pinimg.com/originals/e8/ec/47/e8ec47244c074ad7b9772c176ce5a5cf.jpg",
        "https://i.pinimg.com/736x/d4/c9/ac/d4c9acd511ce1c15d60c2f3fa011b20f.jpg",
        "https://i.pinimg.com/originals/77/21/e4/7721e464b5cd6eaa42d2db68cc2fa895.png",
        "https://i.pinimg.com/564x/22/70/9c/22709c8b37f2c732882208deda58f49e.jpg",
        "https://i.pinimg.com/736x/93/75/90/937590f9e0004c49c0d158e692047af1.jpg",
        "https://i.pinimg.com/originals/44/ce/8f/44ce8fc5193a8d66c38eadeb0a2de429.jpg",
        "https://i.pinimg.com/564x/ef/d2/db/efd2db83d6c529365329fdfeffb82b37.jpg",
        "https://i.pinimg.com/originals/a3/4b/fe/a34bfe4a186453bbd89750a527babd26.jpg",
        "https://i.pinimg.com/originals/ae/55/0a/ae550a87843ff6f12432a3a28f9d7836.jpg",
        "https://i.pinimg.com/originals/57/f2/68/57f268f0581a0c0183589c86506a59ba.png",
        "https://i.pinimg.com/originals/ef/a1/95/efa1954da5294ebeccb3cd20dfb63441.jpg",
        "https://i.pinimg.com/originals/6c/98/f0/6c98f0d863fb494c3a389282c45a1f3b.jpg",
        "https://i.pinimg.com/736x/c7/a1/bd/c7a1bd096e87595358a9b28a35809a15.jpg",
        "https://i.pinimg.com/originals/e9/43/8d/e9438da3ed1a8e437d34e72af50588e6.jpg",
        "https://i.pinimg.com/originals/d4/71/c4/d471c45bc78a4e9b1eb32f4f8eae827c.jpg",
        "https://i.pinimg.com/736x/d9/db/da/d9dbda0114d9318c2622d778b4bd116e.jpg",
        "https://i.pinimg.com/736x/b4/87/78/b4877831a84ea198d278e9cb307fd930.jpg",
        "https://i.pinimg.com/736x/41/ac/93/41ac931031982326a99afd45a9be8fb9.jpg",
        "https://i.pinimg.com/originals/5b/75/2e/5b752e180735cb31c7451a9c291a03bf.jpg",
        "https://i.pinimg.com/originals/7e/b8/34/7eb8347ac2eefcc037dd5dcfa4dc2eaa.jpg",
        "https://i.pinimg.com/originals/db/0d/a5/db0da5d5fb6b44d7ceed7f874d85f59b.jpg",
        "https://i.pinimg.com/736x/99/74/bb/9974bb2c933334c84775286345e69d29.jpg",
        "https://i.pinimg.com/originals/89/ec/69/89ec696e0874c3d732207e2f96885290.png",
        "https://i.pinimg.com/originals/18/9f/70/189f706f30455415b46fcf8fdc074b53.png",
        "https://i.pinimg.com/originals/3a/d7/17/3ad7174b677c14af6783ecaa9e5f40c3.jpg",
        "https://i.pinimg.com/originals/18/e8/4e/18e84e502f995c2c2403f9d8ab382d30.jpg",
        "https://i.pinimg.com/originals/56/69/1d/56691d1422425e2ec6da1436bf048e84.jpg",
        "https://i.pinimg.com/736x/a9/71/82/a971823d44d4c90337ea69f767d8c5b5.jpg",
        "https://i.pinimg.com/736x/cf/c2/bb/cfc2bb1470a5897d4ae7251b45481763.jpg",
        "https://i.pinimg.com/originals/bc/8a/7e/bc8a7e65e713f377ede9306a433d4a2a.jpg",
        "https://i.pinimg.com/originals/ac/0b/45/ac0b45f85fbe6196c7b14e6a3815d7ca.png",
        "https://i.pinimg.com/736x/5e/ea/3e/5eea3e81f0f44a6228289662dddf5228.jpg",
        "https://i.pinimg.com/originals/6d/11/1f/6d111fdf20615c056e55d2c092803fc7.jpg",
        "https://i.pinimg.com/originals/85/0b/de/850bde34281808e0d105c400aec7106f.jpg",
        "https://i.pinimg.com/originals/bf/17/93/bf1793ae731adc03238fccb8d8b50c49.jpg",
        "https://i.pinimg.com/736x/58/4b/bb/584bbb81a621af091fb5583b2c6a966a.jpg",
        "https://i.pinimg.com/736x/93/e4/ed/93e4ed8e9aad0fce1609347bd275c9be.jpg",
        "https://i.pinimg.com/736x/3e/af/3b/3eaf3bfbfe54e8120a99149a0051a628.jpg",
        "https://i.pinimg.com/originals/d5/81/5e/d5815eeaca4a7873ad7618d22fc038ee.png",
        "https://i.pinimg.com/736x/36/41/a6/3641a685e435802c9fac848673836ecb.jpg",
        "https://i.pinimg.com/564x/ee/9f/ed/ee9fed0aab7e740e2476583c0b26cfc0.jpg",
        "https://i.pinimg.com/originals/a3/ce/81/a3ce81ad736577db7f9c0978e696f564.jpg",
        "https://i.pinimg.com/originals/8a/7f/24/8a7f24defb4860431a83a06809922758.jpg",
        "https://i.pinimg.com/736x/7d/e8/dd/7de8dd77b75e1f622cd4636f88201758.jpg",
        "https://i.pinimg.com/originals/7a/4d/35/7a4d35d08caf8b8b97a20f5fa90afb9d.jpg",
        "https://i.pinimg.com/564x/69/53/a0/6953a024453317fff16e9739b8286ae5.jpg",
        "https://i.pinimg.com/originals/75/30/45/753045134054e883183b2babf2ca90dc.jpg"
]