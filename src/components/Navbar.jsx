import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sparkles, LogOut } from 'lucide-react';
import { whatsappLink } from '../data/site';
const links=[['Home','#home'],['Our Story','#about'],['Gifts','#products'],['Custom','#custom'],['Gallery','#gallery'],['Contact','#contact']];
export default function Navbar() {
  const [open,setOpen]=useState(false);
  return <header className="fixed top-0 z-50 w-full px-3 pt-3 md:px-8 md:pt-5">
    <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-[#092a23]/85 px-4 py-2.5 text-[#fff9f0] shadow-2xl backdrop-blur-2xl md:px-7">
      <a href="#home" className="flex items-center gap-2.5"><img src={Logo} className="h-10 w-10 rounded-full border border-white/80 bg-white p-0.5 object-contain shadow-sm md:h-12 md:w-12" alt="Memorra logo"/><span className="font-serif text-xl tracking-wide md:text-2xl">Memorra<span className="text-[#e9c46a]">.</span></span></a>
      <div className="hidden items-center gap-6 text-sm lg:flex">{links.map(([label,href])=><a key={href} href={href} className="nav-link">{label}</a>)}<a href={whatsappLink("Hi Memorra! I'd like to enquire about a gift.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#e9c46a] px-5 py-2.5 font-bold text-[#092a23] transition hover:scale-105"><Sparkles size={15}/> Let's talk</a></div>
      <button onClick={()=>setOpen(!open)} className="rounded-full p-2 transition hover:bg-white/10 lg:hidden" aria-label="Toggle menu" aria-expanded={open}>{open?<X/>:<Menu/>}</button>
    </nav>
    <AnimatePresence>{open&&<motion.div initial={{opacity:0,y:-12,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-12,scale:.98}} className="mx-2 mt-2 rounded-3xl border border-white/10 bg-[#092a23]/95 p-4 text-[#fff9f0] shadow-2xl backdrop-blur-xl lg:hidden">
      {links.map(([label,href])=><a onClick={()=>setOpen(false)} key={href} href={href} className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[#e9c46a]">{label}</a>)}
      <a onClick={()=>setOpen(false)} href={whatsappLink("Hi Memorra! I'd like to enquire about a gift.")} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#e9c46a] px-5 py-3 font-bold text-[#092a23]"><Sparkles size={16}/> Let's talk on WhatsApp</a>
    </motion.div>}</AnimatePresence>
  </header>;
}
