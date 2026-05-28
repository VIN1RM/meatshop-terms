import styles from './BackToTop.module.css'

export default function BackToTop({ visible }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      onClick={handleClick}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  )
}
