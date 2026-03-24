import FadeUp from '@/components/FadeUp/FadeUp'
import styles from './page.module.css'

export const metadata = {
  title: 'Tarifs — Canymo',
  description: 'Découvrez les plans Canymo : Free, Pro mensuel et Pro annuel. Commencez gratuitement.',
  alternates: {
    canonical: 'https://www.canymo.com/tarifs',
  },
}

const plans = [
  {
    name: 'Free',
    price: '0€',
    period: 'pour toujours',
    desc: 'Pour découvrir Canymo et commencer à suivre ton chien.',
    color: '#e8f5ec',
    textColor: 'var(--green-dark)',
    features: [
      { label: 'Profil pour 1 chien', ok: true },
      { label: 'Plan de base (7 jours)', ok: true },
      { label: 'Checklist journalière', ok: true },
      { label: 'Calcul de ration simplifié', ok: true },
      { label: 'Plan personnalisé illimité', ok: false },
      { label: 'Ajustements automatiques', ok: false },
      { label: 'Météo intégrée', ok: false },
      { label: 'Plusieurs chiens', ok: false },
      { label: 'Rapport mensuel santé', ok: false },
      { label: 'Support prioritaire', ok: false },
    ],
    cta: 'Commencer gratuit',
    ctaStyle: 'outline',
  },
  {
    name: 'Pro',
    price: '5,99€',
    period: 'par mois',
    desc: 'Pour les maîtres engagés qui veulent le meilleur pour leur chien.',
    color: 'var(--green-dark)',
    textColor: 'var(--cream)',
    popular: true,
    features: [
      { label: 'Profil pour 1 chien', ok: true },
      { label: 'Plan de base (7 jours)', ok: true },
      { label: 'Checklist journalière', ok: true },
      { label: 'Calcul de ration simplifié', ok: true },
      { label: 'Plan personnalisé illimité', ok: true },
      { label: 'Ajustements automatiques', ok: true },
      { label: 'Météo intégrée', ok: true },
      { label: 'Jusqu\'à 3 chiens', ok: true },
      { label: 'Rapport mensuel santé', ok: true },
      { label: 'Support prioritaire', ok: false },
    ],
    cta: 'Commencer Pro',
    ctaStyle: 'gold',
  },
  {
    name: 'Pro Annuel',
    price: '49€',
    period: 'par an · 4,08€/mois',
    desc: 'Tout le Pro, avec 32% d\'économies. Le choix des maîtres convaincus.',
    color: 'var(--gold)',
    textColor: 'var(--green-dark)',
    badge: '-32%',
    features: [
      { label: 'Profil pour 1 chien', ok: true },
      { label: 'Plan de base (7 jours)', ok: true },
      { label: 'Checklist journalière', ok: true },
      { label: 'Calcul de ration simplifié', ok: true },
      { label: 'Plan personnalisé illimité', ok: true },
      { label: 'Ajustements automatiques', ok: true },
      { label: 'Météo intégrée', ok: true },
      { label: 'Chiens illimités', ok: true },
      { label: 'Rapport mensuel santé', ok: true },
      { label: 'Support prioritaire', ok: true },
    ],
    cta: 'Choisir Pro Annuel',
    ctaStyle: 'dark',
  },
]

export default function Tarifs() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <FadeUp>
            <span className={styles.eyebrow}>Tarifs</span>
            <h1 className={styles.heroTitle}>
              Commence gratuit.<br />
              <span className={styles.accent}>Évolue à ton rythme.</span>
            </h1>
            <p className={styles.heroSub}>
              Pas de carte bancaire pour commencer. Annule quand tu veux.
              On a confiance en notre produit.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className={styles.plansSection}>
        <div className={styles.container}>
          <div className={styles.plans}>
            {plans.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 120}>
                <div
                  className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
                  style={{ background: plan.color, color: plan.textColor }}
                >
                  {plan.popular && <div className={styles.popularBadge}>⭐ Le plus populaire</div>}
                  {plan.badge && <div className={styles.saveBadge}>{plan.badge}</div>}

                  <div className={styles.planName}>{plan.name}</div>
                  <div className={styles.planPrice}>{plan.price}</div>
                  <div className={styles.planPeriod}>{plan.period}</div>
                  <p className={styles.planDesc}>{plan.desc}</p>

                  <ul className={styles.featureList}>
                    {plan.features.map(f => (
                      <li key={f.label} className={`${styles.feature} ${!f.ok ? styles.featureMuted : ''}`}>
                        <span className={styles.featureIcon}>{f.ok ? '✓' : '×'}</span>
                        {f.label}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className={`${styles.planCta} ${styles[`cta_${plan.ctaStyle}`]}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={400}>
            <p className={styles.disclaimer}>
              Tous les prix sont TTC. L'offre Early Bird offre 6 mois Pro aux 30 premiers inscrits.
              <a href="/faq"> Questions ? Consulte la FAQ →</a>
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
