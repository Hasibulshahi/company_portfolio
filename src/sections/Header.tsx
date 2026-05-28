import { AnimatePresence, motion } from 'framer-motion'
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2'
import type { SectionId } from '../data/portfolio'

type HeaderProps = {
  activeSection: SectionId
  isScrolled: boolean
  isMobileOpen: boolean
  navigationItems: Array<{ id: SectionId; label: string }>
  onNavigate: (id: SectionId) => void
  onToggleMobileMenu: () => void
  onCloseMobileMenu: () => void
}

export function Header({
  activeSection,
  isScrolled,
  isMobileOpen,
  navigationItems,
  onNavigate,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-full border px-4 py-3 transition duration-300 sm:px-6 ${
          isScrolled
            ? 'border-line/70 bg-white/90 shadow-panel backdrop-blur-xl'
            : 'border-white/20 bg-white/10 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="flex items-center gap-3 text-left"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-bold uppercase tracking-[0.28em] text-white">
              MF
            </span>
            <span>
              <span className="block font-display text-xl text-ink">Meridian Forge</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate">
                Advisory Studio
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => {
              const isActive = item.id === activeSection

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? 'bg-brand text-white shadow-lg'
                      : 'text-ink hover:bg-brand/10 hover:text-brand'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/70 bg-white/70 text-ink lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <HiXMark className="text-2xl" /> : <HiBars3BottomRight className="text-2xl" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen ? (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 grid gap-2 border-t border-line/70 pt-4">
                {navigationItems.map((item) => {
                  const isActive = item.id === activeSection

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        onNavigate(item.id)
                        onCloseMobileMenu()
                      }}
                      className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition duration-300 ${
                        isActive
                          ? 'bg-brand text-white'
                          : 'bg-mist/60 text-ink hover:bg-brand/10 hover:text-brand'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
