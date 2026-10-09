import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { whatsappLink } from '../data/site';
export default function WhatsAppButton() {
  return <motion.a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat with Memorra on WhatsApp"
    initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} whileHover={{scale:1.07,y:-3}} whileTap={{scale:.96}}
    className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-xl">
    <MessageCircle size={19}/><span>Chat with us</span>
  </motion.a>;
}
