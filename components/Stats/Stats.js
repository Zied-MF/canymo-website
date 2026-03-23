'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

function useCountUp(target, decimals = 0, isVisible) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let startTime = null
    const duration = 2200
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isVisible, target, decimals])
  return val
}

function StatItem({ prefix, value, suffix, label, decimals = 0, delay }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const count = useCountUp(value, decimals, visible)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const display = decimals > 0 ? count.toFixed(decimals).replace('.', ',') : Math.floor(count)

  return (
    <div
      ref={ref}
      className={`${styles.item} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.number}>
        {prefix}{display}{suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <StatItem
          value={59}
          suffix="%"
          label="des chiens en France sont en surpoids"
          delay={0}
        />
        <div className={styles.divider} />
        <StatItem
          value={200}
          suffix="+"
          label="races canines reconnues et supportées"
          delay={150}
        />
        <div className={styles.divider} />
        <StatItem
          value={2.5}
          decimals={1}
          suffix=" ans"
          label="de vie gagnés grâce à un suivi adapté"
          delay={300}
        />
      </div>
    </section>
  )
}
