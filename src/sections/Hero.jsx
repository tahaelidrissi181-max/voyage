import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, Users, Search, Shield, Award, Heart, ChevronDown, Star, Minus, Plus } from 'lucide-react'
import { IMGS } from '../images.js'
import { C, GradientBtn } from '../components/UI.jsx'

const WORDS = ['Discover', 'Explore', 'Experience']

// ── Orbiting dot around a ring ───────────────────────────────────────────────
function OrbitDot({ radius, size, color, duration, delay, clockwise = true }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width:      size,
        height:     size,
        background: color,
        boxShadow:  `0 0 ${size * 2}px ${color}`,
        top:        '50%',
        left:       '50%',
        marginTop:  -size / 2,
        marginLeft: -size / 2,
      }}
      animate={{
        x: [radius, 0, -radius, 0, radius],
        y: [0, clockwise ? radius : -radius, 0, clockwise ? -radius : radius, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    />
  )
}

// ── Single enhanced decorative ring ─────────────────────────────────────────
function DecorRing({ size, right, offsetY, rotateDuration, borderOpacity, dotColor, dotSize, dotDelay, clockwise, pulseRing }) {
  return (
    <div
      className="absolute rounded-full"
      style={{ width: size, height: size, right, top: '50%', marginTop: -size / 2 + offsetY, position: 'absolute' }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ border: `1px solid rgba(255,255,255,${borderOpacity})` }}
        animate={{ rotate: clockwise ? 360 : -360 }}
        transition={{ duration: rotateDuration, repeat: Infinity, ease: 'linear' }}
      />
      {pulseRing && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px solid rgba(212,175,55,0.35)' }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.35, 0.12, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <OrbitDot radius={size / 2} size={dotSize} color={dotColor} duration={rotateDuration} delay={dotDelay} clockwise={clockwise} />
    </div>
  )
}

// ── Floating particle ────────────────────────────────────────────────────────
function Particle({ x, y, size, color, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, right: x, top: y, background: color, boxShadow: `0 0 ${size * 3}px ${color}` }}
      animate={{ y: [0, -18, 0, 10, 0], opacity: [0.6, 1, 0.5, 0.9, 0.6], scale: [1, 1.3, 0.9, 1.2, 1] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function Hero() {
  const [wi, setWi] = useState(0)
  const [guests, setGuests] = useState(2)

  useEffect(() => {
    const t = setInterval(() => setWi(i => (i + 1) % WORDS.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img src={IMGS.hero} alt="Golden Sahara dunes at sunset — Morocco" loading="eager"
          className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg,rgba(10,61,98,0.84) 0%,rgba(10,61,98,0.58) 48%,rgba(0,0,0,0.28) 100%)' }} />
      </div>

      {/* ── Enhanced decorative rings — hidden on mobile ── */}
      <div className="block">
        <DecorRing size={200} right={-50}  offsetY={0} rotateDuration={18} borderOpacity={0.18} dotColor="rgba(212,175,55,0.9)"   dotSize={7} dotDelay={0}   clockwise={true}  pulseRing={true} />
        <DecorRing size={400} right={-110} offsetY={0} rotateDuration={30} borderOpacity={0.10} dotColor="rgba(255,255,255,0.75)" dotSize={5} dotDelay={0.4} clockwise={false} />
        <DecorRing size={600} right={-170} offsetY={0} rotateDuration={44} borderOpacity={0.06} dotColor="rgba(120,190,255,0.85)" dotSize={4} dotDelay={0.8} clockwise={true} />
        <DecorRing size={820} right={-240} offsetY={0} rotateDuration={60} borderOpacity={0.04} dotColor="rgba(212,175,55,0.55)"  dotSize={4} dotDelay={1.2} clockwise={false} />

        <Particle x={60}  y="22%" size={5} color="rgba(212,175,55,0.8)"  duration={4.5} delay={0}   />
        <Particle x={180} y="35%" size={3} color="rgba(255,255,255,0.6)" duration={5.5} delay={0.7} />
        <Particle x={90}  y="65%" size={4} color="rgba(120,190,255,0.7)" duration={6}   delay={1.2} />
        <Particle x={280} y="55%" size={3} color="rgba(212,175,55,0.6)"  duration={5}   delay={0.4} />
        <Particle x={140} y="75%" size={5} color="rgba(255,255,255,0.5)" duration={7}   delay={1.8} />
        <Particle x={320} y="28%" size={3} color="rgba(120,190,255,0.5)" duration={4.8} delay={2.1} />
        <Particle x={50}  y="48%" size={4} color="rgba(212,175,55,0.7)"  duration={6.2} delay={0.9} />

        <div className="absolute pointer-events-none"
          style={{ right: -120, top: '50%', marginTop: -250, width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(10,61,98,0.04) 55%, transparent 75%)',
            filter: 'blur(30px)' }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">

        {/* text-center on mobile, left-aligned on md+ */}
        <div className="max-w-3xl mx-auto md:mx-0">

          {/* Badge */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(255,255,255,0.12)', color: C.gold, backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              ✦ Award-Winning Morocco Tours
            </span>
          </motion.div>

          {/* Animated headline */}
          <motion.h1
            className="font-black text-white leading-none font-jakarta mb-4 text-center md:text-left"
            style={{ fontSize: 'clamp(3rem,7vw,5.5rem)' }}
            initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16,1,0.3,1] }}
          >
            <AnimatePresence mode="wait">
              <motion.span key={wi} className="block" style={{ color: C.gold }}
                initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }} transition={{ duration: 0.45 }}>
                {WORDS[wi]}
              </motion.span>
            </AnimatePresence>
            <span className="block">Morocco</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl text-center md:text-left mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            From the golden Sahara to ancient medinas and turquoise coasts —
            tailored luxury tours crafted by locals who call Morocco home.
          </motion.p>

          {/* Search bar — stacks vertically on mobile */}
          <motion.div
            className="rounded-2xl p-1.5 flex flex-row flex-wrap gap-1.5 max-w-2xl mx-auto md:mx-0"
            style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 flex-1 min-w-[120px]">
              <MapPin size={14} color={C.sky} />
              <select className="bg-transparent text-sm font-medium outline-none w-full" style={{ color: C.dark }}>
                <option>Destination</option>
                <option>Marrakech</option><option>Sahara Desert</option>
                <option>Fes Medina</option><option>Chefchaouen</option><option>Atlas Mountains</option>
              </select>
            </div>
            <div className="hidden sm:block w-px self-stretch bg-gray-200" />
            <div className="flex items-center gap-2 px-4 py-2.5 flex-1 min-w-[120px]">
              <Calendar size={14} color={C.sky} />
              <input type="date" className="bg-transparent text-sm font-medium outline-none w-full" style={{ color: C.dark }} />
            </div>
            <div className="hidden sm:block w-px self-stretch bg-gray-200" />
            <div className="flex items-center gap-2 px-4 py-2.5 justify-center">
              <Users size={14} color={C.sky} />
              <button onClick={() => setGuests(g => Math.max(1,g-1))} className="p-0.5"><Minus size={12} color={C.muted} /></button>
              <span className="w-5 text-center text-sm font-bold" style={{ color: C.dark }}>{guests}</span>
              <button onClick={() => setGuests(g => g+1)} className="p-0.5"><Plus size={12} color={C.muted} /></button>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg,#FF6B35,#FF8C42)' }}
            >
              <Search size={14} /> Search
            </motion.button>
          </motion.div>

          {/* Trust badges — centered on mobile */}
          <motion.div
            className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          >
            {[
              { icon: <Shield size={14}/>, text: '100% Safe & Trusted' },
              { icon: <Award size={14}/>,  text: 'Top-Rated Agency' },
              { icon: <Heart size={14}/>,  text: '4,800+ Happy Travellers' },
            ].map(b => (
              <div key={b.text} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span style={{ color: C.gold }}>{b.icon}</span>{b.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating review card — desktop only */}
        <motion.div
          className="absolute right-6 bottom-0 hidden lg:block rounded-2xl p-5 shadow-2xl"
          style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', minWidth: 240 }}
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <div className="flex items-center gap-1 mb-3">
            {[1,2,3,4,5].map(s => <Star key={s} size={13} fill={C.gold} color={C.gold} />)}
            <span className="text-xs font-bold ml-1" style={{ color: C.muted }}>5.0</span>
          </div>
          <p className="text-sm font-semibold mb-1" style={{ color: C.dark }}>"Absolutely magical experience"</p>
          <p className="text-xs" style={{ color: C.muted }}>— Sarah K., UK · Sahara Tour</p>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex -space-x-2">
              {['1','2','3'].map((n,i) => (
                <img key={i} src={`https://i.pravatar.cc/32?img=${n}`} alt="traveller"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <span className="text-xs font-semibold" style={{ color: C.muted }}>+4.8k travellers</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0,8,0] }} transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} color="rgba(255,255,255,0.45)" />
      </motion.div>

    </section>
  )
}