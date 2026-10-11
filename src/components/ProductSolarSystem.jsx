import { useState } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { ArrowUpRight, Sparkles, X } from 'lucide-react'
import logo from '../assets/logo-new.png'
import { products } from '../data/products'
import './ProductSolarSystem.css'

const categoryNames = {
  albums: 'Albums & Keepsakes',
  memories: 'Frames & Memories',
  bouquets: 'Bouquets',
  gifts: 'Gifts & Occasions',
}

const descriptions = {
  albums: 'A little home for the moments you never want to lose.',
  memories: 'Turn your favourite photographs into something you can keep close.',
  bouquets: 'Thoughtful bouquets made to feel personal, playful, and unforgettable.',
  gifts: 'Small details, big feelings — made especially for someone.',
}

function createPath(index) {
  const baseAngle = index * 137.508
  const baseRadius = 27 + (index % 4) * 3
  const radians = (baseAngle * Math.PI) / 180

  return [0, 1, 2, 3].map((step) => {
    const angle =
      radians + step * 1.45 + Math.sin(index * 0.7 + step) * 0.28

    const radius =
      baseRadius + Math.sin(index * 1.3 + step * 2.1) * 5

    const x = 50 + Math.cos(angle) * radius
    const y = 50 + Math.sin(angle) * radius * 0.82

    return {
      left: `${Math.max(7, Math.min(93, x))}%`,
      top: `${Math.max(7, Math.min(93, y))}%`,
    }
  })
}

const orbitItems = products.map((product, index) => ({
  ...product,
  path: createPath(index),
  duration: 14 + ((index * 7) % 12),
  delay: -((index * 2.7) % 15),
  size:
    index % 5 === 0
      ? 'large'
      : index % 3 === 0
        ? 'medium'
        : 'small',
}))

function ProductPlanet({ item, selected, onSelect }) {
  return (
    <motion.button
      type="button"
      className={`memorra-product-planet planet-${item.size}${
        selected ? ' is-selected' : ''
      }`}
      initial={false}
      animate={{
        left: item.path.map((point) => point.left),
        top: item.path.map((point) => point.top),
      }}
      transition={{
        left: {
          duration: item.duration,
          delay: item.delay,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 0,
        },
        top: {
          duration: item.duration,
          delay: item.delay,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 0,
        },
      }}
      whileHover={{ scale: 1.08, zIndex: 10 }}
      whileTap={{ scale: 0.96 }}
      aria-pressed={selected}
      onClick={() => onSelect(item)}
    >
      <span className="planet-emoji" aria-hidden="true">
        {item.emoji}
      </span>
      <span>{item.name}</span>
    </motion.button>
  )
}

export default function ProductSolarSystem() {
  const [selected, setSelected] = useState(null)

  return (
    <MotionConfig reducedMotion="never">
      <section className="memorra-solar-section" id="products">
        <div className="memorra-solar-heading">
          <span className="memorra-eyebrow">
            <Sparkles size={14} /> Made for your moments
          </span>

          <h2>
            Little things. <em>Big feelings.</em>
          </h2>

          <p>
            Explore the little ways to turn your favourite memories into
            something tangible.
          </p>
        </div>

        <div className="memorra-solar-scene">
          <div className="memorra-nebula" aria-hidden="true" />
          <div
            className="memorra-orbit-ring ring-outer"
            aria-hidden="true"
          />
          <div
            className="memorra-orbit-ring ring-middle"
            aria-hidden="true"
          />
          <div
            className="memorra-orbit-ring ring-inner"
            aria-hidden="true"
          />

          <div className="memorra-star star-one" aria-hidden="true">
            ✦
          </div>
          <div className="memorra-star star-two" aria-hidden="true">
            ✧
          </div>
          <div className="memorra-star star-three" aria-hidden="true">
            ·
          </div>

          <div className="memorra-product-field">
            {orbitItems.map((item) => (
              <ProductPlanet
                key={item.name}
                item={item}
                selected={selected?.name === item.name}
                onSelect={(product) =>
                  setSelected((current) =>
                    current?.name === product.name ? null : product
                  )
                }
              />
            ))}
          </div>

          <div className="memorra-solar-core">
            <div className="memorra-core-halo" aria-hidden="true" />
            <img
              src={logo}
              alt="Memorra — Every Gift Holds a Story"
            />
          </div>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="memorra-product-detail"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22 }}
            >
              <button
                className="memorra-detail-close"
                type="button"
                aria-label="Close product details"
                onClick={() => setSelected(null)}
              >
                <X size={18} />
              </button>

              <span className="memorra-detail-category">
                {categoryNames[selected.category] || 'Personalized gifts'}
              </span>

              <h3>
                {selected.emoji} {selected.name}
              </h3>

              <p>
                {selected.note ||
                  descriptions[selected.category] ||
                  'A thoughtful gift, made personal just for you.'}
              </p>

              <div className="memorra-detail-bottom">
                <strong>{selected.price}</strong>
                <a href="#custom">
                  Make it yours <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="memorra-solar-hint">
          Tap any little planet to explore its story
        </p>
      </section>
    </MotionConfig>
  )
}
