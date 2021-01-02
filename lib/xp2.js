exports.xp2 = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
        
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         
╔════════════════════
║ *♦TOOLS2 BOT♦ ${XPTN}*
╠════════════════════
╠════════════════════
║╭──❉ *⚔️MEDIA⚔️* ❉──
║│1.  *.ytmp3* <linkyoutube>
║│2.  *.ytmp4* <linkyoutube>
║│3.  *.tiktok* <linktiktok>
║│4.  *.ig* <linkIg>
║│5.  *.fb* <linkFb>
║│6.  *.twt* <linkTweet>
║│7.  *.ytmp5* <linkyoutube>
║│8.  *.yt* <linkyoutube>
║╭──❉ *OTHERS* ❉──
║│1.  *.sholat* <daerah>
║│2.  *.covid*
║│3.  *.infogempa*
║│4.  *.coronainfoall*
║│5.  *.wiki* <query>Wikipedia.
║│6.  *.nulis* <teks>
║│7.  *.quran*
║│8.  *.pantun*
║│9.  *.katabijak*
║│10. *.indohot*
║│11. *.fakta*
║│12. *.quotes1*
║│13. *.cersex1*
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
