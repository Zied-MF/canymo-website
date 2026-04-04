'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      {menuOpen && (
        <div className={styles.overlay} onClick={close} />
      )}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={close}>
            🐾 Canymo
          </Link>

          <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            <Link href="/comment-ca-marche" onClick={close}>Comment ça marche</Link>
            <Link href="/tarifs" onClick={close}>Tarifs</Link>
            <Link href="/blog" onClick={close}>Blog</Link>
            <Link href="/faq" onClick={close}>FAQ</Link>
            <Link href="https://app.canymo.com" className={styles.ctaBtn} onClick={close}>Essayer</Link>
          </nav>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  )
}
