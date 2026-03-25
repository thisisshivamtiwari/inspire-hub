import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CalendarDays, HeartPulse, ShieldCheck, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { SITE } from '../../lib/site'
import { AnimatedList } from '../ui/AnimatedList'
import { BorderBeam } from '../ui/BorderBeam'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { MagicCard } from '../ui/MagicCard'
import { Marquee } from '../ui/Marquee'
import { cn } from '../../lib/cn'

export const HeroHome = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -18])
  const y2 = useTransform(scrollY, [0, 600], [0, 12])

  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null)
  const [mode, setMode] = useState<'Schools' | 'Community' | 'Youth'>('Schools')

  const feed = useMemo(() => {
    if (mode === 'Schools')
      return [
        'Wellbeing workshop · Emotional regulation',
        'PSHE‑aligned session · Confidence & voice',
        'Enrichment day · Creativity + movement',
      ]
    if (mode === 'Community')
      return [
        'Multi‑sports taster · Team confidence',
        'After‑school club · Belonging & routines',
        'Weekend session · Creative showcase',
      ]
    return [
      'Youth voice · Co‑design evening',
      'Gallery drop · Submit a piece (consent-led)',
      'Achievements wall · Small wins spotlight',
    ]
  }, [mode])

  const actions = useMemo(() => {
    if (mode === 'Schools')
      return {
        primary: { to: '/schools', label: 'For schools' },
        secondary: { to: '/programmes', label: 'Programme packs' },
      }
    if (mode === 'Community')
      return {
        primary: { to: '/events', label: 'See events' },
        secondary: { to: '/programmes', label: 'Community sessions' },
      }
    return {
      primary: { to: '/youth-zone', label: 'Open youth zone' },
      secondary: { to: '/support', label: 'Support youth voice' },
    }
  }, [mode])

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-surface-1"
      onPointerMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setSpot({ x, y })
      }}
      onPointerLeave={() => setSpot(null)}
      style={
        {
          ['--sx' as never]: `${spot?.x ?? 50}%`,
          ['--sy' as never]: `${spot?.y ?? 20}%`,
        } as React.CSSProperties
      }
    >
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 55% at 50% -20%, rgba(37, 99, 235, 0.18), transparent),
          radial-gradient(ellipse 50% 40% at 100% 0%, rgba(139, 92, 246, 0.12), transparent),
          radial-gradient(ellipse 45% 35% at 0% 100%, rgba(20, 184, 166, 0.14), transparent),
          radial-gradient(ellipse 60% 50% at 80% 100%, rgba(249, 115, 22, 0.08), transparent)
        `,
      }}
    />
    <div
      className="pointer-events-none absolute left-1/2 top-24 h-[480px] w-[min(100%,880px)] -translate-x-1/2 rounded-[100%] bg-linear-to-b from-brand-100/50 to-transparent blur-2xl"
      aria-hidden
    />

    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200',
        spot ? 'opacity-100' : 'opacity-0',
      )}
      style={{
        background:
          'radial-gradient(700px circle at var(--sx,50%) var(--sy,20%), rgba(37,99,235,0.12), transparent 40%), radial-gradient(520px circle at var(--sx,50%) var(--sy,20%), rgba(20,184,166,0.10), transparent 48%)',
      }}
    />

    <Container className="relative pb-14 pt-10 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-surface-0/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-soft backdrop-blur"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            </span>
            CIC · Community-first
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Spaces where young people{' '}
            <span className="bg-linear-to-r from-brand-600 via-violet-600 to-teal-500 bg-clip-text text-transparent">
              thrive
            </span>
            — together.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {SITE.name} creates safe, vibrant, and inclusive spaces where young
            people from disadvantaged communities can grow, express themselves,
            and discover their potential.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <ButtonLink to="/programmes" variant="primary">
              Explore programmes
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline">
              Talk to our team
            </ButtonLink>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <Marquee
              pauseOnHover
              className="rounded-3xl border border-border bg-surface-0 shadow-soft [--duration:26s]"
            >
              {[
                'Youth voice',
                'Safe spaces',
                'Workshops',
                'Sport & wellbeing',
                'Creative enrichment',
                'Mentoring',
                'Belonging',
                'Confidence',
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-border bg-surface-1 px-4 py-2 text-xs font-semibold tracking-tight text-ink-muted shadow-soft"
                >
                  {t}
                </span>
              ))}
            </Marquee>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {(['Schools', 'Community', 'Youth'] as const).map((m) => {
              const isActive = m === mode
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  aria-label={`Set hero mode to ${m}`}
                  className={cn(
                    'inline-flex cursor-pointer items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0',
                    isActive
                      ? 'border-brand-200 bg-brand-50 text-brand-700'
                      : 'border-border bg-surface-0 text-ink hover:border-brand-200 hover:bg-brand-50/60',
                  )}
                >
                  {m}
                </button>
              )
            })}
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-ink-subtle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            Serving {SITE.area} · {SITE.tagline}
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-full lg:max-w-none"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-full lg:ml-auto lg:max-w-[520px]">
            <motion.div
              aria-hidden
              style={{ y: y1 }}
              className="pointer-events-none absolute -left-10 -top-10 hidden h-24 w-24 rounded-full bg-coral-400/22 blur-2xl sm:block"
            />
            <motion.div
              aria-hidden
              style={{ y: y2 }}
              className="pointer-events-none absolute -bottom-8 -right-6 hidden h-28 w-28 rounded-3xl bg-linear-to-br from-teal-400/30 to-brand-500/20 blur-xl sm:block"
            />

            <div className="grid w-full gap-5">
              <MagicCard className="rounded-3xl">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-0 shadow-float ring-1 ring-border">
                  <BorderBeam
                    borderWidth={1}
                    size={76}
                    durationSeconds={7.4}
                    colorFrom="#2563eb"
                    colorTo="#f97316"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-br from-brand-100/90 via-surface-0 to-warm-50/80"
                    aria-hidden
                  />
                  <div className="relative flex flex-col items-center justify-center p-6 text-center sm:p-8">
                    <img
                      src="/logo.png"
                      alt="Inspire Hub logo"
                      width={200}
                      height={200}
                      className="h-40 w-40 object-contain drop-shadow-md sm:h-52 sm:w-52"
                    />
                    <p className="mt-6 font-display text-xs font-bold uppercase tracking-[0.25em] text-ink-subtle">
                      {SITE.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                      Education · Enrichment · Movement · Mental wellbeing
                    </p>
                  </div>
                </div>
              </MagicCard>

              <div className="grid gap-4 md:grid-cols-2">
                <MagicCard className="rounded-3xl">
                  <div className="rounded-3xl border border-border bg-surface-0 p-6 shadow-card">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                          Next up
                        </p>
                        <p className="mt-2 font-display text-lg font-semibold text-ink">
                          {mode === 'Schools'
                            ? 'School delivery'
                            : mode === 'Community'
                              ? 'Community sessions'
                              : 'Youth zone'}
                        </p>
                      </div>
                      <CalendarDays className="h-6 w-6 text-brand-600" aria-hidden />
                    </div>
                    <AnimatedList className="mt-5 items-stretch" delayMs={780}>
                      {feed.map((t) => (
                        <div
                          key={t}
                          className="rounded-2xl border border-border bg-surface-1 p-4 text-sm text-ink"
                        >
                          {t}
                        </div>
                      ))}
                    </AnimatedList>
                  </div>
                </MagicCard>

                <MagicCard className="rounded-3xl">
                  <div className="rounded-3xl border border-border bg-surface-0 p-6 shadow-card">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                          Support
                        </p>
                        <p className="mt-2 font-display text-lg font-semibold text-ink">
                          Start in 2 clicks
                        </p>
                      </div>
                      <Sparkles className="h-6 w-6 text-warm-500" aria-hidden />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {mode === 'Schools'
                        ? 'Book a discovery call and we’ll map your PSHE priorities + safeguarding approach.'
                        : mode === 'Community'
                          ? 'See upcoming sessions and register interest — accessibility and timings shared upfront.'
                          : 'Submit a piece or idea safely. Consent-led sharing is built into the process.'}
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                      <ButtonLink to={actions.primary.to} variant="primary" className="justify-center">
                        {actions.primary.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </ButtonLink>
                      <ButtonLink to={actions.secondary.to} variant="ghost" className="justify-center">
                        {actions.secondary.label}
                        {mode === 'Schools' ? (
                          <Sparkles className="h-4 w-4" aria-hidden />
                        ) : mode === 'Community' ? (
                          <CalendarDays className="h-4 w-4" aria-hidden />
                        ) : (
                          <HeartPulse className="h-4 w-4" aria-hidden />
                        )}
                      </ButtonLink>
                    </div>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
  )
}
