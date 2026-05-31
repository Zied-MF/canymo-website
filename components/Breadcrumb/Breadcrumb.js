import Link from 'next/link'
import styles from './Breadcrumb.module.css'

const BASE_URL = 'https://www.canymo.com'

export default function Breadcrumb({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.href === '/' ? 'Canymo' : item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Fil d'ariane" className={styles.breadcrumb}>
        <ol className={styles.list}>
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={i} className={styles.item}>
                {isLast ? (
                  <span aria-current="page" className={styles.current}>{item.label}</span>
                ) : (
                  <>
                    <Link href={item.href} className={styles.link}>{item.label}</Link>
                    <span className={styles.sep} aria-hidden="true">›</span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
