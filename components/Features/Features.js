import FadeUp from '@/components/FadeUp/FadeUp'
import styles from './Features.module.css'

const features = [
  {
    icon: '🏃',
    title: 'Exercice personnalisé',
    desc: 'Chaque race a ses besoins propres. Un Border Collie ne se promène pas comme un Bouledogue. Canymo adapte tout automatiquement.',
    color: '#e8f5ec',
    accent: '#2D6444',
  },
  {
    icon: '🥗',
    title: 'Nutrition adaptative',
    desc: 'Rations calculées au gramme près selon le poids actuel, le poids cible et le niveau d\'activité. Fini les approximations.',
    color: '#fef8e7',
    accent: '#C9A84C',
  },
  {
    icon: '🧬',
    title: 'Adapté à chaque race',
    desc: 'Notre base de données couvre 200+ races avec leurs prédispositions génétiques, leurs pathologies fréquentes, leurs rythmes naturels.',
    color: '#f0f0ff',
    accent: '#6060cc',
  },
  {
    icon: '🌤️',
    title: 'Météo intégrée',
    desc: 'Pas de balade par 35°C avec un Carlin. Canymo consulte la météo locale et ajuste les recommandations en temps réel.',
    color: '#e8f5ec',
    accent: '#1C3D2A',
  },
]

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeUp>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Fonctionnalités</span>
            <h2 className={styles.title}>
              Tout ce dont ton chien<br />
              <span className={styles.accent}>a vraiment besoin.</span>
            </h2>
          </div>
        </FadeUp>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={i * 100}>
              <div className={styles.card} style={{ '--card-bg': f.color, '--card-accent': f.accent }}>
                <div className={styles.iconBox} style={{ background: f.color }}>
                  {f.icon}
                </div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
