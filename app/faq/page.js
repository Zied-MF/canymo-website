'use client'
import { useState } from 'react'
import FadeUp from '@/components/FadeUp/FadeUp'
import styles from './page.module.css'

const faqs = [
  {
    q: 'Canymo est-il vraiment gratuit pour commencer ?',
    a: 'Oui, à 100%. Le plan Free te donne accès à un profil complet pour ton chien et un plan de base sur 7 jours. Aucune carte bancaire requise pour démarrer. Tu passes au Pro si et seulement si tu en veux plus.',
  },
  {
    q: 'Est-ce que Canymo remplace mon vétérinaire ?',
    a: 'Non, et ce n\'est pas notre objectif. Canymo est un outil du quotidien pour t\'aider à appliquer de bonnes habitudes. Si ton chien a des problèmes de santé, consulte toujours ton vétérinaire. On est complémentaires, pas concurrents.',
  },
  {
    q: 'Comment Canymo personnalise-t-il le plan ?',
    a: 'Notre moteur analyse la race, l\'âge, le poids, le niveau d\'activité, les éventuelles pathologies et l\'objectif (maintien, perte de poids, etc.). Il croise ces données avec notre base de 200+ races pour générer un programme adapté. Le plan s\'ajuste automatiquement selon les résultats hebdomadaires.',
  },
  {
    q: 'Combien de chiens puis-je enregistrer ?',
    a: 'En Free : 1 chien. En Pro mensuel : jusqu\'à 3 chiens. En Pro Annuel : chiens illimités. Chaque chien a son propre profil, son propre plan et son propre suivi.',
  },
  {
    q: 'Puis-je annuler mon abonnement à tout moment ?',
    a: 'Absolument. Pas de période d\'engagement minimale. Tu annules depuis l\'app ou l\'App Store / Google Play, et l\'abonnement s\'arrête à la fin de la période en cours. On ne te fait pas la misère.',
  },
  {
    q: 'Les données de mon chien sont-elles sécurisées ?',
    a: 'Tes données sont stockées sur des serveurs sécurisés en Europe (RGPD compliant). On ne revend jamais tes données à des tiers. Ton chien n\'est pas un produit.',
  },
  {
    q: 'Que se passe-t-il si mon chien est malade ou blessé ?',
    a: 'Tu peux mettre le plan en pause depuis l\'app. Canymo te propose également un mode "récupération" avec des recommandations allégées pour les périodes de convalescence. Et bien sûr, consulte ton véto.',
  },
  {
    q: 'L\'app fonctionne sur Android et iOS ?',
    a: 'Oui, Canymo est disponible sur l\'App Store (iOS 14+) et le Google Play Store (Android 8+). Les deux versions sont identiques en termes de fonctionnalités.',
  },
]

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

export default function FAQ() {
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
