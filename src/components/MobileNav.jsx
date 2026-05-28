import { useEffect } from 'react'
import styles from './MobileNav.module.css'

export default function MobileNav({ sections, activeSection, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    onClose()
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        const offset = 80
        const y = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <nav className={styles.drawer}>
        <div className={styles.drawerHead}>
          <span className={styles.drawerLabel}>Índice</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar">
            ✕
          </button>
        </div>
        <ul className={styles.list}>
          {sections.map(s => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleClick(e, s.id)}
                className={`${styles.link} ${activeSection === s.id ? styles.active : ''}`}
              >
                <span className={styles.num}>{s.num}</span>
                <span className={styles.title}>{s.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
