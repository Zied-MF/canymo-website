import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata = {
  title: "Canymo — Ton chien mérite d'être au top",
  description:
    "L'app de santé et bien-être pour chiens. Plans personnalisés, nutrition adaptée, suivi intelligent.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://canymo.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
