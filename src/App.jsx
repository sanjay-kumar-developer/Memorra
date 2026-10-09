import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import About from './sections/About'
import Products from './sections/Products'
import CustomOrders from './sections/CustomOrders'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff9f0]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <CustomOrders />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-[#092a23] px-6 py-10 text-center text-sm text-white/50">
        <p className="font-serif text-2xl text-[#fff9f0]">Memorra</p>
        <p className="mt-2">Every Gift Holds a Story.</p>
        <p className="mt-6">© {new Date().getFullYear()} Memorra. Handmade with love.</p>
      </footer>
      <WhatsAppButton />
    </div>
  )
}