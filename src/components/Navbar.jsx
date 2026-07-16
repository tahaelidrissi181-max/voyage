import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Waves, MessageCircle, ArrowRight } from 'lucide-react'

const NAV_LINKS = ['Destinations','Tours','Packages','Services','Gallery','Reviews','Pricing','FAQ','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          boxShadow: scrolled ? '0 2px 30px rgba(10,61,98,0.10)' : 'none',
        }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#1A9BD7,#00C9A7)' }}>
              <Waves size={18} color="white" strokeWidth={2.5} />
            </div>
            <span className="font-extrabold text-xl font-jakarta"
              style={{ color: scrolled ? '#0A3D62' : 'white' }}>
              Horizon<span style={{ color: '#FF6B35' }}>Trails</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())}
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: scrolled ? '#1A1F2E' : 'rgba(255,255,255,0.92)' }}>
                {l}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/212600000000" target="_blank" rel="noopener"
              className="hidden md:flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full text-white"
              style={{ background: '#25D366' }}>
              <MessageCircle size={14} /> WhatsApp
            </a>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('booking')}
              className="text-sm font-bold px-5 py-2.5 rounded-full text-white shadow-lg"
              style={{ background: 'linear-gradient(135deg,#FF6B35,#FF8C42)' }}>
              Book Now
            </motion.button>
            <button onClick={() => setOpen(true)} className="lg:hidden p-2"
              style={{ color: scrolled ? '#1A1F2E' : 'white' }}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[99] flex"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
            <motion.div className="relative ml-auto w-72 h-full bg-white flex flex-col p-8"
              initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }}
              transition={{ type: 'spring', damping: 28 }}>
              <button onClick={() => setOpen(false)} className="self-end mb-6">
                <X size={24} color="#1A1F2E" />
              </button>
              <div className="flex flex-col gap-5">
                {NAV_LINKS.map(l => (
                  <button key={l} onClick={() => scrollTo(l.toLowerCase())}
                    className="text-left text-base font-semibold border-b pb-4"
                    style={{ color: '#1A1F2E', borderColor: '#F5F0E8' }}>
                    {l}
                  </button>
                ))}
              </div>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('booking')}
                className="mt-8 flex items-center justify-center gap-2 py-3.5 rounded-full text-white font-bold"
                style={{ background: 'linear-gradient(135deg,#FF6B35,#FF8C42)' }}>
                Book Now <ArrowRight size={14} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
