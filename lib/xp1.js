exports.xp1 = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
        
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         
╔════════════════════
║ *MENU1 BOT ${XPTN}*
╠════════════════════
║╭──❉ *STICKER MAKER & SIMI* ❉──
║│1. _*.sticker*_
║│2. _*simi { teks }*_
║╰───────────
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *Creator ${XPTN}*
║│ _${nomer}_
║╰───────────
╠════════════════════`
}
