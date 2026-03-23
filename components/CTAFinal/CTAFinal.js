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
            <a href="#" className={styles.btnLight}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a href="#" className={styles.btnOutline}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.65.19.96.07l12.75-7.37-2.9-2.89L3.18 23.76zM20.7 10.04L17.5 8.17 14.29 11l3.2 3.2 3.22-1.85c.92-.53.92-1.77-.01-2.31zM.49 1.05C.18 1.38 0 1.88 0 2.54v18.93c0 .66.18 1.16.49 1.49l.08.07L11.04 12.5v-.25L.57.98.49 1.05zM3.18.25L13.99 7.6l-2.95 2.94L.49 1.05 3.18.25z"/>
              </svg>
              Google Play
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
