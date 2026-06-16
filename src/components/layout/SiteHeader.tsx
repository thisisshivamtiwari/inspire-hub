import { ChevronDown, Menu, Search } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SITE } from '../../lib/site'
import { cn } from '../../lib/cn'
import { BrandLogo } from '../ui/BrandLogo'
import { ScrollProgress } from '../ui/ScrollProgress'
import { MenuOverlay } from './MenuOverlay'

export const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchId = useId()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 bg-charcoal text-white">
        <div className="relative">
        <div className="sb-container flex items-center justify-between gap-4 py-4">
          <NavLink to="/" className="group shrink-0" aria-label={`${SITE.name} home`}>
            <BrandLogo size="sm" tone="light" className="transition-opacity group-hover:opacity-90" />
          </NavLink>

          <div className="flex items-center gap-2">
            <form
              action="/"
              method="get"
              className={cn(
                'flex items-center overflow-hidden transition-all duration-300',
                searchOpen ? 'w-48 sm:w-64' : 'w-0',
              )}
              role="search"
            >
              <label htmlFor={searchId} className="sr-only">
                Search the site
              </label>
              <input
                id={searchId}
                name="q"
                type="search"
                placeholder="Search…"
                className="w-full border-b-2 border-white/30 bg-transparent py-2 text-sm text-white placeholder:text-white/50 focus:border-sky focus:outline-none"
              />
            </form>

            <button
              type="button"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-white transition hover:text-sky"
              aria-expanded={searchOpen}
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-white transition hover:text-sky"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        <ScrollProgress />
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export const ScrollDiscover = ({ accent = 'sky' }: { accent?: 'sky' | 'red' | 'yellow' | 'charcoal' }) => {
  const bg =
    accent === 'red'
      ? 'bg-red'
      : accent === 'yellow'
        ? 'bg-yellow'
        : accent === 'charcoal'
          ? 'bg-charcoal text-white'
          : 'bg-sky'

  return (
    <a
      href="#main-content"
      className={cn(
        'group absolute bottom-0 right-0 z-10 flex flex-col items-center gap-1 px-6 py-4 text-charcoal',
        bg,
      )}
      style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
    >
      <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
      <span className="text-xs font-bold uppercase tracking-wider">Discover</span>
    </a>
  )
}
