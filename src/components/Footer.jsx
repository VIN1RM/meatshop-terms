import styles from './Footer.module.css'
import { DOCUMENT_META } from '../data'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <img className={styles.brandLogo} src='/meatshop-logo.png' alt='' />
          </div>
          <div>
            <div className={styles.brandName}>MeatShop</div>
            <div className={styles.brandSub}>Açougues Online</div>
          </div>
        </div>
        <div className={styles.divider} />
        <p className={styles.copy}>
          Versão {DOCUMENT_META.version} &nbsp;·&nbsp; Outubro de 2026 &nbsp;·&nbsp; Todos os direitos reservados
        </p>
        <p className={styles.legal}>
          Sujeito às leis brasileiras &nbsp;·&nbsp; Direitos do consumidor preservados
        </p>
      </div>
    </footer>
  )
}
