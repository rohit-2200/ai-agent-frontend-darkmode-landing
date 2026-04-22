import { Navbar } from '@/components/layout/Navbar'
import { CTA } from '@/components/sections/CTA'
import { Dashboard } from '@/components/sections/Dashboard'
import { FAQ } from '@/components/sections/FAQ'
import { Features } from '@/components/sections/Features'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Integrations } from '@/components/sections/Integrations'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'


function Home() {
  return (
    <div className="relative min-h-screen bg-dark-950">
      <Navbar />
      <main>
        <Hero />  
        <Features preview showViewMore />
        <HowItWorks preview showViewMore />
        <Dashboard />
        <Testimonials />
        <Pricing />
        <Integrations />
        <FAQ />
        <CTA />
      </main> 
     
    </div>
    
  )
  
}

export default Home

