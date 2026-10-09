import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

// Put images in public/images/gallery and add them to this array.
const photos = [
 { src: '/images/gallery/Certificate.jpeg', alt: 'Certificate' },
 { src: '/images/gallery/Frame.jpeg', alt: 'Personalised memory frame' },
 { src: '/images/gallery/keychain.jpeg', alt: 'Keychain' },
 { src: '/images/gallery/polaroids.jpeg', alt: 'Polaroids' },
 { src: '/images/gallery/Shield.jpeg', alt: 'Sheild' },
 { src: '/images/gallery/Sunflower.jpeg', alt: 'Sunflower' }
];
const placeholders=['🍫','🌹','📸','🎁','💐','🖼️'];
export default function Gallery(){
 const shown=photos.length?photos:placeholders.map((emoji,i)=>({emoji,alt:`Gallery placeholder ${i+1}`}));
 return <section id="gallery" className="bg-[#fff9f0] px-6 py-24 md:px-10 md:py-36">
  <SectionTitle eyebrow="Made by hand" title="Little works of heart." text="A peek at the gifts, details and memories created at Memorra."/>
  <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3">{shown.map((photo,i)=><motion.div key={photo.src||i} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} className={`group relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f4d7d8] via-[#fff9f0] to-[#dce8d7] ${i===1||i===4?'md:row-span-2 md:aspect-auto':''}`}>
   {photo.src?<img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/>:<div className="flex h-full w-full items-center justify-center"><span className="text-6xl transition duration-300 group-hover:scale-110 md:text-7xl">{photo.emoji}</span></div>}
   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b3028]/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"/>
  </motion.div>)}</div>
 </section>;
}
