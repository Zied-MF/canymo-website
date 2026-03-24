'use client'
import { useState } from 'react'
import FadeUp from '@/components/FadeUp/FadeUp'
import styles from './page.module.css'

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <FadeUp delay={index * 60}>
      <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
        <button className={styles.question} onClick={() => setOpen(!open)} aria-expanded={open}>
          <span>{faq.q}</span>
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </span>
        </button>
        <div className={styles.answer} aria-hidden={!open}>
          <p>{faq.a}</p>
        </div>
      </div>
    </FadeUp>
  )
}

export default function FAQClient({ faqs }) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <FadeUp>
            <span className={styles.eyebrow}>FAQ</span>
            <h1 className={styles.heroTitle}>
              Toutes tes questions.<br />
              <span className={styles.accent}>Des réponses claires.</span>
            </h1>
            <p className={styles.heroSub}>
              Tu n'as pas trouvé la réponse que tu cherches ?
              Écris-nous, on répond vite.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          <FadeUp delay={500}>
            <div className={styles.contact}>
              <span className={styles.contactEmoji}>💬</span>
              <h3>Tu as une autre question ?</h3>
              <p>Notre équipe répond généralement dans l'heure en journée.</p>
              <a href="#" className={styles.contactBtn}>Nous contacter</a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
