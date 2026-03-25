import { CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MotionReveal } from '../ui/MotionReveal'
import { Container } from '../ui/Container'
import { BorderBeam } from '../ui/BorderBeam'
import { MagicCard } from '../ui/MagicCard'

export const FeaturedHighlight = () => (
  <section className="border-b border-border bg-surface-0 py-16 sm:py-20">
    <Container>
      <MotionReveal>
        <MagicCard className="rounded-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-linear-to-br from-brand-50 via-surface-0 to-warm-50/60 p-8 shadow-glow sm:p-10 lg:p-12">
            <BorderBeam
              borderWidth={1}
              size={72}
              durationSeconds={7.2}
              colorFrom="#f97316"
              colorTo="#8b5cf6"
            />
            <div
              className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-linear-to-br from-brand-400/20 to-transparent blur-3xl"
              aria-hidden
            />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-surface-0/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-soft ring-1 ring-brand-100">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                  Featured highlight
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Inspire Hub Enrichment Week
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
                  A celebration of creativity, movement, and youth voice — workshops,
                  showcases, and community moments designed to feel joyful and safe.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  to="/events"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
                >
                  View events calendar
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
                >
                  Plan a visit
                </Link>
              </div>
            </div>
          </div>
        </MagicCard>
      </MotionReveal>
    </Container>
  </section>
)
