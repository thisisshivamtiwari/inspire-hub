import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MotionReveal } from '../ui/MotionReveal'
import { Container } from '../ui/Container'
import { MagicCard } from '../ui/MagicCard'

const LINKS = [
  { label: 'Programmes', to: '/programmes', hint: 'School & community offers' },
  { label: 'Youth zone', to: '/youth-zone', hint: 'Gallery, blog & wins' },
  { label: 'Safeguarding', to: '/policies', hint: 'How we keep people safe' },
  { label: 'Contact', to: '/contact', hint: 'We reply within 2 working days' },
] as const

export const QuickLinks = () => (
  <section className="border-b border-border bg-surface-0 py-10">
    <Container>
      <MotionReveal>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
          Quick links
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((item) => (
            <MagicCard key={item.to} className="rounded-2xl">
              <Link
                to={item.to}
                className="group relative flex flex-col rounded-2xl border border-border bg-surface-1 p-4 text-left shadow-soft transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-surface-0 hover:shadow-card"
              >
                <span className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-ink">{item.label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-ink-subtle transition group-hover:text-brand-600"
                    aria-hidden
                  />
                </span>
                <span className="mt-1 text-sm text-ink-muted">{item.hint}</span>
                <span
                  className="absolute inset-x-4 bottom-0 h-px scale-x-0 bg-linear-to-r from-brand-400/0 via-brand-500/60 to-teal-400/0 transition group-hover:scale-x-100"
                  aria-hidden
                />
              </Link>
            </MagicCard>
          ))}
        </div>
      </MotionReveal>
    </Container>
  </section>
)
