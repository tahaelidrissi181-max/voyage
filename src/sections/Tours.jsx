import { motion } from 'framer-motion'
import { Clock, Users, Globe, Star, Check, ArrowRight } from 'lucide-react'
import { IMGS } from '../images.js'
import { C, RevealBlock, SectionLabel, SectionTitle, GradientBtn } from '../components/UI.jsx'

const DIFF_COLOR = { Easy: C.sea, Moderate: C.gold, Challenging: C.coral }

export const TOURS = [
  {
    name: 'Sahara Desert 3-Day Expedition',
    img: IMGS.tour1, duration: '3 Days', difficulty: 'Moderate',
    group: '2–12', lang: 'EN/FR/AR', rating: 4.9, reviews: 312,
    price: 299, badge: 'Bestseller',
    includes: ['Camel ride', 'Desert camp', 'All meals', 'Pickup'],
  },
  {
    name: 'Marrakech Magic Full-Day',
    img: IMGS.tour2, duration: '1 Day', difficulty: 'Easy',
    group: '2–15', lang: 'EN/FR/ES', rating: 4.8, reviews: 528,
    price: 89, badge: 'Top Rated',
    includes: ['Medina walk', 'Souks', 'Lunch', 'Guide'],
  },
  {
    name: 'Atlas Mountains Hiking',
    img: IMGS.tour3, duration: '2 Days', difficulty: 'Challenging',
    group: '4–10', lang: 'EN/FR', rating: 4.9, reviews: 187,
    price: 175, badge: 'Adventure',
    includes: ['Mountain lodge', 'Breakfast', 'Porter', 'Trek'],
  },
  {
    name: 'Fes Medina Cultural Deep-Dive',
    img: IMGS.tour4, duration: '1 Day', difficulty: 'Easy',
    group: '2–12', lang: 'EN/FR/AR', rating: 4.7, reviews: 241,
    price: 75, badge: null,
    includes: ['Tanneries', 'Pottery', 'Lunch', 'Expert guide'],
  },
]

function TourCard({ t, i }) {
  return (
    <RevealBlock delay={i * 0.09}>
      <motion.div whileHover={{ y: -5 }}
        className="rounded-2xl overflow-hidden bg-white shadow-md group h-full flex flex-col"
        style={{ border: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <img src={t.img} alt={t.name} loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          {t.badge && (
            <span className="absolute top-3 left-3 text-xs font-extrabold px-3 py-1.5 rounded-full text-white"
              style={{ background: 'linear-gradient(135deg,#FF6B35,#FF8C42)' }}>
              {t.badge}
            </span>
          )}
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold text-white"
            style={{ background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(4px)' }}>
            <Star size={11} fill="white" /> {t.rating} ({t.reviews})
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {[{ icon:<Clock size={10}/>, val:t.duration },
              { icon:<Users size={10}/>, val:t.group },
              { icon:<Globe size={10}/>, val:t.lang }].map(m => (
              <span key={m.val} className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
                style={{ background: C.sand, color: C.muted }}>{m.icon}{m.val}</span>
            ))}
            <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
              style={{ background: DIFF_COLOR[t.difficulty] || C.sky }}>{t.difficulty}</span>
          </div>
          <h3 className="font-extrabold text-base mb-3 leading-snug font-jakarta" style={{ color: C.dark }}>{t.name}</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
            {t.includes.map(inc => (
              <span key={inc} className="flex items-center gap-1 text-xs" style={{ color: C.muted }}>
                <Check size={10} color={C.sea} strokeWidth={3} />{inc}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-3 mt-auto" style={{ borderTop: `1px solid ${C.sand}` }}>
            <div>
              <span className="text-xs" style={{ color: C.muted }}>From</span>
              <p className="font-black text-xl font-jakarta" style={{ color: C.ocean }}>
                ${t.price} <span className="text-sm font-normal text-gray-400">/person</span>
              </p>
            </div>
            <GradientBtn small onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior:'smooth' })}>
              Book <ArrowRight size={12} />
            </GradientBtn>
          </div>
        </div>
      </motion.div>
    </RevealBlock>
  )
}

export default function Tours() {
  return (
    <section id="tours" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <RevealBlock className="mb-14 text-center">
          <SectionLabel>Curated experiences</SectionLabel>
          <SectionTitle center>Popular Tours</SectionTitle>
          <p className="mt-3 max-w-lg mx-auto" style={{ color: C.muted }}>
            Hand-crafted journeys led by expert local guides — authentic, safe, and unforgettable.
          </p>
        </RevealBlock>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOURS.map((t, i) => <TourCard key={t.name} t={t} i={i} />)}
        </div>
      </div>
    </section>
  )
}
