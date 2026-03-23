import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/data/blog'
import styles from './page.module.css'

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} — Canymo Blog`,
    description: article.excerpt,
  }
}

function renderContent(raw) {
  const lines = raw.trim().split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) { i++; continue }

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className={styles.h2}>{line.slice(3)}</h2>)
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={i} className={styles.bold}>{line.slice(2, -2)}</p>)
    } else {
      // Replace inline **bold**
      const parts = line.split(/\*\*(.*?)\*\*/g)
      const jsx = parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)
      elements.push(<p key={i} className={styles.p}>{jsx}</p>)
    }
    i++
  }
  return elements
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (!article) notFound()

  const others = articles.filter(a => a.slug !== article.slug).slice(0, 2)

  return (
    <div className={styles.page}>
      {/* Article Header */}
      <header className={styles.articleHero} style={{ background: article.color }}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.back}>← Retour au blog</Link>
          <div className={styles.meta}>
            <span className={styles.date}>{article.date}</span>
          </div>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.excerpt}>{article.excerpt}</p>
        </div>
      </header>

      {/* Article Body */}
      <article className={styles.article}>
        <div className={styles.container}>
          <div className={styles.content}>
            {article.contentHtml
              ? <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} className={styles.richContent} />
              : renderContent(article.content)
            }
          </div>

          {/* Author bloc */}
          <div className={styles.author}>
            <div className={styles.authorAvatar}>🐾</div>
            <div>
              <strong>L'équipe Canymo</strong>
              <p>Passionnés de santé canine, on écrit pour t'aider à faire les bons choix pour ton compagnon.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <h2>Prêt à passer à l'action ?</h2>
            <p>Télécharge Canymo et commence le programme santé de ton chien aujourd'hui.</p>
            <Link href="/tarifs" className={styles.ctaBtn}>Voir les plans →</Link>
          </div>
        </div>
      </section>

      {/* Other articles */}
      {others.length > 0 && (
        <section className={styles.others}>
          <div className={styles.container}>
            <h2 className={styles.othersTitle}>À lire aussi</h2>
            <div className={styles.othersGrid}>
              {others.map(a => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className={styles.otherCard}>
                  <div className={styles.otherImg} style={{ background: a.color }} />
                  <div className={styles.otherBody}>
                    <span className={styles.otherDate}>{a.date}</span>
                    <h3 className={styles.otherTitle}>{a.title}</h3>
                    <span className={styles.otherCta}>Lire →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
