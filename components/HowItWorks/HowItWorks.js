import FadeUp from '@/components/FadeUp/FadeUp'
import styles from './HowItWorks.module.css'

const steps = [
  {
    icon: '🐾',
    number: '01',
    title: 'Entre le profil de ton chien',
    desc: 'Race, âge, poids, niveau d\'activité, allergies... En 2 minutes, Canymo connaît ton chien mieux que ton véto.',
  },
  {
    icon: '✨',
    number: '02',
    title: 'Canymo génère un plan sur-mesure',
    desc: 'Notre moteur analyse plus de 200 paramètres pour créer un programme nutrition + exercice 100% adapté à ton chien.',
  },
  {
    icon: '📈',
    number: '03',
    title: 'Tu suis la progression',
    desc: 'Coche les activités du jour, pèse les repas, vois les progrès semaine après semaine. C\'est simple et même amusant.',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeUp>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Comment ça marche</span>
            <h2 className={styles.title}>
              Simple comme bonjour.<br />
              <span className={styles.accent}>Efficace pour de vrai.</span>
            </h2>
            <p className={styles.subtitle}>
              Pas besoin d'être expert. Canymo fait le travail complexe,
              toi tu profites de tes moments avec ton chien.
            </p>
          </div>
        </FadeUp>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 150}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.iconWrap}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
