import { useMemo, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'
import ProductSolarSystem from '../components/ProductSolarSystem'
export default function Products() {
  const [active, setActive] = useState('bouquets')
  const filtered = useMemo(() => products.filter(p => p.category === active), [active])
  return (
    <section id="products" className="bg-[#f4eee4] px-6 py-24 md:px-10 md:py-36">
      <div className="mb-16">
        <ProductSolarSystem />
      </div>
      <div className="mx-auto mb-10 flex max-w-6xl gap-2 overflow-x-auto pb-2">
        {categories.map(c => <button key={c.id} onClick={() => setActive(c.id)} className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${active === c.id ? 'bg-[#0b3028] text-[#fff9f0]' : 'bg-white text-[#173e34] hover:bg-[#e7dfd2]'}`}>{c.label}</button>)}
      </div>
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => <ProductCard key={p.name} product={p} index={i} />)}
      </div>
      <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-[#77776e]">Prices may vary based on size, quantity, materials and customisation. Bulk orders are welcome; per-piece pricing depends on quantity. Some products may not be available for courier delivery.</p>
    </section>
  )
}