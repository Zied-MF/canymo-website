import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/data/blog'
import TableOfContents from '@/components/TableOfContents/TableOfContents'
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

// Converts a heading text to a URL-safe id
function toId(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

// Injects id="..." on every <h2> in an HTML string
function injectH2Ids(html) {
  return html.replace(/<h2>(.*?)<\/h2>/g, (_, inner) => {
    const id = toId(inner.replace(/<[^>]+>/g, ''))
    return `<h2 id="${id}">${inner}</h2>`
  })
}

// Extracts { id, title } from an HTML string
function extractHeadingsFromHtml(html) {
  return [...html.matchAll(/<h2>(.*?)<\/h2>/g)].map(m => {
    const title = m[1].replace(/<[^>]+>/g, '')
    return { id: toId(title), title }
  })
}

// Extracts { id, title } from markdown-style content
function extractHeadingsFromContent(content) {
  return content
    .split('\n')
    .filter(l => l.trim().startsWith('## '))
    .map(l => {
      const title = l.trim().slice(3)
      return { id: toId(title), title }
    })
}

function renderContent(raw) {
  const lines = raw.trim().split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }

    if (line.startsWith('## ')) {
      const title = line.slice(3)
      elements.push(<h2 key={i} id={toId(title)} className={styles.h2}>{title}</h2>)
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={i} className={styles.bold}>{line.slice(2, -2)}</p>)
    } else {
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

  let headings = []
  let processedHtml = null

  if (article.contentHtml) {
    processedHtml = injectH2Ids(article.contentHtml)
    headings = extractHeadingsFromHtml(article.contentHtml)
  } else if (article.content) {
    headings = extractHeadingsFromContent(article.content)
  }

  return (
    <div className={styles.page}>
      {/* Article Header */}
      <header className={styles.articleHero} style={{ background: article.color }}>
        <div className={styles.heroContainer}>
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
        <div className={styles.articleWrapper}>
          {/* Sidebar TOC */}
          <aside className={styles.tocSidebar}>
            <TableOfContents headings={headings} />
          </aside>

          {/* Main content */}
          <div className={styles.articleMain}>
            <div className={styles.content}>
              {processedHtml
                ? <div dangerouslySetInnerHTML={{ __html: processedHtml }} className={styles.richContent} />
                : renderContent(article.content)
              }
            </div>

            <div className={styles.author}>
              <div className={styles.authorAvatar}>🐾</div>
              <div>
                <strong>L'équipe Canymo</strong>
                <p>Passionnés de santé canine, on écrit pour t'aider à faire les bons choix pour ton compagnon.</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
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
          <div className={styles.othersContainer}>
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
