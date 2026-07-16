import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Check, Send, Minus, Plus } from 'lucide-react'
import { TOURS } from './Tours.jsx'
import { PACKAGES } from './Packages.jsx'
import { C, RevealBlock, SectionLabel, SectionTitle, GradientBtn } from '../components/UI.jsx'

const CONTACT_INFO = [
  { icon:<Phone size={16}/>,  label:'Call or WhatsApp', val:'+212 600 000 000' },
  { icon:<Mail size={16}/>,   label:'Email us',         val:'hello@horizontrails.ma' },
  { icon:<MapPin size={16}/>, label:'Visit our office', val:'34 Rue Mouassine, Marrakech 40000' },
  { icon:<Clock size={16}/>,  label:'Business hours',   val:'Daily 8:00 AM – 8:00 PM' },
]

export default function Booking() {
  const [form, setForm] = useState({
    name:'', email:'', phone:'', whatsapp:'',
    tour:'', date:'', adults:2, children:0,
    hotel:'', pickup:'', notes:''
  })
  const [sent, setSent] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]:v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `🌍 *New Booking Request — HorizonTrails*\n\n` +
      `👤 Name: ${form.name}\n📧 Email: ${form.email}\n📞 Phone: ${form.phone}\n` +
      `🗺 Tour: ${form.tour}\n📅 Date: ${form.date}\n` +
      `👥 Adults: ${form.adults}, Children: ${form.children}\n` +
      `🏨 Hotel: ${form.hotel || 'Not specified'}\n` +
      `📍 Pickup: ${form.pickup || 'Not specified'}\n` +
      `📝 Notes: ${form.notes || 'None'}`
    )
    window.open(`https://wa.me/212600000000?text=${msg}`, '_blank')
    setSent(true)
  }

  const inputStyle = {
    width:'100%', padding:'12px 14px', borderRadius:12,
    border:`1.5px solid #E5E7EB`, fontSize:'0.88rem',
    color: C.dark, outline:'none', transition:'border-color 0.2s',
    fontFamily:'inherit', background:'white',
  }
  const focusStyle = (e) => e.target.style.borderColor = C.sky
  const blurStyle  = (e) => e.target.style.borderColor = '#E5E7EB'

  return (
    <section id="booking" className="py-24" style={{ background:C.offwhite }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <RevealBlock>
            <SectionLabel>Reserve your spot</SectionLabel>
            <SectionTitle>Book Your<br/>Dream Tour</SectionTitle>
            <p className="mt-4 mb-10 text-base leading-relaxed" style={{ color:C.muted }}>
              Complete the form and we'll confirm your booking within 2 hours —
              or message us directly on WhatsApp for an instant response.
            </p>
            <div className="space-y-5">
              {CONTACT_INFO.map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background:`${C.sky}15`, color:C.sky }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color:C.muted }}>{item.label}</p>
                    <p className="text-sm font-bold" style={{ color:C.dark }}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10 p-6 rounded-2xl" style={{ background:`${C.sea}12`, border:`1px solid ${C.sea}30` }}>
              <p className="font-bold text-sm mb-1" style={{ color:C.dark }}>Prefer to chat first?</p>
              <p className="text-xs mb-4" style={{ color:C.muted }}>Message us on WhatsApp — we reply in minutes.</p>
              <motion.a href="https://wa.me/212600000000" target="_blank" rel="noopener"
                whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white"
                style={{ background:'#25D366' }}>
                💬 Open WhatsApp
              </motion.a>
            </div>
          </RevealBlock>

          {/* Right — form */}
          <RevealBlock delay={0.1}>
            {sent ? (
              <motion.div initial={{ scale:0.85, opacity:0 }} animate={{ scale:1, opacity:1 }}
                className="rounded-3xl p-12 text-center bg-white shadow-lg">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background:`${C.sea}20` }}>
                  <Check size={36} color={C.sea} strokeWidth={3}/>
                </div>
                <h3 className="font-extrabold text-xl mb-2 font-jakarta" style={{ color:C.dark }}>Booking Sent!</h3>
                <p style={{ color:C.muted }}>WhatsApp opened with your booking details. We'll confirm within 2 hours.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm font-bold" style={{ color:C.sky }}>
                  Book another tour →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl p-8 bg-white shadow-lg space-y-4">
                <h3 className="font-extrabold text-lg font-jakarta mb-2" style={{ color:C.dark }}>Your Details</h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Full Name *</label>
                    <input required value={form.name} onChange={e => set('name',e.target.value)}
                      placeholder="Your name" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}/>
                  </div>
                  <div>
                    <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => set('email',e.target.value)}
                      placeholder="you@email.com" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}/>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Phone *</label>
                    <input required value={form.phone} onChange={e => set('phone',e.target.value)}
                      placeholder="+1 234 567 8900" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}/>
                  </div>
                  <div>
                    <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>WhatsApp</label>
                    <input value={form.whatsapp} onChange={e => set('whatsapp',e.target.value)}
                      placeholder="+1 234 567 8900" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}/>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Tour / Package *</label>
                    <select required value={form.tour} onChange={e => set('tour',e.target.value)}
                      style={{ ...inputStyle, cursor:'pointer' }}>
                      <option value="">Select a tour</option>
                      <optgroup label="Tours">
                        {TOURS.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                      </optgroup>
                      <optgroup label="Packages">
                        {PACKAGES.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Date *</label>
                    <input required type="date" value={form.date} onChange={e => set('date',e.target.value)}
                      style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}/>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Adults</label>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl border" style={{ borderColor:'#E5E7EB' }}>
                      <button type="button" onClick={() => set('adults', Math.max(1,form.adults-1))}>
                        <Minus size={13} color={C.muted}/>
                      </button>
                      <span className="flex-1 text-center text-sm font-bold" style={{ color:C.dark }}>{form.adults}</span>
                      <button type="button" onClick={() => set('adults', form.adults+1)}>
                        <Plus size={13} color={C.muted}/>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Children</label>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl border" style={{ borderColor:'#E5E7EB' }}>
                      <button type="button" onClick={() => set('children', Math.max(0,form.children-1))}>
                        <Minus size={13} color={C.muted}/>
                      </button>
                      <span className="flex-1 text-center text-sm font-bold" style={{ color:C.dark }}>{form.children}</span>
                      <button type="button" onClick={() => set('children', form.children+1)}>
                        <Plus size={13} color={C.muted}/>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Pickup Location</label>
                  <input value={form.pickup} onChange={e => set('pickup',e.target.value)}
                    placeholder="Hotel name or address" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}/>
                </div>

                <div>
                  <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Special Requests</label>
                  <textarea value={form.notes} onChange={e => set('notes',e.target.value)}
                    placeholder="Dietary needs, accessibility, preferences..." rows={3}
                    style={{ ...inputStyle, resize:'vertical', lineHeight:'1.6' }}
                    onFocus={focusStyle} onBlur={blurStyle}/>
                </div>

                <GradientBtn>
                  <Send size={14}/> Send Booking Request
                </GradientBtn>

                <p className="text-xs text-center pt-1" style={{ color:C.muted }}>
                  By submitting you agree to our Privacy Policy. We respond within 2 hours.
                </p>
              </form>
            )}
          </RevealBlock>
        </div>
      </div>
    </section>
  )
}
