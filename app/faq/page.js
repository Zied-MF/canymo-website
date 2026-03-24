import StructuredData from '@/components/StructuredData/StructuredData'
import FAQClient from './FAQClient'

const faqs = [
  {
    q: 'Canymo est-il vraiment gratuit pour commencer ?',
    a: 'Oui, à 100%. Le plan Free te donne accès à un profil complet pour ton chien et un plan de base sur 7 jours. Aucune carte bancaire requise pour démarrer. Tu passes au Pro si et seulement si tu en veux plus.',
  },
  {
    q: 'Est-ce que Canymo remplace mon vétérinaire ?',
    a: 'Non, et ce n\'est pas notre objectif. Canymo est un outil du quotidien pour t\'aider à appliquer de bonnes habitudes. Si ton chien a des problèmes de santé, consulte toujours ton vétérinaire. On est complémentaires, pas concurrents.',
  },
  {
    q: 'Comment Canymo personnalise-t-il le plan ?',
    a: 'Notre moteur analyse la race, l\'âge, le poids, le niveau d\'activité, les éventuelles pathologies et l\'objectif (maintien, perte de poids, etc.). Il croise ces données avec notre base de 200+ races pour générer un programme adapté. Le plan s\'ajuste automatiquement selon les résultats hebdomadaires.',
  },
  {
    q: 'Combien de chiens puis-je enregistrer ?',
    a: 'En Free : 1 chien. En Pro mensuel : jusqu\'à 3 chiens. En Pro Annuel : chiens illimités. Chaque chien a son propre profil, son propre plan et son propre suivi.',
  },
  {
    q: 'Puis-je annuler mon abonnement à tout moment ?',
    a: 'Absolument. Pas de période d\'engagement minimale. Tu annules depuis l\'app ou l\'App Store / Google Play, et l\'abonnement s\'arrête à la fin de la période en cours. On ne te fait pas la misère.',
  },
  {
    q: 'Les données de mon chien sont-elles sécurisées ?',
    a: 'Tes données sont stockées sur des serveurs sécurisés en Europe (RGPD compliant). On ne revend jamais tes données à des tiers. Ton chien n\'est pas un produit.',
  },
  {
    q: 'Que se passe-t-il si mon chien est malade ou blessé ?',
    a: 'Tu peux mettre le plan en pause depuis l\'app. Canymo te propose également un mode "récupération" avec des recommandations allégées pour les périodes de convalescence. Et bien sûr, consulte ton véto.',
  },
  {
    q: 'L\'app fonctionne sur Android et iOS ?',
    a: 'Oui, Canymo est disponible sur l\'App Store (iOS 14+) et le Google Play Store (Android 8+). Les deux versions sont identiques en termes de fonctionnalités.',
  },
]

export const metadata = {
  title: 'FAQ — Canymo',
  description: 'Toutes les réponses à vos questions sur Canymo, l\'app de santé et bien-être pour chiens.',
}

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <StructuredData data={faqSchema} />
      <FAQClient faqs={faqs} />
    </>
  )
}
