import { ChevronDown, Menu, Sparkles, X } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HEADER_MAIN_NAV, HEADER_MORE_NAV, SITE } from '../../lib/site'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { ScrollProgress } from '../ui/ScrollProgress'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'rounded-lg px-2 py-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-brand-700',
    isActive && 'bg-brand-50 text-brand-700',
  )

export const SiteHeader = () => {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface-0/85 backdrop-blur-md">
      <div className="relative">
      <Container className="flex items-center justify-between gap-4 py-3 lg:py-4">
        <NavLink
          to="/"
          className="group flex shrink-0 items-center gap-3 text-left"
          aria-label={`${SITE.name} home`}
        >
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-surface-1 shadow-card ring-1 ring-border transition group-hover:shadow-float">
            <img
              src="/logo.png"
              alt=""
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
            />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate font-display text-sm font-bold uppercase tracking-wide text-ink">
              {SITE.name}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-ink-subtle">
              {SITE.tagline}
            </span>
          </span>
        </NavLink>

        <nav
          className="hidden items-center gap-1 lg:flex lg:flex-wrap lg:justify-end"
          aria-label="Primary"
        >
          {HEADER_MAIN_NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}

          <details className="group relative">
            <summary
              className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-medium text-ink-muted marker:hidden hover:text-brand-700 [&::-webkit-details-marker]:hidden"
              aria-label="More pages"
            >
              More
              <ChevronDown
                className="h-4 w-4 transition group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <div
              className="absolute right-0 z-50 mt-2 min-w-[220px] rounded-2xl border border-border bg-surface-0 p-2 shadow-float"
              role="menu"
            >
              {HEADER_MORE_NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-ink-muted hover:bg-brand-50 hover:text-brand-700"
                  role="menuitem"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </details>

          <ButtonLink
            to="/support"
            variant="secondary"
            className="ml-2 px-4! py-2! text-xs shadow-none"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Support us
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ButtonLink
            to="/support"
            variant="secondary"
            className="px-3! py-2! text-xs"
          >
            Donate
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>
      <ScrollProgress />
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-border bg-surface-0 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <Container className="flex max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto py-4">
            {[...HEADER_MAIN_NAV, ...HEADER_MORE_NAV].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-3 py-3 text-base font-medium',
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink hover:bg-surface-2',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  )
}
