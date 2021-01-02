exports.xp5 = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
        
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         
╔════════════════════
║ *♦TOOLS5 BOT♦ ${XPTN}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *.ping*
║│2. *.ssweb* { link web }
║│3. *.profileig* { link }
║│4. *.jadwaltvnow* { jadwaltv }
║│5. *.meme*
║│6. *.randomhentai*
║│7. *.cooltext*
║│8. *.map*
║│9. *.pesankosong*
║│10. *.hostsearch*
║│11. *.ttp*  { teks }
║│12. *.nekopoi*
║│13. *.cuaca* { wilayah }
║╰───────────
╠════════════════════
║  *${XPTN}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *Creator ${XPTN}*
║│ _${nomer}_
║╰───────────
╠════════════════════`
}
