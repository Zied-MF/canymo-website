import FadeUp from '@/components/FadeUp/FadeUp'
import styles from './page.module.css'

export const metadata = {
  title: 'Comment ça marche — Canymo',
  description: 'Découvrez comment Canymo crée un programme santé personnalisé pour votre chien en 3 étapes simples.',
  alternates: {
    canonical: 'https://canymo.com/comment-ca-marche',
  },
}

const steps = [
  {
    number: '01',
    icon: '🐾',
    title: 'Crée le profil de ton chien',
    duration: '2 minutes',
    details: [
      'Race et morphologie',
      'Âge et poids actuel',
      'Niveau d\'activité habituel',
      'Éventuelles allergies ou pathologies',
      'Objectif : maintien, perte de poids ou prise de masse musculaire',
    ],
    desc: 'On commence par mieux connaître ton chien. Pas de jargon technique, pas de questionnaire interminable — juste les infos essentielles pour créer un profil précis. En 2 minutes, Canymo a toutes les clés.',
  },
  {
    number: '02',
    icon: '✨',
    title: 'Canymo génère un plan sur-mesure',
    duration: 'Instantané',
    details: [
      'Programme d\'exercice adapté à la race',
      'Rations journalières calculées au gramme',
      'Planning de promenades selon la météo locale',
      'Recommandations nutritionnelles personnalisées',
      'Alertes et conseils saisonniers',
    ],
    desc: 'Notre moteur analyse plus de 200 paramètres : les caractéristiques de la race, le métabolisme de base, les besoins caloriques précis, les risques de santé spécifiques. Le résultat : un programme aussi précis que celui qu\'un vétérinaire nutritionniste établirait.',
  },
  {
    number: '03',
    icon: '📈',
    title: 'Tu suis et ajustes la progression',
    duration: 'Au quotidien',
    details: [
      'Checklist journalière simple à cocher',
      'Pesée hebdomadaire avec graphique de progression',
      'Ajustements automatiques selon les résultats',
      'Rappels bienveillants (pas de spam !)',
      'Rapport mensuel sur la santé de ton chien',
    ],
    desc: 'Chaque semaine, tu vois les progrès. Chaque mois, un bilan complet. Si le poids ne bouge pas comme prévu, Canymo ajuste le plan automatiquement. Pas besoin de tout comprendre — tu n\'as qu\'à suivre les étapes du jour.',
  },
]

const faqs = [
  {
    q: 'Combien de temps avant de voir des résultats ?',
    a: 'Les premiers changements comportementaux (énergie, humeur) se voient souvent en 2 à 3 semaines. Les changements de poids significatifs se voient sur 4 à 8 semaines selon les objectifs.',
  },
  {
    q: 'Est-ce que ça remplace le véto ?',
    a: 'Absolument pas. Canymo est un complément, pas un substitut. Si ton chien a des problèmes de santé, consulte toujours ton vétérinaire. Canymo t\'aide à appliquer les recommandations au quotidien.',
  },
  {
    q: 'Et si j\'ai plusieurs chiens ?',
    a: 'Tu peux créer un profil par chien. Chacun a son propre plan, son propre suivi.',
  },
]

export default function CommentCaMarche() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <FadeUp>
            <span className={styles.eyebrow}>Comment ça marche</span>
            <h1 className={styles.heroTitle}>
              3 étapes.<br />
              <span className={styles.accent}>Un chien en pleine forme.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Canymo transforme des données complexes en actions simples du quotidien.
              Tu n'as pas besoin d'être expert — juste d'être là pour ton chien.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Steps */}
      <section className={styles.steps}>
        <div className={styles.container}>
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={0}>
              <div className={`${styles.step} ${i % 2 === 1 ? styles.stepReverse : ''}`}>
                <div className={styles.stepVisual}>
                  <div className={styles.stepCard}>
                    <div className={styles.stepNum}>{step.number}</div>
                    <div className={styles.stepIcon}>{step.icon}</div>
                    <div className={styles.stepMeta}>
                      <span className={styles.stepDuration}>⏱ {step.duration}</span>
                    </div>
                    <ul className={styles.stepList}>
                      {step.details.map(d => (
                        <li key={d}>
                          <span className={styles.check}>✓</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <h2 className={styles.stepTitle}>{step.title}</h2>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <FadeUp>
            <h2 className={styles.faqTitle}>Questions fréquentes</h2>
          </FadeUp>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{faq.q}</h3>
                  <p className={styles.faqA}>{faq.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <FadeUp>
            <h2 className={styles.ctaTitle}>Prêt à commencer ?</h2>
            <p className={styles.ctaSub}>Gratuit, sans carte bancaire.</p>
            <div className={styles.ctaButtons}>
              <a href="#" className={styles.btnPrimary}>Télécharger Canymo</a>
              <a href="/tarifs" className={styles.btnSecondary}>Voir les tarifs</a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
