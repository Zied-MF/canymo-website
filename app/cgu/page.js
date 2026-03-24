import styles from './page.module.css'

export const metadata = {
  title: "Conditions Générales d'Utilisation | Canymo",
  description: "Conditions générales d'utilisation de l'application Canymo - coaching bien-être pour chiens",
  alternates: {
    canonical: 'https://www.canymo.com/cgu',
  },
}

export default function CGUPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Conditions Générales d'Utilisation</h1>
        <p className={styles.updated}>Dernière mise à jour : 24 mars 2025</p>

        <h2 className={styles.h2}>1. Présentation du service</h2>
        <p className={styles.p}>Canymo est une application de coaching bien-être destinée aux propriétaires de chiens. Elle propose des programmes d'exercices personnalisés, des conseils nutritionnels et un suivi du poids adapté à chaque animal.</p>
        <p className={styles.p}>Le service est édité par :</p>
        <ul className={styles.list}>
          <li>Nom : Zied Fekih, autoentrepreneur</li>
          <li>Adresse : Châtillon 92320, France</li>
          <li>Email : contact@canymo.com</li>
        </ul>

        <h2 className={styles.h2}>2. Acceptation des conditions</h2>
        <p className={styles.p}>L'utilisation de l'application Canymo implique l'acceptation pleine et entière des présentes conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.</p>

        <h2 className={styles.h2}>3. Accès au service</h2>
        <h3 className={styles.h3}>3.1 Version gratuite</h3>
        <p className={styles.p}>L'application Canymo propose une version gratuite permettant d'accéder aux fonctionnalités de base : création du profil du chien, programme d'exercices hebdomadaire et conseils généraux.</p>
        <h3 className={styles.h3}>3.2 Abonnement Pro</h3>
        <p className={styles.p}>L'abonnement Pro (5,99€/mois) donne accès à l'ensemble des fonctionnalités : suivi nutritionnel avancé, historique complet, rapports vétérinaires et conseils personnalisés illimités.</p>

        <h2 className={styles.h2}>4. Inscription et compte utilisateur</h2>
        <p className={styles.p}>Pour utiliser Canymo, vous devez :</p>
        <ul className={styles.list}>
          <li>Être âgé d'au moins 18 ans ou disposer de l'autorisation d'un représentant légal</li>
          <li>Fournir des informations exactes lors de l'inscription</li>
          <li>Maintenir la confidentialité de vos identifiants de connexion</li>
          <li>Être propriétaire ou responsable légal du chien inscrit</li>
        </ul>
        <p className={styles.p}>Vous êtes responsable de toute activité effectuée depuis votre compte.</p>

        <h2 className={styles.h2}>5. Abonnement et paiement</h2>
        <h3 className={styles.h3}>5.1 Tarification</h3>
        <p className={styles.p}>L'abonnement Pro est facturé mensuellement au tarif de 5,99€ TTC. Les prix peuvent être modifiés avec un préavis de 30 jours.</p>
        <h3 className={styles.h3}>5.2 Renouvellement</h3>
        <p className={styles.p}>L'abonnement se renouvelle automatiquement chaque mois. Vous pouvez annuler à tout moment depuis les paramètres de votre compte ou la plateforme de paiement (App Store, Google Play ou Stripe).</p>
        <h3 className={styles.h3}>5.3 Remboursement</h3>
        <p className={styles.p}>Conformément à l'article L221-28 du Code de la consommation, vous disposez d'un droit de rétractation de 14 jours à compter de la souscription, sauf si vous avez commencé à utiliser le service.</p>

        <h2 className={styles.h2}>6. Utilisation du service</h2>
        <h3 className={styles.h3}>6.1 Usage autorisé</h3>
        <p className={styles.p}>Canymo est destiné à un usage personnel et non commercial. Vous vous engagez à :</p>
        <ul className={styles.list}>
          <li>Utiliser l'application conformément à sa finalité</li>
          <li>Ne pas tenter de contourner les mesures de sécurité</li>
          <li>Ne pas reproduire ou redistribuer le contenu de l'application</li>
        </ul>
        <h3 className={styles.h3}>6.2 Programmes et conseils</h3>
        <p className={styles.p}>Les programmes et conseils sont personnalisés selon les informations fournies. Ils ne remplacent en aucun cas l'avis d'un vétérinaire professionnel.</p>

        <h2 className={styles.h2}>7. Limitation de responsabilité</h2>
        <h3 className={styles.h3}>7.1 Conseils de santé</h3>
        <p className={styles.p}>Canymo fournit des recommandations générales de bien-être canin. L'application ne se substitue pas à une consultation vétérinaire. En cas de problème de santé de votre animal, consultez un professionnel.</p>
        <h3 className={styles.h3}>7.2 Disponibilité du service</h3>
        <p className={styles.p}>Nous nous efforçons d'assurer une disponibilité continue du service mais ne pouvons garantir l'absence d'interruptions pour maintenance ou raisons techniques.</p>
        <h3 className={styles.h3}>7.3 Exactitude des informations</h3>
        <p className={styles.p}>Les conseils fournis sont basés sur les données que vous renseignez. Leur pertinence dépend de l'exactitude de ces informations.</p>

        <h2 className={styles.h2}>8. Propriété intellectuelle</h2>
        <p className={styles.p}>L'ensemble des éléments de l'application Canymo (textes, images, logos, programmes, algorithmes) sont protégés par le droit de la propriété intellectuelle et restent la propriété exclusive de Canymo.</p>
        <p className={styles.p}>Toute reproduction, représentation ou exploitation non autorisée est interdite.</p>

        <h2 className={styles.h2}>9. Protection des données personnelles</h2>
        <p className={styles.p}>La collecte et le traitement de vos données personnelles sont régis par notre Politique de Confidentialité, accessible à l'adresse : www.canymo.com/confidentialite</p>
        <p className={styles.p}>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.</p>

        <h2 className={styles.h2}>10. Modification des conditions</h2>
        <p className={styles.p}>Canymo se réserve le droit de modifier les présentes conditions à tout moment. Les utilisateurs seront informés par email ou notification dans l'application. La poursuite de l'utilisation après modification vaut acceptation des nouvelles conditions.</p>

        <h2 className={styles.h2}>11. Résiliation</h2>
        <h3 className={styles.h3}>11.1 Par l'utilisateur</h3>
        <p className={styles.p}>Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application ou en contactant contact@canymo.com.</p>
        <h3 className={styles.h3}>11.2 Par Canymo</h3>
        <p className={styles.p}>Nous nous réservons le droit de suspendre ou supprimer un compte en cas de violation des présentes conditions, sans préavis ni indemnité.</p>

        <h2 className={styles.h2}>12. Droit applicable et litiges</h2>
        <p className={styles.p}>Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux français seront compétents.</p>

        <h2 className={styles.h2}>13. Contact</h2>
        <p className={styles.p}>Pour toute question concernant ces conditions :</p>
        <ul className={styles.list}>
          <li>Email : contact@canymo.com</li>
        </ul>
      </div>
    </div>
  )
}
