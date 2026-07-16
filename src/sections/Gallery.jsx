import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X } from 'lucide-react'
import { IMGS } from '../images.js'
import { C, RevealBlock, SectionLabel, SectionTitle } from '../components/UI.jsx'

const GALLERY = [
  { src:IMGS.g1, alt:'Marrakech market street', cls:'col-span-1 row-span-2' },
  { src:IMGS.g2, alt:'Marrakech medina shops', cls:'' },
  { src:IMGS.g3, alt:'Camel caravan desert sunset', cls:'' },
  { src:IMGS.g4, alt:'Moroccan market textiles', cls:'' },
  { src:IMGS.g5, alt:'Camel caravan Sahara dunes', cls:'' },
  { src:IMGS.g6, alt:'Marrakech shopping street', cls:'col-span-2' },
]

export default function Gallery() {
  const [light, setLight] = useState(null)

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <RevealBlock className="mb-14 text-center">
          <SectionLabel>Travel moments</SectionLabel>
          <SectionTitle center>Gallery</SectionTitle>
          <p className="mt-3 max-w-lg mx-auto" style={{ color:C.muted }}>
            Real moments from real journeys — captured by our guides and guests.
          </p>
        </RevealBlock>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {GALLERY.map((g, i) => (
            <RevealBlock key={g.alt} delay={i * 0.06} className={g.cls}>
              <motion.div whileHover={{ scale:1.02 }} onClick={() => setLight(g.src)}
                className="rounded-2xl overflow-hidden cursor-pointer h-full relative group">
                <img src={g.src} alt={g.alt} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background:'rgba(10,61,98,0.45)' }}>
                  <Camera size={28} color="white"/>
                </div>
              </motion.div>
            </RevealBlock>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {light && (
          <motion.div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background:'rgba(0,0,0,0.92)' }}
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={() => setLight(null)}>
            <motion.img src={light} alt="Gallery preview"
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }}
              exit={{ scale:0.8, opacity:0 }} onClick={e => e.stopPropagation()}/>
            <button onClick={() => setLight(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
              <X size={20}/>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
