import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { MAIN_MENU, SITE } from '../../lib/site'
import { cn } from '../../lib/cn'

type MenuOverlayProps = {
  open: boolean
  onClose: () => void
}

const socials = [
  { label: 'Twitter', href: SITE.social.twitter },
  { label: 'Instagram', href: SITE.social.instagram },
  { label: 'Facebook', href: SITE.social.facebook },
  { label: 'YouTube', href: SITE.social.youtube },
  { label: 'LinkedIn', href: SITE.social.linkedin },
] as const

export const MenuOverlay = ({ open, onClose }: MenuOverlayProps) => (
  <AnimatePresence>
    {open ? (
      <>
        <motion.button
          type="button"
          className="fixed inset-0 z-90 cursor-pointer bg-charcoal/50 backdrop-blur-[2px]"
          aria-label="Close menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        />

        <motion.div
          id="site-menu-panel"
          className="fixed right-0 top-0 z-100 flex h-full w-full max-w-md flex-col bg-red px-8 py-8 text-charcoal shadow-2xl sm:max-w-lg sm:px-12 sm:py-10"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex items-center justify-between">
            <NavLink
              to="/contact"
              className="text-sm font-bold text-charcoal transition hover:text-white"
              onClick={onClose}
            >
              Contact us
            </NavLink>
            <button
              type="button"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-charcoal transition hover:text-white"
              aria-label="Close menu"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-10 flex flex-1 flex-col justify-center" aria-label="Primary">
            <ul className="space-y-2">
              {MAIN_MENU.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        'block py-1.5 font-display text-2xl font-extrabold tracking-tight transition sm:text-3xl',
                        isActive ? 'text-white' : 'text-charcoal hover:text-white',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className="mt-auto border-t border-charcoal/20 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <ul className="mb-4 flex flex-wrap gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-charcoal transition hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold">
              <a href={`mailto:${SITE.email}`} className="text-charcoal transition hover:text-white">
                {SITE.email}
              </a>
            </p>
            <p className="mt-1 text-sm font-semibold">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="text-charcoal transition hover:text-white"
              >
                {SITE.phone}
              </a>
            </p>
          </motion.div>
        </motion.div>
      </>
    ) : null}
  </AnimatePresence>
)
