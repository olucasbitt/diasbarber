import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AuthoritySection from './components/AuthoritySection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import BeforeAfterSection from './components/BeforeAfterSection'
import SocialProofSection from './components/SocialProofSection'
import DifferentialsSection from './components/DifferentialsSection'
import ServicesSection from './components/ServicesSection'
import FAQSection from './components/FAQSection'
import LocationSection from './components/LocationSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <main>
          <HeroSection />
          <AuthoritySection />
          <ProblemSection />
          <SolutionSection />
          <BeforeAfterSection />
          <SocialProofSection />
          <DifferentialsSection />
          <ServicesSection />
          <FAQSection />
          <LocationSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default App
