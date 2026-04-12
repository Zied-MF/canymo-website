import { articles } from '@/data/articles/index'

const baseUrl = 'https://www.canymo.com'

const months = {
  janvier: '01', février: '02', mars: '03', avril: '04',
  mai: '05', juin: '06', juillet: '07', août: '08',
  septembre: '09', octobre: '10', novembre: '11', décembre: '12',
}

function parseArticleDate(frenchDate) {
  const parts = frenchDate.toLowerCase().split(' ')
  if (parts.length === 3) {
    const d = new Date(`${parts[2]}-${months[parts[1]] || '01'}-${parts[0].padStart(2, '0')}`)
    if (!isNaN(d.getTime())) return d
  }
  return new Date()
}

export default function sitemap() {
  const staticPages = [
    { url: baseUrl,                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: `${baseUrl}/comment-ca-marche`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tarifs`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`,                    lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${baseUrl}/faq`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const blogPages = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: parseArticleDate(article.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
