import { useState, useEffect } from 'react'
import Header from './components/Header'
import TableOfContents from './components/TableOfContents'
import Section from './components/Section'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import MobileNav from './components/MobileNav'
import { SECTIONS, DOCUMENTS, SELECTED_DOCUMENT } from './data'
import styles from './App.module.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('s1')
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

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

  if (!SELECTED_DOCUMENT) return <main><h1>Documento não encontrado</h1><a href='/'>Consultar documentos vigentes</a></main>

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
          <aside className={styles.sidebar}>
            <div className={styles.sidebarSticky}>
              <TableOfContents
                sections={SECTIONS}
                activeSection={activeSection}
              />
            </div>
          </aside>
          <div className={styles.content}>
            <div className={styles.intro}>
              <nav aria-label="Documentos legais" className={styles.documentNav}>
                {DOCUMENTS.map(document => <a key={document.kind} aria-current={document.kind === SELECTED_DOCUMENT.kind ? 'page' : undefined} href={`?document=${document.kind}&version=${document.version}`}>{document.title}</a>)}
              </nav>
              <p className={styles.introText}>
                Consulte os documentos do MeatShop e as versões apresentadas nos fluxos de aceite. Contato provisório do criador: viniciusrodri0809@gmail.com.
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
