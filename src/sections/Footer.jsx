import { motion } from 'framer-motion'
import { Waves, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react'
import { C } from '../components/UI.jsx'

const COLS = [
  {
    title: 'Quick Links',
    links: ['Home','Destinations','Tours','Packages','Gallery','Reviews','Blog','Contact'],
  },
  {
    title: 'Services',
    links: ['Private Tours','City Tours','Desert Tours','Mountain Treks','Airport Pickup','Photography Tours','VIP Experiences','Hotel Booking'],
  },
  {
    title: 'Destinations',
    links: ['Marrakech','Sahara Desert','Fes Medina','Chefchaouen','Atlas Mountains','Essaouira','Casablanca','Ait Benhaddou'],
  },
]

const SOCIALS = [
  { Icon: Instagram, href: '#' },
  { Icon: Facebook,  href: '#' },
  { Icon: Twitter,   href: '#' },
  { Icon: Youtube,   href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: C.dark }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#1A9BD7,#00C9A7)' }}>
                <Waves size={18} color="white" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-xl font-jakarta text-white">
                Horizon<span style={{ color: C.coral }}>Trails</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Award-winning Morocco tour operator. Locally owned, globally trusted.
              Let us show you the real Morocco — its people, flavours, and hidden wonders.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, href }, i) => (
                <motion.a key={i} href={href} whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)' }}>
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Newsletter mini */}
            <div className="mt-7">
              <p className="text-xs font-bold mb-2.5 text-white">Get travel inspiration</p>
              <div className="flex gap-1.5">
                <input type="email" placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-lg text-xs outline-none"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.12)', fontFamily: 'inherit' }} />
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg flex items-center justify-center"
                  style={{ background: C.coral }}>
                  <ArrowRight size={14} color="white" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.title}>
              <h4 className="font-bold text-xs text-white mb-5 uppercase tracking-[0.12em]">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.45)' }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2025 HorizonTrails Morocco. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map(l => (
              <a key={l} href="#" className="text-xs transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.3)' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
