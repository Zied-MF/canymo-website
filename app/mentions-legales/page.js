import Link from 'next/link'
import styles from '../cgu/page.module.css'

export const metadata = {
  title: 'Mentions Légales | Canymo',
  description: 'Mentions légales du site Canymo',
  alternates: {
    canonical: 'https://www.canymo.com/mentions-legales',
  },
}

export default function MentionsLegalesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Mentions Légales</h1>

        <h2 className={styles.h2}>Éditeur du site</h2>
        <ul className={styles.list}>
          <li>Nom : Zied Fekih</li>
          <li>Statut : Auto-entrepreneur</li>
          <li>Nom commercial : Canymo</li>
          <li>Adresse : Châtillon, France</li>
          <li>Email : contact@canymo.com</li>
        </ul>

        <h2 className={styles.h2}>Directeur de la publication</h2>
        <p className={styles.p}>Zied Fekih</p>

        <h2 className={styles.h2}>Hébergement</h2>
        <p className={styles.p}>Le site www.canymo.com est hébergé par :</p>
        <ul className={styles.list}>
          <li>Vercel Inc.</li>
          <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
          <li>Site web : vercel.com</li>
        </ul>

        <h2 className={styles.h2}>Propriété intellectuelle</h2>
        <p className={styles.p}>L'ensemble du contenu du site Canymo (textes, images, logos, icônes, vidéos, éléments graphiques) est protégé par le droit de la propriété intellectuelle.</p>
        <p className={styles.p}>Toute reproduction, représentation, modification ou exploitation non autorisée est interdite.</p>

        <h2 className={styles.h2}>Données personnelles</h2>
        <p className={styles.p}>Pour toute information concernant la collecte et le traitement de vos données personnelles, veuillez consulter notre <Link href="/confidentialite">Politique de Confidentialité</Link>.</p>

        <h2 className={styles.h2}>Cookies</h2>
        <p className={styles.p}>Le site Canymo utilise uniquement des cookies techniques essentiels au fonctionnement du service. Aucun cookie publicitaire ou de tracking n'est utilisé.</p>

        <h2 className={styles.h2}>Contact</h2>
        <p className={styles.p}>Pour toute question relative au site : <a href="mailto:contact@canymo.com">contact@canymo.com</a></p>
      </div>
    </div>
  )
}
