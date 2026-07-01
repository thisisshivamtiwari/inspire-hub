import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from '../ui/BrandLogo'
import { MAIN_NAV, type NavGroup } from '../../lib/site'
import { cn } from '../../lib/cn'

const isNavGroup = (item: (typeof MAIN_NAV)[number]): item is NavGroup =>
  'items' in item

const NavDropdown = ({ item }: { item: NavGroup }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="nav-item-group relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          'relative flex items-center gap-1 py-1.5 text-sm font-semibold text-white/90 transition-colors hover:text-white',
          open && 'text-white',
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[0.6rem] opacity-70"
        >
          ▾
        </motion.span>
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 bg-pink"
          initial={false}
          animate={{ width: open ? '100%' : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="nav-dropdown-open absolute left-0 top-[calc(100%+10px)] z-70 min-w-[248px] overflow-hidden rounded-xl border border-white/10 py-2 shadow-2xl"
            style={{ background: 'var(--charcoal)' }}
          >
            {item.items.map((sub, i) => (
              <motion.div
                key={sub.to}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <NavLink
                  to={sub.to}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-white/10 font-semibold text-white'
                        : 'text-[#e3e3e8] hover:bg-white/10 hover:text-white',
                    )
                  }
                >
                  {sub.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
        <Link to="/" className="group shrink-0" aria-label="Inspire Hub home">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring' }}>
            <BrandLogo tone="light" size="sm" />
          </motion.div>
        </Link>

        <nav className="nav-desktop hidden items-center gap-6 lg:flex" aria-label="Main">
          {MAIN_NAV.map((item) =>
            isNavGroup(item) ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative py-1.5 text-sm font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-pink after:transition-all after:duration-300 hover:text-white',
                    isActive
                      ? 'text-white after:w-full'
                      : 'text-white/90 after:w-0 hover:after:w-full',
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/support"
            className="hidden rounded-lg bg-pink px-4 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get involved
          </Link>
          <button
            type="button"
            className="nav-mobile-toggle flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className="accent-bar" aria-hidden />

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {MAIN_NAV.map((item) =>
                isNavGroup(item) ? (
                  <div key={item.label}>
                    <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-white/50">
                      {item.label}
                    </p>
                    {item.items.map((sub) => (
                      <NavLink
                        key={sub.to}
                        to={sub.to}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/10"
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
