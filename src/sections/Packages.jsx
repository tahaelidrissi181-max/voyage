import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { IMGS } from '../images.js'
import { C, RevealBlock, SectionLabel, SectionTitle, GradientBtn } from '../components/UI.jsx'

export const PACKAGES = [
  {
    name:'Imperial Cities Explorer', days:7, price:1290, popular:false,
    img: IMGS.pkg1,
    includes:['4-star hotels','All breakfasts','Private driver','Expert guide','Airport transfers','Entrance fees'],
    excludes:['Flights','Lunches & dinners','Personal expenses'],
    itinerary:['Day 1: Arrive Casablanca','Day 2–3: Fes Medina','Day 4: Meknes','Day 5–6: Marrakech','Day 7: Depart'],
  },
  {
    name:'Sahara & Mountains Grand Tour', days:10, price:1890, popular:true,
    img: IMGS.pkg2,
    includes:['5-star hotels + desert camp','All meals','Private vehicle','Camel trek','Hiking guide','All activities'],
    excludes:['Flights','Alcoholic beverages','Travel insurance'],
    itinerary:['Day 1: Marrakech','Day 2–3: Atlas Trek','Day 4: Draa Valley','Day 5–7: Sahara','Day 8–9: Dades','Day 10: Return'],
  },
  {
    name:'Coastal Luxury Escape', days:5, price:950, popular:false,
    img: IMGS.pkg3,
    includes:['Boutique riads','Daily breakfast','City tours','Essaouira day trip','Private guide'],
    excludes:['Flights','Most meals','Spa treatments'],
    itinerary:['Day 1–2: Marrakech','Day 3: Essaouira','Day 4: Agadir coast','Day 5: Depart'],
  },
]

function PackageCard({ pkg, i }) {
  const [tab, setTab] = useState('includes')
  const content = tab==='includes' ? pkg.includes : tab==='excludes' ? pkg.excludes : pkg.itinerary

  return (
    <RevealBlock delay={i * 0.1}>
      <div className="rounded-2xl overflow-hidden bg-white shadow-lg h-full flex flex-col relative"
        style={{ border: pkg.popular ? `2px solid ${C.sky}` : '1px solid rgba(0,0,0,0.07)' }}>
        {pkg.popular && (
          <div className="absolute top-4 right-4 z-10 text-xs font-extrabold px-3 py-1.5 rounded-full text-white"
            style={{ background: `linear-gradient(135deg,${C.sky},${C.sea})` }}>
            Most Popular
          </div>
        )}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img src={pkg.img} alt={pkg.name} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(10,61,98,0.72) 0%,transparent 55%)' }} />
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-black text-lg font-jakarta">{pkg.name}</p>
            <p className="text-white/72 text-xs">{pkg.days} Days · Private Tour</p>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex gap-1 mb-4 p-1 rounded-xl" style={{ background: C.sand }}>
            {['includes','excludes','itinerary'].map(t => (
              <button key={t} onClick={() => setTab(t)}
                className="flex-1 text-xs font-bold py-1.5 rounded-lg capitalize transition-all"
                style={{ background: tab===t ? C.ocean : 'transparent', color: tab===t ? 'white' : C.muted }}>
                {t}
              </button>
            ))}
          </div>
          <ul className="space-y-1.5 mb-5 flex-1 min-h-[110px]">
            {content.map(item => (
              <li key={item} className="flex items-start gap-2 text-xs" style={{ color: C.muted }}>
                <Check size={10} strokeWidth={3} color={tab==='excludes' ? C.coral : C.sea} className="mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${C.sand}` }}>
            <div>
              <span className="text-xs" style={{ color: C.muted }}>From</span>
              <p className="font-black text-2xl font-jakarta" style={{ color: C.ocean }}>${pkg.price}</p>
              <span className="text-xs" style={{ color: C.muted }}>per person</span>
            </div>
            <GradientBtn small onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior:'smooth' })}>
              Book <ArrowRight size={12} />
            </GradientBtn>
          </div>
        </div>
      </div>
    </RevealBlock>
  )
}

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <RevealBlock className="mb-14 text-center">
          <SectionLabel>All-inclusive</SectionLabel>
          <SectionTitle center>Travel Packages</SectionTitle>
          <p className="mt-3 max-w-lg mx-auto" style={{ color: C.muted }}>
            Everything handled, nothing left to chance. Our packages include accommodation,
            transport, guided tours, and more.
          </p>
        </RevealBlock>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {PACKAGES.map((p, i) => <PackageCard key={p.name} pkg={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
