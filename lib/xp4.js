exports.xp4 = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
        
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         
╔════════════════════
║ *♦TOOLS4 BOT♦ ${XPTN}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1.  *.cersex2*
║│2.  *.nama* { nama anda }
║│3.  *.pasangan* { Ham & Fan }
║│4.  *.lirik* { nama lagu }
║│5.  *.chord* { nama lagu }
║│6.  *.cerpen*
║│7.  *.puisi1*
║│8.  *.puisi2*
║│9.  *.resep*
║│10. *.bitly*
║│11. *.textimage*
║│12. *.wetzodiak*
║│13. *.namajenis*
║╰───────────
╠════════════════════
║  *${XPTN}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│4. *Creator ${XPTN}*
║│ _${nomer}_
║╰───────────
╠════════════════════`
}
