import { useEffect, useState } from 'react'
import { Footer } from './sections/Footer'
import { AboutSection } from './sections/AboutSection'
import { ClientsSection } from './sections/ClientsSection'
import { ContactSection } from './sections/ContactSection'
import { EventsSection } from './sections/EventsSection'
import { FoundersSection } from './sections/FoundersSection'
import { Header } from './sections/Header'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { navigationItems, type SectionId } from './data/portfolio'

const sectionIds = navigationItems.map((item) => item.id)

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    // Keep the highlighted nav item aligned with the section most in view.
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id as SectionId)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  const navigateToSection = (id: SectionId) => {
    const section = document.getElementById(id)

    if (!section) {
      return
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMobileOpen(false)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-mesh text-ink">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(15,76,92,0.12),transparent_54%)]" />
      <Header
        activeSection={activeSection}
        isScrolled={isScrolled}
        isMobileOpen={isMobileOpen}
        navigationItems={navigationItems}
        onNavigate={navigateToSection}
        onToggleMobileMenu={() => setIsMobileOpen((current) => !current)}
        onCloseMobileMenu={() => setIsMobileOpen(false)}
      />
      <main className="relative z-10">
        <HeroSection onNavigate={navigateToSection} />
        <AboutSection />
        <ClientsSection />
        <FoundersSection />
        <EventsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer onNavigate={navigateToSection} />
    </div>
  )
}

export default App
