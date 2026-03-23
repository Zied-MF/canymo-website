import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>🐾 Canymo</span>
            <p>L'app de santé pensée pour ton chien.</p>
            <div className={styles.stores}>
              <a href="#" className={styles.storeBtn}>App Store</a>
              <a href="#" className={styles.storeBtn}>Google Play</a>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={styles.colTitle}>Produit</span>
              <Link href="/comment-ca-marche">Comment ça marche</Link>
              <Link href="/tarifs">Tarifs</Link>
              <Link href="/faq">FAQ</Link>
            </div>
            <div className={styles.col}>
              <span className={styles.colTitle}>Ressources</span>
              <Link href="/blog">Blog</Link>
              <Link href="/faq">FAQ</Link>
              <a href="#">Contact</a>
            </div>
            <div className={styles.col}>
              <span className={styles.colTitle}>Légal</span>
              <a href="#">Mentions légales</a>
              <a href="#">CGU</a>
              <a href="#">Confidentialité</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2025 Canymo. Tous droits réservés.</span>
          <span>Fait avec ❤️ pour les chiens de France</span>
        </div>
      </div>
    </footer>
  )
}
