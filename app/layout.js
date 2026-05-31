import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import StructuredData from '@/components/StructuredData/StructuredData'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '600'],
})

export const metadata = {
  title: "Canymo — Ton chien mérite d'être au top",
  description:
    "L'app de santé et bien-être pour chiens. Plans personnalisés, nutrition adaptée, suivi intelligent.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.canymo.com',
  },
  verification: {
    google: 'eDZhYjmJSCKCuBtALP-71mheUVy4csfPJfMm0yvbJNg',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Canymo',
  url: 'https://www.canymo.com',
  logo: 'https://www.canymo.com/logo.png',
  description: "L'app de santé et bien-être pour chiens. Plans personnalisés, nutrition adaptée, suivi intelligent.",
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: 'https://www.canymo.com/contact',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <StructuredData data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
