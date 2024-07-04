const handler = async (m, { conn, usedPrefix, args }) => { 
   let groups = Object.values(await conn.groupFetchAllParticipating()); 
  
   if (args.length === 0) { 
     // Menampilkan daftar nama grup dengan urutan 
     const list = groups.map((group, index) => `*${index + 1}.* ${group.subject}`).join('\n'); 
     conn.reply(m.chat, `*Daftar Nama Grup dengan Urutan:*\n\n${list}`, m); 
   } else if (args.length === 1 && /^\d+$/.test(args[0])) { 
     const index = parseInt(args[0]) - 1; 
     if (index >= 0 && index < groups.length) { 
       const group = groups[index]; 
       const superAdminCount = group.participants.filter(p => p.admin === 'superadmin').length; 
       const adminCount = group.participants.filter(p => p.admin === 'admin').length; 
       const adminList = group.participants.filter(p => p.admin === 'admin').map(a => `- ${a.id.replace(/(\d+)@.+/, '@$1')}`).join('\n'); 
       const superAdminList = group.participants.filter(p => p.admin === 'superadmin').map(a => `- ${a.id.replace(/(\d+)@.+/, '@$1')}`).join('\n'); 
       const info = `*Informasi Grup Urutan Ke ${index + 1}*\n\n` + 
         `*ID:* ${group.id}\n` + 
         `\n*Subject:* ${group.subject}\n` + 
         `\n*Pemilik Subject:* ${group.subjectOwner}\n` + 
         `\n*Waktu Subjek Diubah:* ${formatTime(group.subjectTime)}\n` + 
         `\n*Waktu Dibuat:* ${formatTime(group.creation)}\n` + 
         `\n*Pemilik Grup:* ${group.owner.replace(/(\d+)@.+/, '@$1')}\n` + 
         `\n*Deskripsi:* ${group.desc}\n` + 
         `\n*ID Deskripsi:* ${group.descId}\n` + 
         `\n*Batasan:* ${group.restrict ? 'Ya' : 'Tidak'}\n` + 
         `\n*Pengumuman:* ${group.announce ? 'Ya' : 'Tidak'}\n` + 
         `\n*Total Member:* ${group.participants.length}\n` + 
         `\n*Jumlah Superadmin:* ${superAdminCount}\n` + 
         `\n*Daftar Superadmin:*\n${superAdminList}\n` + 
         `\n*Jumlah Admin:* ${adminCount}\n` + 
         `\n*Daftar Admin:*\n${adminList}\n` + 
         `\n*Durasi Pesan Sementara:* ${formatDuration(group.ephemeralDuration)}`; 
       await m.reply( 
         info, 
         null, 
         { 
             contextInfo: { 
                 mentionedJid: group.participants.map((v) => v.id) 
             } 
         } 
     ); 
     } else { 
       conn.reply(m.chat, 'Grup Dengan Urutan Tersebut Tidak Ditemukan.', m); 
     } 
   } else { 
     conn.reply(m.chat, `Format Perintah Salah. Gunakan "${usedPrefix}listgc" Untuk Daftar Grup Atau "${usedPrefix}listgc [nomor_urutan]" Untuk Informasi Grup Tertentu.`, m); 
   } 
 }; 
  
 handler.menu = ['groups', 'grouplist']; 
 handler.tags = ['owner']; 
 handler.command = /^(gro?ups?list)|(listgro?ups?)|(listgc)$/i; 
  handler.owner = true
 export default handler; 
  
 function formatTime(timestamp) { 
   const date = new Date(timestamp * 1000); 
   return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`; 
 } 
  
 function formatDuration(seconds) { 
   const hours = Math.floor(seconds / 3600); 
   const minutes = Math.floor((seconds % 3600) / 60); 
   const formatted = []; 
   if (hours > 0) formatted.push(`${hours} jam`); 
   if (minutes > 0) formatted.push(`${minutes} menit`); 
   return formatted.join(' '); 
 }