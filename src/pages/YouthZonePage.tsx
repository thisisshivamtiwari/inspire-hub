import { Award, ImageIcon, PenLine, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/sections/PageHero'
import { ContentBand } from '../components/sections/ContentBand'
import { CTABand } from '../components/sections/CTABand'
import { Lightbox } from '../components/ui/Lightbox'
import { MagicCard } from '../components/ui/MagicCard'
import { TiltCard } from '../components/ui/TiltCard'
import { cn } from '../lib/cn'

const ZONES = [
  {
    title: 'Creative gallery',
    body: 'Youth artwork, photography, and creative projects — curated with pride and consent.',
    icon: ImageIcon,
  },
  {
    title: 'Youth blog',
    body: 'A platform for young people to share voice, ideas, and stories on their own terms.',
    icon: PenLine,
  },
  {
    title: 'Achievements wall',
    body: 'Celebrating milestones, awards, and personal growth — big and small.',
    icon: Award,
  },
] as const

type GalleryFilter = 'All' | 'Artwork' | 'Photography' | 'Writing'

const GALLERY: Array<{ title: string; type: Exclude<GalleryFilter, 'All'>; tone: string }> = [
  { title: 'Colour & identity', type: 'Artwork', tone: 'from-coral-400/25 to-transparent' },
  { title: 'My street, my story', type: 'Photography', tone: 'from-brand-500/20 to-transparent' },
  { title: 'Poem: small wins', type: 'Writing', tone: 'from-violet-500/20 to-transparent' },
  { title: 'Community collage', type: 'Artwork', tone: 'from-teal-500/20 to-transparent' },
  { title: 'Photo: movement day', type: 'Photography', tone: 'from-warm-500/18 to-transparent' },
] as const

const FILTERS: GalleryFilter[] = ['All', 'Artwork', 'Photography', 'Writing']

export const YouthZonePage = () => {
  const [active, setActive] = useState<GalleryFilter>('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    if (active === 'All') return GALLERY
    return GALLERY.filter((g) => g.type === active)
  }, [active])

  const selected = openIndex === null ? null : filtered[openIndex] ?? null

  return (
    <>
      <PageHero
        backdrop="youth"
        eyebrow="Youth zone"
        title="Showcase. Speak. Celebrate."
        subtitle="A brighter corner of the site for creativity, voice, and wins — co‑created with young people."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/contact"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
          >
            Submit a piece
            <Sparkles className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            to="/support"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
          >
            Support youth voice
          </Link>
        </div>
      </PageHero>

      <ContentBand>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
              What’s inside
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
              A space with personality
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Creative gallery, youth blog, and an achievements wall — curated with
              pride and consent. This page is designed to feel brighter and more
              playful than the rest of the site.
            </p>
            <div className="mt-8 grid gap-4">
              {ZONES.map((z) => (
                <div
                  key={z.title}
                  className="flex gap-4 rounded-3xl border border-border bg-surface-1 p-5 shadow-card transition hover:shadow-float"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 ring-1 ring-violet-100">
                    <z.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {z.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {z.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const isActive = f === active
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActive(f)}
                    aria-label={`Filter gallery by ${f}`}
                    className={cn(
                      'inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-sm font-semibold transition',
                      isActive
                        ? 'border-violet-200 bg-violet-50 text-violet-700'
                        : 'border-border bg-surface-0 text-ink hover:border-brand-200 hover:bg-brand-50',
                    )}
                  >
                    {f}
                  </button>
                )
              })}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {filtered.map((g, idx) => (
                <TiltCard key={`${g.title}-${idx}`} className="group rounded-3xl">
                  <button
                    type="button"
                    aria-label={`Open ${g.type} item: ${g.title}`}
                    onClick={() => setOpenIndex(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setOpenIndex(idx)
                    }}
                    className="block w-full cursor-pointer text-left"
                  >
                    <MagicCard className="rounded-3xl">
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-1 p-6 shadow-card transition group-hover:-translate-y-1 group-hover:shadow-float">
                        <div
                          aria-hidden
                          className={`pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-linear-to-br ${g.tone} blur-2xl`}
                        />
                        <p className="relative inline-flex w-fit rounded-full bg-surface-0 px-3 py-1 text-xs font-semibold text-ink ring-1 ring-border">
                          {g.type}
                        </p>
                        <p className="relative mt-4 font-display text-lg font-semibold text-ink">
                          {g.title}
                        </p>
                        <p className="relative mt-2 text-sm text-ink-muted">
                          Click to open a lightbox preview with context and consent notes.
                        </p>
                      </div>
                    </MagicCard>
                  </button>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </ContentBand>

      <Lightbox
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        title={selected ? selected.title : 'Gallery item'}
      >
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                {selected?.type ?? 'Gallery'}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                {selected?.title ?? 'Preview'}
              </h3>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 px-3 py-2 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
            >
              Close
            </button>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface-1 p-5">
            <div
              aria-hidden
              className={cn(
                'h-44 w-full rounded-2xl bg-linear-to-br blur-[0px]',
                selected?.tone ?? 'from-brand-500/15 to-transparent',
              )}
            />
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              This is a lightbox-style preview pattern. When you’re ready, we can
              wire this to real submissions (images/text), with consent metadata
              and moderation workflow.
            </p>
            <div className="mt-4 rounded-2xl border border-border bg-surface-0 p-4 text-sm text-ink-muted">
              <p className="font-semibold text-ink">Consent first</p>
              <p className="mt-1">
                Young people choose what’s shared, how it’s credited, and what’s
                removed — anytime.
              </p>
            </div>
          </div>
        </div>
      </Lightbox>

      <CTABand
        title="Want to submit work or a blog idea?"
        body="We’ll share guidelines and consent steps — youth voice is always protected."
        primary={{ label: 'Contact the team', to: '/contact' }}
      />
    </>
  )
}
