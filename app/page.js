import dynamic from 'next/dynamic'
import Hero from '@/components/Hero/Hero'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import Features from '@/components/Features/Features'
import EarlyBird from '@/components/EarlyBird/EarlyBird'
import CTAFinal from '@/components/CTAFinal/CTAFinal'

const Stats = dynamic(() => import('@/components/Stats/Stats'))

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <EarlyBird />
      <CTAFinal />
    </>
  )
}
