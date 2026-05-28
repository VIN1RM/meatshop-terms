import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>🥩</div>
          <div>
            <div className={styles.brandName}>MeatShop</div>
            <div className={styles.brandSub}>Açougues Online</div>
          </div>
        </div>
        <div className={styles.divider} />
        <p className={styles.copy}>
          Versão 2.1.0 &nbsp;·&nbsp; Maio de 2026 &nbsp;·&nbsp; Todos os direitos reservados
        </p>
        <p className={styles.legal}>
          Foro da comarca de Anápolis — GO &nbsp;·&nbsp; Sujeito às leis brasileiras
        </p>
      </div>
    </footer>
  )
}
