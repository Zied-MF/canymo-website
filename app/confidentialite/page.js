import styles from '../cgu/page.module.css'

export const metadata = {
  title: 'Politique de Confidentialité | Canymo',
  description: 'Politique de confidentialité de l\'application Canymo',
  alternates: {
    canonical: 'https://www.canymo.com/confidentialite',
  },
}

export default function ConfidentialitePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Politique de Confidentialité</h1>
        <p className={styles.updated}>Dernière mise à jour : 24 mars 2025</p>

        <h2 className={styles.h2}>1. Responsable du traitement</h2>
        <ul className={styles.list}>
          <li>Zied Fekih, auto-entrepreneur</li>
          <li>Nom commercial : Canymo</li>
          <li>Email : contact@canymo.com</li>
        </ul>

        <h2 className={styles.h2}>2. Données collectées</h2>
        <p className={styles.p}>Nous collectons les données suivantes :</p>
        <p className={styles.p}><strong>Données du compte</strong> : adresse email, mot de passe (chiffré)</p>
        <p className={styles.p}><strong>Données du chien</strong> : nom, race, âge, poids, niveau d'activité, conditions de santé éventuelles</p>
        <p className={styles.p}><strong>Données d'utilisation</strong> : programmes suivis, exercices effectués, évolution du poids</p>
        <p className={styles.p}><strong>Données techniques</strong> : type d'appareil, version de l'application</p>

        <h2 className={styles.h2}>3. Finalités du traitement</h2>
        <p className={styles.p}>Vos données sont utilisées pour :</p>
        <ul className={styles.list}>
          <li>Créer et gérer votre compte utilisateur</li>
          <li>Générer des programmes d'exercices personnalisés</li>
          <li>Fournir des conseils nutritionnels adaptés</li>
          <li>Suivre l'évolution du poids de votre chien</li>
          <li>Améliorer nos services et algorithmes</li>
          <li>Vous envoyer des notifications liées au service</li>
        </ul>

        <h2 className={styles.h2}>4. Base légale</h2>
        <p className={styles.p}>Le traitement de vos données repose sur :</p>
        <ul className={styles.list}>
          <li>L'exécution du contrat (fourniture du service)</li>
          <li>Votre consentement (notifications marketing)</li>
          <li>Notre intérêt légitime (amélioration du service)</li>
        </ul>

        <h2 className={styles.h2}>5. Durée de conservation</h2>
        <p className={styles.p}>Vos données sont conservées pendant toute la durée d'utilisation de votre compte, puis supprimées dans un délai de 30 jours après la suppression de votre compte.</p>

        <h2 className={styles.h2}>6. Partage des données</h2>
        <p className={styles.p}>Vos données ne sont jamais vendues à des tiers.</p>
        <p className={styles.p}>Elles peuvent être partagées avec :</p>
        <ul className={styles.list}>
          <li>Nos sous-traitants techniques (hébergement, paiement) dans le cadre strict de la fourniture du service</li>
          <li>Les autorités compétentes si la loi l'exige</li>
        </ul>

        <h2 className={styles.h2}>7. Sécurité</h2>
        <p className={styles.p}>Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données : chiffrement des mots de passe, connexions sécurisées (HTTPS), accès restreint aux données.</p>

        <h2 className={styles.h2}>8. Vos droits</h2>
        <p className={styles.p}>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className={styles.list}>
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement</li>
          <li>Droit à la portabilité</li>
          <li>Droit d'opposition</li>
          <li>Droit de retirer votre consentement</li>
        </ul>
        <p className={styles.p}>Pour exercer ces droits, contactez-nous à contact@canymo.com.</p>

        <h2 className={styles.h2}>9. Cookies</h2>
        <p className={styles.p}>L'application Canymo n'utilise pas de cookies publicitaires. Seuls des cookies techniques essentiels au fonctionnement du service sont utilisés.</p>

        <h2 className={styles.h2}>10. Modifications</h2>
        <p className={styles.p}>Cette politique peut être modifiée à tout moment. En cas de changement significatif, vous serez informé par email ou notification dans l'application.</p>

        <h2 className={styles.h2}>11. Contact</h2>
        <p className={styles.p}>Pour toute question relative à vos données personnelles : contact@canymo.com</p>
      </div>
    </div>
  )
}
