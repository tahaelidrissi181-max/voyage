import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { RevealBlock, C } from '../components/UI.jsx'

function Counter({ target, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const isDecimal = target % 1 !== 0
    const step = target / 120
    const t = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(t) }
      else setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start))
    }, 16)
    return () => clearInterval(t)
  }, [inView, target])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const STATS = [
  { n: 4800, suf: '+', label: 'Happy Travellers' },
  { n: 350,  suf: '+', label: 'Tours Completed' },
  { n: 12,   suf: '',  label: 'Years Experience' },
  { n: 48,   suf: '',  label: 'Destinations' },
  { n: 4.9,  suf: '★', label: 'Average Rating' },
]

export default function Stats() {
  return (
    <section style={{ background: C.ocean }} className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {STATS.map((s, i) => (
          <RevealBlock key={s.label} delay={i * 0.08}>
            <div className="text-4xl font-black text-white mb-1 font-jakarta">
              <Counter target={s.n} suffix={s.suf} />
            </div>
            <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</p>
          </RevealBlock>
        ))}
      </div>
    </section>
  )
}
