'use client'
import { useState, useEffect } from 'react'
import styles from './TableOfContents.module.css'

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (!headings.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -65% 0px', threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings.length) return null

  return (
    <nav className={styles.toc}>
      <span className={styles.label}>Sommaire</span>
      <ul className={styles.list}>
        {headings.map(({ id, title }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${styles.link} ${activeId === id ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
