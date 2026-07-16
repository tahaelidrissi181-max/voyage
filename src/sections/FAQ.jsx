import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { C, RevealBlock, SectionLabel, SectionTitle } from '../components/UI.jsx'

const FAQS = [
  { q:"What's the best time to visit Morocco?", a:"March–May and September–November offer ideal temperatures. Summer is very hot in the Sahara but perfect on the Atlantic coast. Winter is great for cities but cold in the mountains." },
  { q:"Do I need a visa for Morocco?", a:"Citizens of the EU, US, UK, Canada, and Australia do not need a visa for stays up to 90 days. We recommend checking your government's travel advice before booking." },
  { q:"Are your tours suitable for families with children?", a:"Absolutely! We offer family-friendly versions of most tours with shorter walking distances, family accommodation, and activities tailored for all ages." },
  { q:"How do I get to Morocco?", a:"Marrakech Menara and Casablanca Mohammed V airports connect to most European and Middle Eastern hubs. We offer airport transfer packages from all major airports." },
  { q:"What currency is used in Morocco?", a:"The Moroccan Dirham (MAD). ATMs are widely available in cities. We recommend bringing some cash for souks and rural areas. Most hotels and larger restaurants accept cards." },
  { q:"Is Morocco safe for solo female travellers?", a:"Yes, with the right guidance. We have many solo female travellers every year and take their safety very seriously. Our guides are vetted, trained, and trusted." },
  { q:"What should I pack for a Morocco tour?", a:"Lightweight breathable clothing, a layer for cool evenings, comfortable walking shoes, sunscreen, and a headscarf for mosque visits. We'll send you a full packing list after booking." },
  { q:"Can I customise my tour itinerary?", a:"Absolutely — that's what we specialise in. Tell us your interests, pace preference, and budget and we'll build a personalised itinerary just for you." },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <RevealBlock className="mb-14 text-center">
          <SectionLabel>Got questions?</SectionLabel>
          <SectionTitle center>Frequently Asked Questions</SectionTitle>
          <p className="mt-3" style={{ color:C.muted }}>
            Everything you need to know before your Morocco adventure.
          </p>
        </RevealBlock>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <RevealBlock key={f.q} delay={i * 0.04}>
              <motion.div layout className="rounded-2xl overflow-hidden"
                style={{ border:`1.5px solid ${open===i ? C.sky : 'rgba(0,0,0,0.07)'}` }}>
                <button onClick={() => setOpen(open===i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  style={{ background: open===i ? `${C.sky}08` : 'white' }}>
                  <span className="font-semibold text-sm pr-4 leading-snug" style={{ color:C.dark }}>{f.q}</span>
                  <motion.span
                    animate={{ rotate: open===i ? 45 : 0 }}
                    transition={{ duration:0.25 }}
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light leading-none"
                    style={{ background: open===i ? C.sky : C.sand, color: open===i ? 'white' : C.muted }}>
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open===i && (
                    <motion.div initial={{ height:0 }} animate={{ height:'auto' }} exit={{ height:0 }}
                      style={{ overflow:'hidden' }}>
                      <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color:C.muted }}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}
