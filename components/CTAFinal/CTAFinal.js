import FadeUp from '@/components/FadeUp/FadeUp'
import styles from './CTAFinal.module.css'

export default function CTAFinal() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeUp>
          <span className={styles.emoji}>🐾</span>
          <h2 className={styles.title}>
            Prêt à offrir le meilleur<br />
            à ton compagnon ?
          </h2>
          <p className={styles.subtitle}>
            Télécharge Canymo gratuitement. Ton chien te remerciera.
          </p>
          <div className={styles.buttons}>
            <a href="https://app.canymo.com" className={styles.btnLight}>
              Essayer gratuitement →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
