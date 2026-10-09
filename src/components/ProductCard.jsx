import { motion } from 'framer-motion';
import { ArrowUpRight, Heart } from 'lucide-react';
import { useState } from 'react';
import { whatsappLink } from '../data/site';
export default function ProductCard({product,index}) {
  const [saved,setSaved]=useState(false);
  const message=`Hi Memorra! I'm interested in the ${product.name} (starting at ${product.price}). Could you share more details and customisation options?`;
  return <motion.article initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.55,delay:Math.min(index*.035,.2)}} whileHover={{y:-7}} className="group overflow-hidden rounded-[2rem] border border-[#d8cbb7] bg-white/75 p-3 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-2xl hover:shadow-[#0b3028]/10">
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#f7e4d6] via-[#fff9f0] to-[#dfe9d8]"><motion.span className="text-6xl" whileHover={{scale:1.2,rotate:[0,-5,5,0]}} transition={{duration:.45}}>{product.emoji}</motion.span><button onClick={()=>setSaved(!saved)} aria-label={saved?'Remove from favourites':'Add to favourites'} className={`absolute right-3 top-3 rounded-full p-2.5 backdrop-blur transition ${saved?'bg-rose-500 text-white':'bg-white/75 text-[#173e34] hover:bg-white'}`}><Heart size={17} fill={saved?'currentColor':'none'}/></button><div className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-white/75 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#173e34]">Made with meaning</div></div>
    <div className="p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="font-serif text-xl text-[#173e34]">{product.name}</h3><p className="mt-1 text-sm text-[#6b7067]">{product.note||'Handcrafted & personalised'}</p></div><span className="whitespace-nowrap rounded-full bg-[#f5e5bd] px-3 py-1 text-sm font-semibold text-[#5d4819]">{product.price}</span></div><a href={whatsappLink(message)} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-between rounded-full border border-[#0b3028]/15 px-4 py-2.5 text-sm font-semibold text-[#0b3028] transition group-hover:border-[#0b3028] group-hover:bg-[#0b3028] group-hover:text-[#fff9f0]">Ask about this gift <ArrowUpRight size={16}/></a></div>
  </motion.article>;
}
