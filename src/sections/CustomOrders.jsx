import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { whatsappLink } from '../data/site';
export default function CustomOrders() {
 const message="Hi Memorra! I have a custom gift idea. I'd like to share a reference image and discuss the occasion, budget and delivery date.";
 return <section id="custom" className="overflow-hidden bg-[#0b3028] px-6 py-24 md:px-10 md:py-36">
  <SectionTitle light eyebrow="Your idea → our creation" title="Saw it online? We can make it yours." text="Send a reference from Google, Instagram, Pinterest — anywhere. Tell us the occasion, budget and delivery date, and we'll work from there."/>
  <div className="mx-auto max-w-5xl"><motion.div initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur md:p-14">
   <div className="mx-auto grid max-w-3xl gap-4 text-left sm:grid-cols-4">{['Send a reference','Tell us the occasion','Set your budget','Pick a delivery date'].map((x,i)=><div key={x} className="rounded-3xl border border-white/10 bg-white/5 p-5"><span className="text-sm text-[#e9c46a]">0{i+1}</span><p className="mt-5 font-serif text-xl text-white">{x}</p></div>)}</div>
   <a href={whatsappLink(message)} target="_blank" rel="noreferrer" className="mt-9 inline-flex rounded-full bg-[#e9c46a] px-7 py-3.5 font-bold text-[#0b3028] transition hover:scale-105">Start a Custom Order</a><p className="mt-5 text-sm text-white/45">We recommend placing orders around 5 days in advance.</p>
  </motion.div></div>
 </section>;
}
