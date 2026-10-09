import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mx-auto mb-12 max-w-3xl text-center">
      <p className={`mb-3 text-xs font-bold uppercase tracking-[.28em] ${light ? 'text-[#e9c46a]' : 'text-[#8b6b32]'}`}>{eyebrow}</p>
      <h2 className={`font-serif text-4xl leading-tight md:text-6xl ${light ? 'text-[#fff9f0]' : 'text-[#173e34]'}`}>{title}</h2>
      {text && <p className={`mx-auto mt-5 max-w-2xl leading-7 ${light ? 'text-white/70' : 'text-[#666b63]'}`}>{text}</p>}
    </motion.div>
  )
}