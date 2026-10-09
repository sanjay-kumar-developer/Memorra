import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <section id="about" className="bg-[#fff9f0] px-6 py-24 md:px-10 md:py-36">
      <SectionTitle eyebrow="Our story" title="A little courage. A lot of love." text="Memorra grew from a tiny passion project into a handmade gifting brand — one order, one memory and one leap of faith at a time." />
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <motion.div initial={{opacity:0,x:-35}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="rounded-[2.5rem] bg-[#0b3028] p-8 text-[#fff9f0] md:p-12">
          <p className="text-sm uppercase tracking-[.25em] text-[#e9c46a]">From Shopping with Vibes → Memorra</p>
          <p className="mt-7 font-serif text-3xl leading-tight">“She kept creating with <strong>Art</strong> and <strong>Math</strong>, even when almost nobody was watching.”</p>
        </motion.div>
        <motion.div initial={{opacity:0,x:35}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="space-y-5 text-[#5f655d] leading-8">
        

<p>Vithyaa Sri began this journey under the name <strong className="text-[#173e34]">Shopping with Vibes</strong>. What started as a small venture even had its own little stall at <strong className="text-[#173e34]">Lady Doak College</strong>. Sales were few at first, but she kept going — creating gifts for friends, students and family, one memory at a time.</p>

<p>After marriage, her husband Veera became a true pillar of support. Together, the idea found a new identity: <strong className="text-[#173e34]">Memorra</strong> — a name that brought their journey together.</p>

<p>Life changed again when Vithyaa became a mother. Even after stepping away for a while, she returned to the work she loved. Today, Memorra continues to grow with the same hands-on spirit, turning ideas, memories and emotions into something people can hold and cherish.</p>

        </motion.div>
      </div>
    </section>
  )
}