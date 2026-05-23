'use client'

import { useState } from 'react'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp/FadeUp'
import { CATEGORIES, CATEGORY_COLORS } from '@/data/categories'
import styles from './page.module.css'

export default function BlogClient({ articles }) {
  const [active, setActive] = useState('Tous')

  const filtered = active === 'Tous'
    ? articles
    : articles.filter(a => a.category === active)

  return (
    <>
      {/* Catégories */}
      <div className={styles.filterBar}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`${styles.pill} ${active === cat ? styles.pillActive : ''}`}
            style={active === cat && cat !== 'Tous' ? { background: CATEGORY_COLORS[cat] } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className={styles.grid}>
        {filtered.map((article, i) => {
          const color = CATEGORY_COLORS[article.category] || article.color
          return (
            <FadeUp key={article.slug} delay={i * 80}>
              <Link href={`/blog/${article.slug}`} className={styles.card}>
                <div className={styles.cardImage} style={{ background: color }}>
                  <div className={styles.cardEmoji}>🐾</div>
                  {article.category && (
                    <span className={styles.cardCategory}>{article.category}</span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardDate}>{article.date}</span>
                  <h2 className={styles.cardTitle}>{article.title}</h2>
                  <p className={styles.cardExcerpt}>{article.excerpt}</p>
                  <span className={styles.cardCta}>Lire l'article →</span>
                </div>
              </Link>
            </FadeUp>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>Aucun article dans cette catégorie pour le moment.</p>
      )}
    </>
  )
}
