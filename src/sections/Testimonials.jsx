import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const reviews = [
  'Made the family emotional, akka ❤️',
  'You made the day so special, akka!',
  'It is so good, akka! We absolutely loved it.',
  'Everything was made with so much care. Thank you!',
]
export default function Testimonials() {
  return (
    <section className="bg-[#f4eee4] px-6 py-24 md:px-10 md:py-32">
      <SectionTitle eyebrow="Kind words" title="Little messages that mean a lot." text="Real customer feedback, shared with permission and without names." />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {reviews.map((review, i) => (
          <motion.blockquote key={i} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-[2rem] bg-white p-7 shadow-sm md:p-9">
            <div className="text-[#d9a441]">★★★★★</div>
            <p className="mt-5 font-serif text-2xl leading-snug text-[#173e34]">“{review}”</p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}