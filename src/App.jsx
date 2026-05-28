import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import TableOfContents from './components/TableOfContents'
import Section from './components/Section'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import MobileNav from './components/MobileNav'
import { SECTIONS } from './data'
import styles from './App.module.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('s1')
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sectionRefs = useRef({})

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      // Find active section
      const sectionIds = SECTIONS.map(s => s.id)
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.app}>
      <Header scrolled={scrolled} onMenuClick={() => setShowMobileNav(true)} />

      {showMobileNav && (
        <MobileNav
          sections={SECTIONS}
          activeSection={activeSection}
          onClose={() => setShowMobileNav(false)}
        />
      )}

      <main className={styles.main}>
        <div className={styles.layout}>
          {/* Sidebar TOC — visible on large screens */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarSticky}>
              <TableOfContents
                sections={SECTIONS}
                activeSection={activeSection}
              />
            </div>
          </aside>

          {/* Content */}
          <div className={styles.content}>
            <div className={styles.intro}>
              <p className={styles.introText}>
                Bem-vindo aos Termos de Uso do MeatShop. Leia com atenção antes de utilizar nossa plataforma. Em caso de dúvidas, acesse o suporte pelo aplicativo.
              </p>
            </div>

            {SECTIONS.map((section, index) => (
              <Section key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop visible={scrolled} />
    </div>
  )
}
