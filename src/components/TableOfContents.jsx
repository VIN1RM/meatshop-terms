import styles from './TableOfContents.module.css'

export default function TableOfContents({ sections, activeSection }) {
  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const offset = 90
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav className={styles.toc}>
      <div className={styles.tocHeader}>
        <span className={styles.tocLabel}>Índice</span>
        <span className={styles.tocCount}>{sections.length} seções</span>
      </div>
      <ul className={styles.tocList}>
        {sections.map(section => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`${styles.tocLink} ${activeSection === section.id ? styles.active : ''}`}
            >
              <span className={styles.tocNum}>{section.num}</span>
              <span className={styles.tocTitle}>{section.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
