import cheerio from 'cheerio';
import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw '✳️ Masukkan nama paket';
  let img = 'https://i.ibb.co/HxNbmxd/npm2.png';
  try {
    let pkg = await npmSearch(text);
    let caption = `
▢ *Nama Paket:* ${pkg.name}
▢ *Versi:* ${pkg.version}
▢ *Pemilik:* ${pkg.owner}
▢ *Diterbitkan:* ${pkg.publishedDate}
▢ *Deskripsi:* ${pkg.description}
▢ *Halaman:* ${pkg.homepage} 
▢ *Link:* ${pkg.packageLink} 
`;
    await conn.sendFile(m.chat, img, 'npm.png', caption, m);
    await conn.sendFile(m.chat, pkg.downloadLink, `${pkg.packageName}-${pkg.version}.tgz`, '', m, null, { mimetype: 'application/zip', asDocument: true });
    // m.react(done); // Jangan menggunakan m.react jika tidak diperlukan
  } catch (err) {
    m.reply(`✳️ Kesalahan: periksa bahwa nama paket ada di https://www.npmjs.com`);
  }
};

handler.help = ['npm'];
handler.tags = ['tools','internet'];
handler.command = ['npm', 'npmdl', 'npmsearch'];

export default handler;

async function npmSearch(query) {
  try {
    const response = await axios.get(`https://registry.npmjs.org/${query}`);
    const { name, description } = response.data;
    const version = response.data['dist-tags'].latest;
    const packageLink = `https://www.npmjs.com/package/${name}`;
    const lastSlashIndex = name.lastIndexOf('/');
    const packageName = lastSlashIndex !== -1 ? name.substring(lastSlashIndex + 1) : name;
    const downloadLink = `https://registry.npmjs.org/${name}/-/${packageName}-${version}.tgz`;

    const npmPackageResponse = await axios.get(packageLink);
    const $ = cheerio.load(npmPackageResponse.data);
    const publishedDate = $('time').first().text();
    const owner = response.data.maintainers[0].name;
    const keywords = response.data.keywords;
    const homepage = response.data.homepage;
    const license = response.data.license;
    const dependencies = response.data.dependencies;
    const readme = $('div[class="markdown"]').html();

    return {
      name,
      description,
      version,
      packageLink,
      packageName,
      downloadLink,
      publishedDate,
      owner,
      keywords,
      homepage,
      license,
      dependencies,
      readme
    };
  } catch (err) {
    throw 'Kesalahan saat mencari informasi tentang paket';
  }
}
