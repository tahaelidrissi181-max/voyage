import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { C, RevealBlock, SectionLabel, SectionTitle } from '../components/UI.jsx'

const REVIEWS = [
  { name:'Sarah K.', country:'🇬🇧 United Kingdom', avatar:'https://i.pravatar.cc/64?img=5', stars:5, tour:'Sahara Desert Expedition', text:"I've travelled to 42 countries and this was hands-down the most magical experience of my life. Waking up in the Sahara with zero light pollution and a sky full of stars — pure perfection." },
  { name:'Thomas B.', country:'🇩🇪 Germany', avatar:'https://i.pravatar.cc/64?img=8', stars:5, tour:'Imperial Cities Explorer', text:'Our guide Ahmed was exceptional. His knowledge of Moroccan history, architecture, and cuisine was encyclopedic. Every day we discovered something that took our breath away.' },
  { name:'Yuki M.', country:'🇯🇵 Japan', avatar:'https://i.pravatar.cc/64?img=11', stars:5, tour:'Atlas Mountains Hike', text:'The Atlas Mountains trek was challenging but so rewarding. The Berber villages, the hospitality, the food — we felt like guests in someone\'s home rather than tourists.' },
  { name:'Maria G.', country:'🇧🇷 Brazil', avatar:'https://i.pravatar.cc/64?img=20', stars:5, tour:'Marrakech Full Day', text:'Booked last minute and couldn\'t believe how seamlessly everything was organised. Professional, punctual, friendly — and the souks were incredible. Already planning my return trip!' },
]

export default function Reviews() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setIdx(i => (i + 1) % REVIEWS.length)

  return (
    <section id="reviews" className="py-24" style={{ background: C.ocean }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <RevealBlock>
          <SectionLabel>What travellers say</SectionLabel>
          <SectionTitle light center>Trusted by Thousands</SectionTitle>
        </RevealBlock>

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div key={idx}
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-20 }} transition={{ duration:0.4 }}
              className="rounded-3xl p-8 md:p-12 mx-auto max-w-2xl"
              style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)', backdropFilter:'blur(8px)' }}>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(REVIEWS[idx].stars)].map((_,s) => <Star key={s} size={18} fill={C.gold} color={C.gold}/>)}
              </div>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{REVIEWS[idx].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img src={REVIEWS[idx].avatar} alt={REVIEWS[idx].name}
                  className="w-14 h-14 rounded-full border-2 object-cover"
                  style={{ borderColor: C.gold }} />
                <div className="text-left">
                  <p className="font-bold text-white">{REVIEWS[idx].name}</p>
                  <p className="text-sm" style={{ color:'rgba(255,255,255,0.6)' }}>{REVIEWS[idx].country}</p>
                  <p className="text-xs mt-0.5" style={{ color:C.gold }}>{REVIEWS[idx].tour}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.95 }} onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', color:'white' }}>
              <ChevronLeft size={18}/>
            </motion.button>
            {REVIEWS.map((_,i) => (
              <button key={i} onClick={() => setIdx(i)}
                className="rounded-full transition-all duration-300"
                style={{ width: i===idx ? 24 : 8, height:8, background: i===idx ? C.gold : 'rgba(255,255,255,0.3)' }}/>
            ))}
            <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.95 }} onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', color:'white' }}>
              <ChevronRight size={18}/>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
