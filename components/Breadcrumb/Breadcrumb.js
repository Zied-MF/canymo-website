import Link from 'next/link'
import styles from './Breadcrumb.module.css'

export default function Breadcrumb({ items }) {
  return (
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
  )
}
