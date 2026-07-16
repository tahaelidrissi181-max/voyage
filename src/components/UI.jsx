import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export const C = {
  ocean: '#0A3D62', sky: '#1A9BD7', sea: '#00C9A7',
  sand: '#F5F0E8', coral: '#FF6B35', gold: '#F4B942',
  offwhite: '#F8F6F1', muted: '#6B7280', dark: '#1A1F2E',
}

export function RevealBlock({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16,1,0.3,1] }}>
      {children}
    </motion.div>
  )
}

export function SectionLabel({ children }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase mb-3"
      style={{ color: C.sky }}>
      {children}
    </span>
  )
}

export function SectionTitle({ children, light, center }) {
  return (
    <h2 className={`font-extrabold leading-tight font-jakarta ${center ? 'text-center' : ''}`}
      style={{ fontSize: 'clamp(1.85rem,3.8vw,2.85rem)', color: light ? 'white' : C.dark }}>
      {children}
    </h2>
  )
}

export function GradientBtn({ children, onClick, outline, small }) {
  return (
    <motion.button onClick={onClick}
      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center gap-2 font-bold rounded-full transition-shadow ${
        small ? 'px-5 py-2.5 text-xs' : 'px-7 py-3.5 text-sm'
      } ${outline
        ? 'border-2 bg-transparent text-white border-white hover:bg-white/10'
        : 'text-white shadow-lg hover:shadow-xl'
      }`}
      style={!outline ? { background: 'linear-gradient(135deg,#FF6B35 0%,#FF8C42 100%)' } : {}}>
      {children}
    </motion.button>
  )
}
