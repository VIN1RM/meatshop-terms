import styles from './Header.module.css'

export default function Header({ scrolled, onMenuClick }) {
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="top">
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <div className={styles.brandIcon}>🥩</div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>MeatShop</span>
            <span className={styles.brandSub}>Açougues Online</span>
          </div>
        </a>

        <div className={styles.center}>
          <span className={styles.badge}>Documento Legal</span>
          <h1 className={styles.title}>Termos de Uso</h1>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <span className={styles.metaLabel}>Versão</span> 2.1.0
            </span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.metaItem}>
              <span className={styles.metaLabel}>Atualizado em</span> 27 de maio de 2026
            </span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.metaItem}>
              <span className={styles.metaLabel}>Plataforma</span> Android &amp; iOS
            </span>
          </div>
        </div>

        <button
          className={styles.menuBtn}
          onClick={onMenuClick}
          aria-label="Abrir navegação"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
