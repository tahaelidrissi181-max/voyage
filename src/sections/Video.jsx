import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { IMGS } from '../images.js'
import { C, RevealBlock, SectionLabel, SectionTitle } from '../components/UI.jsx'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-24" style={{ background:C.ocean }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <RevealBlock>
          <SectionLabel>Feel the magic</SectionLabel>
          <SectionTitle light center>See Morocco Through Our Eyes</SectionTitle>
          <p className="mt-4 mb-10" style={{ color:'rgba(255,255,255,0.7)' }}>
            Three minutes that will make you pack your bags.
          </p>
        </RevealBlock>

        <RevealBlock delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden cursor-pointer"
            style={{ aspectRatio:'16/9' }}
            onClick={() => setPlaying(true)}>
            <img src={IMGS.video} alt="Morocco travel highlights video thumbnail" loading="lazy"
              className="w-full h-full object-cover"/>
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background:'rgba(10,61,98,0.42)' }}>
              <motion.div whileHover={{ scale:1.1 }} whileTap={{ scale:0.95 }}
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                style={{ background:'rgba(255,255,255,0.96)' }}
                animate={{ boxShadow:['0 0 0 0 rgba(255,255,255,0.35)','0 0 0 28px rgba(255,255,255,0)','0 0 0 0 rgba(255,255,255,0)'] }}
                transition={{ duration:2.5, repeat:Infinity }}>
                <Play size={32} fill={C.ocean} color={C.ocean} className="ml-1"/>
              </motion.div>
            </div>
          </div>
        </RevealBlock>
      </div>

      {playing && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/7VKMuOx1Xrc?autoplay=1"
              className="w-full h-full" allow="autoplay; fullscreen" title="Morocco travel video"/>
          </div>
          <button onClick={() => setPlaying(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
            <X size={20}/>
          </button>
        </div>
      )}
    </section>
  )
}
