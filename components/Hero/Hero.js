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
            <a href="#" className={styles.btnPrimary}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a href="#" className={styles.btnSecondary}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.65.19.96.07l12.75-7.37-2.9-2.89L3.18 23.76zM20.7 10.04L17.5 8.17 14.29 11l3.2 3.2 3.22-1.85c.92-.53.92-1.77-.01-2.31zM.49 1.05C.18 1.38 0 1.88 0 2.54v18.93c0 .66.18 1.16.49 1.49l.08.07L11.04 12.5v-.25L.57.98.49 1.05zM3.18.25L13.99 7.6l-2.95 2.94L.49 1.05 3.18.25z"/>
              </svg>
              Google Play
            </a>
          </div>
          <p className={styles.trust}>
            ⭐ Rejoint par <strong>230+ maîtres</strong> en beta — 0€ pour commencer
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
                  <span className={styles.statEmoji}>🏃</span>
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
