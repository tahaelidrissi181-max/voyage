import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppBtn() {
  return (
    <motion.a
      href="https://wa.me/212600000000"
      target="_blank" rel="noopener"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      style={{ background: '#25D366' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [1, 1.08, 1],
        opacity: 1,
        boxShadow: [
          '0 4px 24px rgba(37,211,102,0.4)',
          '0 8px 40px rgba(37,211,102,0.65)',
          '0 4px 24px rgba(37,211,102,0.4)',
        ],
      }}
      transition={{ delay: 2, duration: 2.5, repeat: Infinity }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.93 }}>
      <MessageCircle size={26} color="white" fill="white" />
    </motion.a>
  )
}
