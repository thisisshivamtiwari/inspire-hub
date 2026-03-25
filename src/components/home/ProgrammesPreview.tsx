import { Activity, GraduationCap, HeartPulse, Users2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MotionReveal } from '../ui/MotionReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../ui/Container'
import { BorderBeam } from '../ui/BorderBeam'
import { MagicCard } from '../ui/MagicCard'

const CARDS = [
  {
    title: 'School programmes',
    body: 'PSHE‑aligned workshops, wellbeing assemblies, and enrichment tailored to your setting.',
    icon: GraduationCap,
    to: '/programmes',
    accent: 'ring-teal-200/80 bg-teal-50 text-teal-700',
  },
  {
    title: 'Community programmes',
    body: 'After‑school clubs, weekend sessions, and events that bring young people together.',
    icon: Users2,
    to: '/programmes',
    accent: 'ring-brand-200/80 bg-brand-50 text-brand-700',
  },
  {
    title: 'Mental health support',
    body: 'Early‑intervention, youth‑led sessions that build emotional literacy and resilience.',
    icon: HeartPulse,
    to: '/mental-health',
    accent: 'ring-violet-200/80 bg-violet-50 text-violet-700',
  },
  {
    title: 'Physical health & activity',
    body: 'Inclusive sport and wellbeing‑focused movement for confidence and healthy habits.',
    icon: Activity,
    to: '/physical-health',
    accent: 'ring-warm-200/80 bg-warm-50 text-warm-500',
  },
] as const

export const ProgrammesPreview = () => (
  <section className="border-b border-border bg-surface-1 py-16 sm:py-20 lg:py-24">
    <Container>
      <MotionReveal>
        <SectionHeading
          eyebrow="Programmes & services"
          title="Designed with schools, families, and neighbourhoods"
          description="From classrooms to community centres, we co‑design inclusive experiences that meet young people where they are."
        />
      </MotionReveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {CARDS.map((card, index) => (
          <MotionReveal key={card.title} delay={index * 0.05}>
            <MagicCard className="rounded-3xl">
              <Link
                to={card.to}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-0 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-float focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 sm:p-8"
              >
                <BorderBeam
                  borderWidth={1}
                  size={56}
                  durationSeconds={6.4}
                  delaySeconds={index * 0.5}
                  colorFrom="#2563eb"
                  colorTo="#14b8a6"
                />
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${card.accent}`}
                >
                  <card.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {card.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Learn more
                  <span
                    className="transition group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-300/60 to-transparent opacity-0 transition group-hover:opacity-100"
                />
              </Link>
            </MagicCard>
          </MotionReveal>
        ))}
      </div>
    </Container>
  </section>
)
