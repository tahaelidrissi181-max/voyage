import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { C, RevealBlock, SectionLabel, SectionTitle } from '../components/UI.jsx'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section className="py-20" style={{ background: C.sand }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <RevealBlock>
          <SectionLabel>Stay inspired</SectionLabel>
          <SectionTitle center>Travel Ideas, Delivered Weekly</SectionTitle>
          <p className="mt-3 mb-8" style={{ color:C.muted }}>
            Get destination guides, exclusive deals, and hidden gems straight to your inbox.
          </p>
          {done ? (
            <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold"
              style={{ background:`${C.sea}20`, color:C.sea }}>
              ✓ You're on the list! Check your inbox.
            </motion.div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setDone(true) }}
              className="flex gap-2 max-w-md mx-auto">
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-full text-sm border-0 outline-none shadow-sm"
                style={{ color:C.dark, fontFamily:'inherit' }}/>
              <motion.button whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }}
                type="submit"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white shadow-lg"
                style={{ background:'linear-gradient(135deg,#FF6B35,#FF8C42)', whiteSpace:'nowrap' }}>
                <Send size={13}/> Subscribe
              </motion.button>
            </form>
          )}
          <p className="mt-4 text-xs" style={{ color:C.muted }}>
            No spam, ever. Unsubscribe anytime.
          </p>
        </RevealBlock>
      </div>
    </section>
  )
}
