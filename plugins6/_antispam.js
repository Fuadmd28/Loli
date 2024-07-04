export async function before(m) {
    let user = db.data.users[m.sender]
    let chat = db.data.chats[m.chat]
    if ((m.chat.endsWith('broadcast') || m.fromMe) && !m.message && !chat.isBanned) return
    if (!m.text.startsWith('.') && !m.text.startsWith('#') && !m.text.startsWith('!') && !m.text.startsWith('/') && !m.text.startsWith('\/')) return
    if (user.banned) return
    this.spam = this.spam ? this.spam: {}
    if (m.sender in this.spam) {
            this.spam[m.sender].count++
            if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam >= 4) {
                if (this.spam[m.sender].count >= 3) {
                    user.banned = true
                    conn.sendFile(m.chat, "./vn/banned.mp3", "toxic.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
                    
                }
                this.spam[m.sender].count = 0
                this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            }
    } else
        this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}