import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { C, RevealBlock, SectionLabel, SectionTitle } from '../components/UI.jsx'

const PLANS = [
  { name:'Half-Day',    price:49,  desc:'3–4 hours',  features:['City tour','Local guide','Shared group','1 attraction'],                           popular:false },
  { name:'Full-Day',   price:89,  desc:'8–9 hours',  features:['Full city tour','Lunch included','Small group','3+ attractions','Transfers'],       popular:false },
  { name:'Private',    price:149, desc:'Full day',   features:['100% private','Custom stops','Expert guide','Lunch','Hotel pickup'],                  popular:true  },
  { name:'Multi-Day',  price:299, desc:'3 days',     features:['2 nights hotel','All meals','Sahara/Atlas','Private driver','24/7 support'],         popular:false },
  { name:'VIP',        price:599, desc:'Full week',  features:['5-star hotels','Chef meals','Concierge','Unlimited access','Airport VIP lounge'],     popular:false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24" style={{ background:C.offwhite }}>
      <div className="max-w-7xl mx-auto px-6">
        <RevealBlock className="mb-14 text-center">
          <SectionLabel>Transparent pricing</SectionLabel>
          <SectionTitle center>Simple, Fair Prices</SectionTitle>
          <p className="mt-3 max-w-lg mx-auto" style={{ color:C.muted }}>
            No surprises, no hidden fees. What you see is what you get — and we guarantee it.
          </p>
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PLANS.map((p, i) => (
            <RevealBlock key={p.name} delay={i * 0.07}>
              <motion.div whileHover={{ y:-5 }}
                className="rounded-2xl p-6 flex flex-col h-full"
                style={{
                  background: p.popular ? `linear-gradient(145deg,${C.ocean},${C.sky})` : 'white',
                  border: p.popular ? 'none' : '1px solid rgba(0,0,0,0.06)',
                  boxShadow: p.popular ? `0 20px 60px ${C.ocean}40` : '0 2px 10px rgba(0,0,0,0.05)',
                }}>
                {p.popular && (
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full self-start mb-4 text-white"
                    style={{ background:C.coral }}>Most Popular</span>
                )}
                <p className="font-extrabold text-base mb-0.5 font-jakarta"
                  style={{ color: p.popular ? 'white' : C.dark }}>{p.name}</p>
                <p className="text-xs mb-4" style={{ color: p.popular ? 'rgba(255,255,255,0.65)' : C.muted }}>{p.desc}</p>
                <div className="text-3xl font-black mb-5 font-jakarta"
                  style={{ color: p.popular ? 'white' : C.ocean }}>${p.price}</div>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs"
                      style={{ color: p.popular ? 'rgba(255,255,255,0.82)' : C.muted }}>
                      <Check size={10} strokeWidth={3} color={p.popular ? C.gold : C.sea}/>{f}
                    </li>
                  ))}
                </ul>
                <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior:'smooth' })}
                  className="w-full py-3 rounded-xl text-sm font-bold transition-all"
                  style={{
                    background: p.popular ? 'white' : `linear-gradient(135deg,${C.coral},#FF8C42)`,
                    color: p.popular ? C.ocean : 'white',
                  }}>
                  Book Now
                </motion.button>
              </motion.div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}
