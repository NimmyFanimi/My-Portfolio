import Link from 'next/link'
import { HeroSection } from '@/components/hero-section'
import { HowItWorks } from '@/components/how-it-works'
import { PricingSection } from '@/components/pricing-section'
import { AboutSection } from '@/components/about-section'

export default function HomePage() {
  return (
    <div className="noise-bg">
      <HeroSection />
      <HowItWorks />
      <PricingSection />
      <AboutSection />
    </div>
  )
}
