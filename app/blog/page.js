import Link from 'next/link'
import FadeUp from '@/components/FadeUp/FadeUp'
import { articles } from '@/data/articles/index'
import styles from './page.module.css'

export const metadata = {
  title: 'Blog — Canymo',
  description: 'Conseils santé, nutrition et bien-être pour ton chien. Écrits par des passionnés.',
  alternates: {
    canonical: 'https://canymo.com/blog',
  },
}

export default function Blog() {
  return (
    <div className={styles.page}>
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
          <div className={styles.grid}>
            {articles.map((article, i) => (
              <FadeUp key={article.slug} delay={i * 100}>
                <Link href={`/blog/${article.slug}`} className={styles.card}>
                  <div className={styles.cardImage} style={{ background: article.color }}>
                    <div className={styles.cardEmoji}>🐾</div>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardDate}>{article.date}</span>
                    <h2 className={styles.cardTitle}>{article.title}</h2>
                    <p className={styles.cardExcerpt}>{article.excerpt}</p>
                    <span className={styles.cardCta}>Lire l'article →</span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
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
