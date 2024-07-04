const fetch = require('node-fetch')
const cheerio = require('cheerio')
const axios = require('axios')

let handler = async(m, { conn, text }) => {
  if (!text) throw `Cari Apa?`
 
  let res = await xnxxSearch(text)
  res = res.result.map((v) => `*Title:* ${v.title}\n*Info:* ${v.info}\n*Link*: ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  let loadd = [
 '▒▒▒▒▒▒▒▒▒▒▒▒▒ 0%',
 '██▒▒▒▒▒▒▒▒▒▒▒ 10%',
 '████▒▒▒▒▒▒▒▒▒ 30%',
 '███████▒▒▒▒▒▒ 50%',
 '██████████▒▒▒ 70%',
 '█████████████ 100%',
 `${res}`
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Bentar_'})

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
  } 
handler.help = ['xnxxsearch']
handler.tags = ['internet']
handler.command = /^(xnxxsearch)$/i
handler.premiun = true

module.exports = handler


async function xnxxSearch(t) {
  return new Promise((n, e) => {
    const r = "https://www.xnxx.com";
    fetch(`${r}/search/${t}/${Math.floor(3 * Math.random()) + 1}`, {
      method: "get",
    })
      .then((t) => t.text())
      .then((t) => {
        let e = cheerio.load(t, { xmlMode: !1 }),
          o = [],
          a = [],
          i = [],
          s = [];
        e("div.mozaique").each(function (t, n) {
          e(n)
            .find("div.thumb")
            .each(function (t, n) {
              a.push(
                r + e(n).find("a").attr("href").replace("/THUMBNUM/", "/")
              );
            });
        }),
          e("div.mozaique").each(function (t, n) {
            e(n)
              .find("div.thumb-under")
              .each(function (t, n) {
                i.push(e(n).find("p.metadata").text()),
                  e(n)
                    .find("a")
                    .each(function (t, n) {
                      o.push(e(n).attr("title"));
                    });
              });
          });
        for (let t = 0; t < o.length; t++)
          s.push({ title: o[t], info: i[t], link: a[t] });
        n({ status: !0, result: s });
      })
      .catch((t) => e({ status: !1, result: t }));
  });
}