import styles from './Section.module.css'

function SectionContent({ block }) {
  if (block.type === 'p') {
    if (block.html) {
      return (
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      )
    }
    return <p className={styles.text}>{block.text}</p>
  }

  if (block.type === 'highlight') {
    return (
      <div className={styles.highlight}>
        {block.label && (
          <span className={styles.highlightLabel}>{block.label}</span>
        )}
        <p className={styles.highlightText}>{block.text}</p>
      </div>
    )
  }

  if (block.type === 'list') {
    return (
      <ul className={styles.list}>
        {block.items.map((item, i) => (
          <li key={i} className={styles.listItem}>
            <span className={styles.listIcon}>→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'sub') {
    return (
      <div className={styles.subItems}>
        {block.items.map((item, i) => (
          <div key={i} className={styles.subItem}>
            <span className={styles.subLabel}>{item.label}</span>
            <p className={styles.subText}>{item.text}</p>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default function Section({ section, index }) {
  return (
    <section
      id={section.id}
      className={styles.section}
      style={{ animationDelay: `${Math.min(index * 0.05, 0.3)}s` }}
    >
      <div className={styles.sectionHead}>
        <div className={styles.numBadge}>
          <span className={styles.num}>{section.num}</span>
        </div>
        <h2 className={styles.sectionTitle}>{section.title}</h2>
      </div>

      <div className={styles.sectionBody}>
        {section.content.map((block, i) => (
          <SectionContent key={i} block={block} />
        ))}
      </div>
    </section>
  )
}
