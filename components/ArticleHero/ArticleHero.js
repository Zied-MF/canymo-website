'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './ArticleHero.module.css'

export default function ArticleHero({ title, date, excerpt, color }) {
  const titleRef = useRef(null)
  const [bannerVisible, setBannerVisible] = useState(false)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setBannerVisible(!entry.isIntersecting),
      { threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Sticky band — covers the main header when H1 is out of view */}
      <div className={`${styles.band} ${bannerVisible ? styles.bandVisible : ''}`}>
        <div className={styles.bandInner}>
          <Link href="/" className={styles.bandLogo}>🐾 Canymo</Link>
          <span className={styles.bandTitle}>{title}</span>
        </div>
      </div>

      {/* Hero */}
      <header className={styles.articleHero} style={{ background: color }}>
        <div className={styles.heroContainer}>
          <Link href="/blog" className={styles.back}>← Retour au blog</Link>
          <div className={styles.meta}>
            <span className={styles.date}>{date}</span>
          </div>
          <h1 ref={titleRef} className={styles.title}>{title}</h1>
          <p className={styles.excerpt}>{excerpt}</p>
        </div>
      </header>
    </>
  )
}
