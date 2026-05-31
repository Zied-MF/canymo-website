import dynamic from 'next/dynamic'
import StructuredData from '@/components/StructuredData/StructuredData'
import Hero from '@/components/Hero/Hero'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import Features from '@/components/Features/Features'
import EarlyBird from '@/components/EarlyBird/EarlyBird'
import CTAFinal from '@/components/CTAFinal/CTAFinal'

const Stats = dynamic(() => import('@/components/Stats/Stats'))

const homeBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.canymo.com' }],
}

export default function Home() {
  return (
    <>
      <StructuredData data={homeBreadcrumb} />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <EarlyBird />
      <CTAFinal />
    </>
  )
}
