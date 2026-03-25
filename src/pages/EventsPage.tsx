import { CalendarDays, Filter, MapPin, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CTABand } from '../components/sections/CTABand'
import { ContentBand } from '../components/sections/ContentBand'
import { PageHero } from '../components/sections/PageHero'
import { Lightbox } from '../components/ui/Lightbox'
import { MagicCard } from '../components/ui/MagicCard'
import { TiltCard } from '../components/ui/TiltCard'
import { cn } from '../lib/cn'

type EventType = 'All' | 'Workshop' | 'Youth-led' | 'Activity'

type EventCard = {
  title: string
  date: string
  time: string
  place: string
  type: Exclude<EventType, 'All'>
  tone: string
  summary: string
}

const EVENTS: EventCard[] = [
  {
    title: 'Wellbeing workshop · Emotional regulation',
    date: '12 Apr 2025',
    time: '16:00 – 18:00',
    place: 'Community hub · Birmingham',
    type: 'Workshop',
    tone: 'bg-brand-50 text-brand-700 ring-brand-100',
    summary: 'Practical tools to calm the body, name feelings, and recover after stress.',
  },
  {
    title: 'Youth voice · Co‑design evening',
    date: '26 Apr 2025',
    time: '17:30 – 19:30',
    place: 'Inspire Hub space',
    type: 'Youth-led',
    tone: 'bg-violet-50 text-violet-700 ring-violet-100',
    summary: 'Young people shape the next programme themes, activities, and community moments.',
  },
  {
    title: 'Multi‑sports taster · Team confidence',
    date: '4 May 2025',
    time: '11:00 – 13:00',
    place: 'Local pitch (TBC)',
    type: 'Activity',
    tone: 'bg-teal-50 text-teal-700 ring-teal-100',
    summary: 'Inclusive, fun movement with teamwork prompts and gentle confidence building.',
  },
  {
    title: 'Enrichment day · Creativity + movement',
    date: '18 May 2025',
    time: '10:30 – 15:00',
    place: 'Partner venue · West Midlands',
    type: 'Workshop',
    tone: 'bg-warm-50 text-warm-500 ring-warm-100',
    summary: 'A day format for schools/community: workshops, showcases, and youth-led reflection.',
  },
] as const

const FILTERS: EventType[] = ['All', 'Workshop', 'Youth-led', 'Activity']

export const EventsPage = () => {
  const [active, setActive] = useState<EventType>('All')
  const [openKey, setOpenKey] = useState<string | null>(null)

  const filtered = useMemo(() => {
    if (active === 'All') return EVENTS
    return EVENTS.filter((e) => e.type === active)
  }, [active])

  const openEvent = useMemo(() => {
    if (!openKey) return null
    return EVENTS.find((e) => `${e.title}-${e.date}` === openKey) ?? null
  }, [openKey])

  return (
    <>
      <PageHero
        backdrop="events"
        eyebrow="Events & workshops"
        title="Moments that feel safe, vibrant, and youth‑led"
        subtitle="Browse upcoming events by type. Booking is simple, safeguarding is clear, and accessibility is always part of the conversation."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/contact"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
          >
            Ask about booking
            <Sparkles className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            to="/programmes"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-surface-0 px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
          >
            Explore programmes
            <CalendarDays className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </PageHero>

      <ContentBand>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
              Filter
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
              Find the right kind of session
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
              Choose a type to see what’s coming up. The list updates instantly —
              no page reloads.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = f === active
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-label={`Filter events by ${f}`}
                  className={cn(
                    'inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'border-brand-200 bg-brand-50 text-brand-700'
                      : 'border-border bg-surface-0 text-ink hover:border-brand-200 hover:bg-brand-50',
                  )}
                >
                  <Filter className="h-4 w-4" aria-hidden />
                  {f}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {filtered.map((ev) => (
            <TiltCard
              key={`${ev.title}-${ev.date}`}
              className="group rounded-3xl"
            >
              <button
                type="button"
                aria-label={`Open event details: ${ev.title}`}
                onClick={() => setOpenKey(`${ev.title}-${ev.date}`)}
                className="block w-full cursor-pointer text-left"
              >
                <MagicCard className="rounded-3xl">
                  <article className="relative h-full overflow-hidden rounded-3xl border border-border bg-surface-1 p-6 shadow-card transition group-hover:-translate-y-1 group-hover:shadow-float sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${ev.tone}`}
                      >
                        {ev.type}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
                        {ev.date}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                      {ev.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {ev.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-ink-muted">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-brand-600" aria-hidden />
                        {ev.time}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-brand-600" aria-hidden />
                        {ev.place}
                      </span>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <span className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition group-hover:bg-brand-700">
                        View details
                      </span>
                      <span className="inline-flex items-center justify-center rounded-xl border border-border bg-surface-0 px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition group-hover:border-brand-200 group-hover:bg-brand-50">
                        Consent & info
                      </span>
                    </div>
                  </article>
                </MagicCard>
              </button>
            </TiltCard>
          ))}
        </div>
      </ContentBand>

      <Lightbox
        isOpen={openKey !== null}
        onClose={() => setOpenKey(null)}
        title={openEvent?.title ?? 'Event details'}
      >
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                {openEvent?.type ?? 'Event'}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                {openEvent?.title ?? 'Details'}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{openEvent?.summary}</p>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenKey(null)}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 px-3 py-2 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
            >
              Close
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-surface-1 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
                When
              </p>
              <p className="mt-2 text-sm font-semibold text-ink">{openEvent?.date}</p>
              <p className="mt-1 text-sm text-ink-muted">{openEvent?.time}</p>
            </div>
            <div className="rounded-3xl border border-border bg-surface-1 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
                Where
              </p>
              <p className="mt-2 text-sm font-semibold text-ink">{openEvent?.place}</p>
              <p className="mt-1 text-sm text-ink-muted">
                Accessibility details shared at booking.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              Register interest
            </Link>
            <Link
              to="/policies#consent"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
            >
              Consent & info
            </Link>
          </div>
        </div>
      </Lightbox>

      <ContentBand surface="1">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-surface-0 p-7 shadow-card lg:col-span-2">
            <h2 className="font-display text-xl font-semibold text-ink">
              What to expect
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Clear timings, welcome briefs, and a calm tone. We’ll share
              safeguarding and accessibility details at booking so young people
              know what’s happening before they arrive.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Inclusive facilitation',
                'Consent-led media',
                'Youth-friendly language',
                'Space to opt in/out',
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-surface-1 p-4 text-sm font-medium text-ink"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-linear-to-b from-warm-50 to-surface-0 p-7 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-500">
              Past events
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink">
              Highlights (with consent)
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              We capture stories responsibly — and only with informed consent.
              Ask us for recent highlights when you get in touch.
            </p>
          </div>
        </div>
      </ContentBand>

      <CTABand
        title="Host an Inspire Hub day"
        body="Partner with us for enrichment weeks, wellbeing days, or youth voice showcases."
        primary={{ label: 'Plan with us', to: '/contact' }}
      />
    </>
  )
}

