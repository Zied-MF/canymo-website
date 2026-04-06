import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>🐾 Early Access — Rejoins les premiers</div>
          <h1 className={styles.title}>
            Ton chien mérite<br />
            <span className={styles.accent}>d'être au top.</span>
          </h1>
          <p className={styles.subtitle}>
            Canymo crée un programme santé sur-mesure pour ton chien —
            nutrition, exercice, suivi intelligent. Parce que chaque chien est unique.
          </p>
          <div className={styles.buttons}>
            <a href="https://app.canymo.com" className={styles.btnPrimary}>
              Essayer gratuitement →
            </a>
            <a href="/comment-ca-marche" className={styles.btnSecondary}>
              Comment ça marche
            </a>
          </div>
          <p className={styles.trust}>
            ✨ Gratuit pour commencer — <strong>Sans engagement</strong>
          </p>
        </div>

        <div className={styles.mockupArea}>
          <div className={styles.phone}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneScreen}>
              <div className={styles.appHeader}>
                <div>
                  <div className={styles.appGreeting}>Bonjour ! 👋</div>
                  <div className={styles.appSub}>Voici le plan de Max aujourd'hui</div>
                </div>
                <div className={styles.avatar}>M</div>
              </div>

              <div className={styles.dogCard}>
                <div className={styles.dogEmoji}>🐕</div>
                <div className={styles.dogDetails}>
                  <strong>Max</strong>
                  <span>Golden Retriever · 3 ans · 28 kg</span>
                </div>
                <div className={styles.healthTag}>✓ En forme</div>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <span className={styles.statEmoji}>🐕</span>
                  <span className={styles.statNum}>45 min</span>
                  <span className={styles.statLbl}>Exercice</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statEmoji}>🥗</span>
                  <span className={styles.statNum}>280 g</span>
                  <span className={styles.statLbl}>Ration</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statEmoji}>💧</span>
                  <span className={styles.statNum}>600 ml</span>
                  <span className={styles.statLbl}>Eau</span>
                </div>
              </div>

              <div className={styles.progressCard}>
                <div className={styles.progressTop}>
                  <span>Objectif semaine</span>
                  <span className={styles.progressCount}>5/7 jours</span>
                </div>
                <div className={styles.bar}>
                  <div className={styles.barFill} style={{ width: '71%' }} />
                </div>
              </div>

              <div className={styles.aiCard}>
                <div className={styles.aiIcon}>💡</div>
                <div className={styles.aiText}>
                  <strong>Conseil du jour</strong>
                  <p>Promenade légère 30 min + séance sniffing en herbe</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.floatBadge1}>🏅 Plan personnalisé</div>
          <div className={styles.floatBadge2}>📍 Météo intégrée</div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Découvre comment ça marche</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  )
}
