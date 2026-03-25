import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { Container } from '../ui/Container'

type CTABandProps = {
  title: string
  body: string
  primary: { label: string; to: string }
  secondary?: { label: string; to: string }
  className?: string
}

export const CTABand = ({
  title,
  body,
  primary,
  secondary,
  className,
}: CTABandProps) => (
  <section
    className={cn(
      'relative overflow-hidden border-y border-brand-100 bg-linear-to-r from-brand-600 via-brand-700 to-violet-600 text-white',
      className,
    )}
  >
    <div
      className="pointer-events-none absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(253, 186, 116, 0.4), transparent 40%)',
      }}
      aria-hidden
    />
    <Container className="relative py-14 lg:py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/90">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to={primary.to}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-soft transition hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-700"
          >
            {primary.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          {secondary ? (
            <Link
              to={secondary.to}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-700"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </Container>
  </section>
)
