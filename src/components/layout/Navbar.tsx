import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '../../utils/constants'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { cn } from '../../utils/cn'
import { applyTheme, getInitialTheme, type Theme } from '../../theme'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())
  const [activeSection, setActiveSection] = useState('home')

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (location.pathname !== '/') return

    const sectionIds = ['home', 'features', 'how-it-works', 'integrations', 'pricing']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const handleSectionScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('home')
        return
      }

      const scrollPosition = window.scrollY + 140
      let current = 'home'

      for (const section of sections) {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          current = section.id
        }
      }

      setActiveSection(current)
    }

    handleSectionScroll()
    window.addEventListener('scroll', handleSectionScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleSectionScroll)
  }, [location.pathname])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { label: string; href: string; sectionId?: string }
  ) => {
    if (!item.sectionId) return

    e.preventDefault()

    if (item.sectionId === 'home') {
      setActiveSection('home')

      if (location.pathname !== '/') {
        navigate('/')

        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 100)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      return
    }

    if (location.pathname !== '/') {
      navigate('/')

      setTimeout(() => {
        const target = document.getElementById(item.sectionId!)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      const target = document.getElementById(item.sectionId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const isItemActive = (item: { href: string; sectionId?: string }) => {
    if (location.pathname === '/' && item.sectionId) {
      return activeSection === item.sectionId
    }
    return location.pathname === item.href
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-dark-800/50 shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                <Icon name="mic" size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Sales<span className="text-primary-400">Agent</span>
                <span className="text-accent-400">.ai</span>
              </span>
            </NavLink>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cn(
                    'px-4 py-2 text-sm rounded-lg transition-all duration-200',
                    isItemActive(item)
                      ? 'text-primary-500 font-semibold'
                      : 'text-slate-600 dark:text-dark-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-800/50'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>

              <NavLink to="/demo">
                <Button variant="primary" size="sm">
                  Get a Demo
                  <Icon name="arrow-right" size={16} />
                </Button>
              </NavLink>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-slate-200 dark:border-dark-700/60 bg-white/60 dark:bg-dark-900/40 hover:bg-slate-100 dark:hover:bg-dark-800/50 transition"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-dark-300 hover:bg-slate-100 dark:hover:bg-dark-800/50"
            >
              <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-dark-900 p-6 pt-20"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item)
                      setIsMobileMenuOpen(false)
                    }}
                    className={cn(
                      'px-4 py-3 rounded-xl text-lg transition',
                      isItemActive(item)
                        ? 'text-primary-500 font-semibold'
                        : 'text-slate-700 dark:text-dark-200 hover:bg-slate-100 dark:hover:bg-dark-800/50'
                    )}
                  >
                    {item.label}
                  </a>
                ))}

                <hr className="my-4" />

                <Button variant="ghost" size="md">
                  Sign In
                </Button>

                <NavLink to="/demo" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="md">
                    Get a Demo
                  </Button>
                </NavLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}