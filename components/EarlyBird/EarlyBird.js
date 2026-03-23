import FadeUp from '@/components/FadeUp/FadeUp'
import styles from './EarlyBird.module.css'

export default function EarlyBird() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeUp>
          <div className={styles.card}>
            <div className={styles.badge}>🐦 Offre Early Bird</div>
            <h2 className={styles.title}>
              Les 30 premiers inscrits<br />
              <span className={styles.accent}>6 mois d'accès Pro offert</span>
            </h2>
            <p className={styles.desc}>
              Tu fais partie des premiers à découvrir Canymo ? On t'offre 6 mois Pro
              sans engagement. Pas de carte bancaire requise.
            </p>

            <div className={styles.counter}>
              <div className={styles.spots}>
                <span className={styles.spotsNum}>29</span>
                <span className={styles.spotsLabel}>places restantes</span>
              </div>
              <div className={styles.bar}>
                <div className={styles.barFill} style={{ width: '3.3%' }} />
              </div>
              <p className={styles.barHint}>1 place déjà prise sur 30</p>
            </div>

            <div className={styles.actions}>
              <a href="#" className={styles.btn}>
                Réserver ma place gratuite →
              </a>
              <p className={styles.legal}>Sans engagement · Annulable à tout moment</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
