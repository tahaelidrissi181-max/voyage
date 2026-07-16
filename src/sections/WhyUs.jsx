import { motion } from 'framer-motion'
import { Shield, Users, Heart, Award, Globe, Check, ArrowRight } from 'lucide-react'
import { C, RevealBlock, SectionLabel, SectionTitle, GradientBtn } from '../components/UI.jsx'

const WHY = [
  { icon:<Shield size={20}/>,  title:'Fully Licensed',       body:'100% certified & insured. Registered with the Moroccan Ministry of Tourism.' },
  { icon:<Users size={20}/>,   title:'Local Experts',        body:'Born and raised in Morocco — every guide has 5+ years and speaks 3+ languages.' },
  { icon:<Heart size={20}/>,   title:'Small Groups',         body:'We cap groups at 12 to ensure personal attention and authentic experiences.' },
  { icon:<Award size={20}/>,   title:'Award-Winning',        body:"TripAdvisor Travellers' Choice 2023 & 2024. 4.9 average across 4,000+ reviews." },
  { icon:<Globe size={20}/>,   title:'Custom Itineraries',   body:'Every journey is tailored. You choose the pace, the style, and the highlights.' },
  { icon:<Check size={20}/>,   title:'Best Price Guarantee', body:'Find it cheaper and we match it. Transparent pricing, zero hidden fees.' },
]

export default function WhyUs() {
  return (
    <section id="services" className="py-24" style={{ background: C.offwhite }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealBlock>
            <SectionLabel>Why travel with us</SectionLabel>
            <SectionTitle>Morocco Deserves More<br/>Than a Generic Tour</SectionTitle>
            <p className="mt-4 mb-8 text-base leading-relaxed" style={{ color: C.muted }}>
              We're not a checkout button — we're your friends in Morocco.
              Horizon Trails was founded by local guides who wanted travellers to experience
              the real Morocco: its people, flavours, and hidden wonders.
            </p>
            <GradientBtn onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior:'smooth' })}>
              Start Planning <ArrowRight size={14} />
            </GradientBtn>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY.map((w, i) => (
              <RevealBlock key={w.title} delay={i * 0.07}>
                <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-white shadow-sm"
                  style={{ border: '1px solid rgba(0,0,0,0.05)', borderTop: `3px solid ${i % 2 === 0 ? C.sky : C.sea}` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: i%2===0 ? `${C.sky}18` : `${C.sea}18`, color: i%2===0 ? C.sky : C.sea }}>
                    {w.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1.5 font-jakarta" style={{ color: C.dark }}>{w.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{w.body}</p>
                </motion.div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
