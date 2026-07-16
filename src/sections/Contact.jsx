import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react'
import { C, RevealBlock, SectionLabel, SectionTitle, GradientBtn } from '../components/UI.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)
  const set = (k,v) => setForm(f => ({ ...f, [k]:v }))

  const inputStyle = {
    width:'100%', padding:'11px 14px', borderRadius:10,
    border:'1.5px solid #E5E7EB', fontSize:'0.85rem',
    color: C.dark, outline:'none', fontFamily:'inherit', background:'white',
    transition:'border-color 0.2s',
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <RevealBlock className="mb-14 text-center">
          <SectionLabel>Get in touch</SectionLabel>
          <SectionTitle center>We'd Love to Hear From You</SectionTitle>
          <p className="mt-3 max-w-lg mx-auto" style={{ color:C.muted }}>
            Whether you have a question or you're ready to book — our team is here for you.
          </p>
        </RevealBlock>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <RevealBlock>
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden mb-8 flex items-center justify-center"
              style={{ height:280, background:`linear-gradient(135deg,${C.sky}18,${C.sea}18)`, border:`1px solid ${C.sky}20` }}>
              <div className="text-center px-6">
                <MapPin size={36} color={C.sky} className="mx-auto mb-3"/>
                <p className="font-bold text-sm" style={{ color:C.ocean }}>34 Rue Mouassine, Marrakech 40000</p>
                <p className="text-xs mt-1" style={{ color:C.muted }}>Replace with Google Maps embed</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon:<Phone size={15}/>,  label:'Phone',         val:'+212 600 000 000' },
                { icon:<Mail size={15}/>,   label:'Email',         val:'hello@horizontrails.ma' },
                { icon:<MapPin size={15}/>, label:'Address',       val:'Marrakech, Morocco' },
                { icon:<Clock size={15}/>,  label:'Hours',         val:'Daily 8 AM – 8 PM' },
              ].map(item => (
                <div key={item.label} className="p-4 rounded-xl flex items-start gap-3"
                  style={{ background:C.offwhite, border:`1px solid ${C.sand}` }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background:`${C.sky}15`, color:C.sky }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color:C.muted }}>{item.label}</p>
                    <p className="text-xs font-bold mt-0.5" style={{ color:C.dark }}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealBlock>

          {/* Right — contact form */}
          <RevealBlock delay={0.1}>
            {sent ? (
              <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }}
                className="rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                style={{ background:C.offwhite }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background:`${C.sea}20` }}>
                  <Check size={28} color={C.sea} strokeWidth={3}/>
                </div>
                <h3 className="font-bold text-lg mb-2 font-jakarta" style={{ color:C.dark }}>Message Sent!</h3>
                <p className="text-sm" style={{ color:C.muted }}>We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-5 text-sm font-bold" style={{ color:C.sky }}>
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }}
                className="rounded-2xl p-8 space-y-4"
                style={{ background:C.offwhite, border:`1px solid ${C.sand}` }}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Name *</label>
                    <input required value={form.name} onChange={e => set('name',e.target.value)}
                      placeholder="Your name" style={inputStyle}
                      onFocus={e=>e.target.style.borderColor=C.sky}
                      onBlur={e=>e.target.style.borderColor='#E5E7EB'}/>
                  </div>
                  <div>
                    <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => set('email',e.target.value)}
                      placeholder="you@email.com" style={inputStyle}
                      onFocus={e=>e.target.style.borderColor=C.sky}
                      onBlur={e=>e.target.style.borderColor='#E5E7EB'}/>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Subject</label>
                  <input value={form.subject} onChange={e => set('subject',e.target.value)}
                    placeholder="How can we help?" style={inputStyle}
                    onFocus={e=>e.target.style.borderColor=C.sky}
                    onBlur={e=>e.target.style.borderColor='#E5E7EB'}/>
                </div>
                <div>
                  <label className="text-xs font-bold mb-1.5 block" style={{ color:C.dark }}>Message *</label>
                  <textarea required value={form.message} onChange={e => set('message',e.target.value)}
                    placeholder="Tell us about your dream Morocco trip..." rows={5}
                    style={{ ...inputStyle, resize:'vertical', lineHeight:'1.6' }}
                    onFocus={e=>e.target.style.borderColor=C.sky}
                    onBlur={e=>e.target.style.borderColor='#E5E7EB'}/>
                </div>
                <GradientBtn>
                  <Send size={14}/> Send Message
                </GradientBtn>
              </form>
            )}
          </RevealBlock>
        </div>
      </div>
    </section>
  )
}
