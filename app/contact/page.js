import styles from '../cgu/page.module.css'

export const metadata = {
  title: 'Contact | Canymo',
  description: "Contactez l'équipe Canymo pour toute question sur l'application",
  alternates: {
    canonical: 'https://www.canymo.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Contactez-nous</h1>
        <p className={styles.updated}>Une question, une suggestion ou besoin d'aide ? N'hésitez pas à nous écrire.</p>

        <h2 className={styles.h2}>Par email</h2>
        <p className={styles.p}>📧 <a href="mailto:contact@canymo.com">contact@canymo.com</a></p>
        <p className={styles.p}>Nous répondons généralement sous 24 à 48 heures.</p>

        <h2 className={styles.h2}>À propos de Canymo</h2>
        <p className={styles.p}>Canymo est une application de coaching bien-être pour chiens, créée avec ❤️ en France.</p>
        <ul className={styles.list}>
          <li>Éditeur : Zied Fekih, auto-entrepreneur</li>
          <li>Châtillon, France</li>
        </ul>
      </div>
    </div>
  )
}
