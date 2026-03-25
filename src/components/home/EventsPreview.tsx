import { Calendar, Clock, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MotionReveal } from '../ui/MotionReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../ui/Container'
import { BorderBeam } from '../ui/BorderBeam'
import { MagicCard } from '../ui/MagicCard'

const EVENTS = [
  {
    title: 'Wellbeing workshop · Emotional regulation',
    date: '12 Apr 2025',
    time: '16:00 – 18:00',
    place: 'Community hub · Birmingham',
    tag: 'Workshop',
    tone: 'bg-brand-50 text-brand-700 ring-brand-100',
  },
  {
    title: 'Youth voice · Co‑design evening',
    date: '26 Apr 2025',
    time: '17:30 – 19:30',
    place: 'Inspire Hub space',
    tag: 'Youth-led',
    tone: 'bg-violet-50 text-violet-700 ring-violet-100',
  },
  {
    title: 'Multi‑sports taster · Team confidence',
    date: '4 May 2025',
    time: '11:00 – 13:00',
    place: 'Local pitch (TBC)',
    tag: 'Activity',
    tone: 'bg-teal-50 text-teal-700 ring-teal-100',
  },
] as const

export const EventsPreview = () => (
  <section className="border-b border-border bg-surface-0 py-16 sm:py-20">
    <Container>
      <MotionReveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              align="left"
              eyebrow="Events & workshops"
              title="What’s coming up"
              description="Enrichment days, wellbeing sessions, and youth‑led moments — book early where spaces are limited."
            />
          </div>
          <Link
            to="/events"
            className="inline-flex shrink-0 cursor-pointer items-center justify-center self-start rounded-xl border border-border bg-surface-1 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand-200 hover:bg-brand-50 sm:self-auto"
          >
            Full calendar
          </Link>
        </div>
      </MotionReveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {EVENTS.map((ev, i) => (
          <MotionReveal key={ev.title} delay={i * 0.06}>
            <MagicCard className="rounded-3xl">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-1 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-float">
                <BorderBeam
                  borderWidth={1}
                  size={52}
                  durationSeconds={6.5}
                  delaySeconds={i * 0.7}
                  colorFrom="#f97316"
                  colorTo="#2563eb"
                />
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ${ev.tone}`}
                >
                  {ev.tag}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {ev.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brand-600" aria-hidden />
                    {ev.date}
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-600" aria-hidden />
                    {ev.time}
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-600" aria-hidden />
                    {ev.place}
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="/events"
                    className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    View details →
                  </Link>
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-300/60 to-transparent opacity-0 transition group-hover:opacity-100"
                />
              </article>
            </MagicCard>
          </MotionReveal>
        ))}
      </div>
    </Container>
  </section>
)
