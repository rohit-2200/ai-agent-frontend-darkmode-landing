import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { HowItWorks } from './components/sections/HowItWorks'
import { Dashboard } from './components/sections/Dashboard'
import { Testimonials } from './components/sections/Testimonials'
import { Pricing } from './components/sections/Pricing'
import { Integrations } from './components/sections/Integrations'
import { FAQ } from './components/sections/FAQ'
import { CTA } from './components/sections/CTA'

function App() {
  return (
    <div className="relative min-h-screen bg-dark-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Dashboard />
        <Testimonials />
        <Pricing />
        <Integrations />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
