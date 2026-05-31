import FadeUp from '@/components/FadeUp/FadeUp'
import { articles } from '@/data/articles/index'
import BlogClient from './BlogClient'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import StructuredData from '@/components/StructuredData/StructuredData'
import styles from './page.module.css'

export const metadata = {
  title: 'Blog — Canymo',
  description: 'Conseils santé, nutrition et bien-être pour ton chien. Écrits par des passionnés.',
  alternates: {
    canonical: 'https://www.canymo.com/blog',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.canymo.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.canymo.com/blog' },
  ],
}

export default function Blog() {
  return (
    <div className={styles.page}>
      <StructuredData data={breadcrumbSchema} />
      <Breadcrumb items={[
        { label: 'Accueil', href: '/' },
        { label: 'Blog' },
      ]} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <FadeUp>
            <span className={styles.eyebrow}>Blog</span>
            <h1 className={styles.heroTitle}>
              Tout ce que tu dois savoir<br />
              <span className={styles.accent}>pour ton chien.</span>
            </h1>
            <p className={styles.heroSub}>
              Des articles honnêtes et accessibles sur la santé, la nutrition
              et le bien-être canin. Sans jargon, sans bullshit.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <BlogClient articles={articles} />
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.container}>
          <FadeUp>
            <div className={styles.newsletterCard}>
              <span className={styles.newsletterEmoji}>📬</span>
              <h2>Reçois les nouveaux articles</h2>
              <p>Un email par semaine. Pas de spam. Désabonnement en un clic.</p>
              <div className={styles.newsletterForm}>
                <input type="email" placeholder="ton@email.com" className={styles.input} />
                <button className={styles.subBtn}>S'abonner</button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
