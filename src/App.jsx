import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Listings from './components/Listings'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink pt-[88px] font-sans text-cream">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Services />
      <Listings />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
