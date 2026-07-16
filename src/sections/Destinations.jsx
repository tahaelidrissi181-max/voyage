import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { IMGS } from '../images.js'
import { C, RevealBlock, SectionLabel, SectionTitle } from '../components/UI.jsx'

const DESTINATIONS = [
  { name: 'Marrakech',     tag: 'Imperial City',    img: IMGS.marrakech,   tours: 18 },
  { name: 'Sahara Desert', tag: 'Golden Dunes',     img: IMGS.sahara,      tours: 12 },
  { name: 'Fes Medina',    tag: 'Living Heritage',  img: IMGS.fes,         tours: 9  },
  { name: 'Chefchaouen',   tag: 'Blue City',        img: IMGS.chefchaouen, tours: 7  },
  { name: 'Atlas Mtns',    tag: 'Alpine Adventure', img: IMGS.atlas,       tours: 11 },
  { name: 'Essaouira',     tag: 'Atlantic Coast',   img: IMGS.essaouira,   tours: 8  },
]

export default function Destinations() {
  return (
    <section id="destinations" className="py-24" style={{ background: C.offwhite }}>
      <div className="max-w-7xl mx-auto px-6">
        <RevealBlock className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <SectionLabel>Where to go</SectionLabel>
            <SectionTitle>Featured Destinations</SectionTitle>
            <p className="mt-3 max-w-md text-base" style={{ color: C.muted }}>
              From ancient medinas to endless desert horizons — every corner of Morocco tells a story.
            </p>
          </div>
          <a href="#contact" className="text-sm font-bold flex items-center gap-1.5 shrink-0 hover:opacity-70 transition-opacity"
            style={{ color: C.sky }}>
            All destinations <ArrowRight size={14} />
          </a>
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((d, i) => (
            <RevealBlock key={d.name} delay={i * 0.07}>
              <motion.div whileHover={{ y: -6 }}
                className="rounded-2xl overflow-hidden bg-white shadow-md cursor-pointer group"
                style={{ border: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="relative h-56 overflow-hidden">
                  <img src={d.img} alt={`${d.name} Morocco`} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top,rgba(10,61,98,0.68) 0%,transparent 55%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-black text-xl font-jakarta">{d.name}</p>
                    <p className="text-white/75 text-xs font-medium mt-0.5">{d.tag}</p>
                  </div>
                  <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1.5 rounded-full text-white"
                    style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)' }}>
                    {d.tours} Tours
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} color={C.sky} />
                    <span className="text-sm font-medium" style={{ color: C.muted }}>Morocco</span>
                  </div>
                  <motion.span whileHover={{ x: 4 }}
                    className="text-sm font-bold flex items-center gap-1"
                    style={{ color: C.coral }}>
                    Explore <ArrowRight size={13} />
                  </motion.span>
                </div>
              </motion.div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}
