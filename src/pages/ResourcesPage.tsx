import { BookOpen, Download, Film, HeartPulse, Sparkles } from 'lucide-react'
import type { ComponentType } from 'react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CTABand } from '../components/sections/CTABand'
import { ContentBand } from '../components/sections/ContentBand'
import { PageHero } from '../components/sections/PageHero'
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '../components/ui/Accordion'
import { Lightbox } from '../components/ui/Lightbox'
import { MagicCard } from '../components/ui/MagicCard'
import { TiltCard } from '../components/ui/TiltCard'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '../components/ui/Tabs'
import { cn } from '../lib/cn'

type ResourceType = 'Guides' | 'Worksheets' | 'Videos'

type ResourceItem = {
  title: string
  type: ResourceType
  tag: string
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  description: string
  est: string
}

const ITEMS: ResourceItem[] = [
  {
    title: 'Stress & anxiety — quick reset',
    type: 'Guides',
    tag: 'Mental wellbeing',
    icon: HeartPulse,
    description: 'A youth-friendly guide with grounding prompts and simple routines.',
    est: '5 min read',
  },
  {
    title: 'Friendship & communication',
    type: 'Guides',
    tag: 'Relationships',
    icon: BookOpen,
    description: 'Scripts, boundaries, and repair — explained without judgement.',
    est: '7 min read',
  },
  {
    title: 'Weekly reflection planner',
    type: 'Worksheets',
    tag: 'Download',
    icon: Download,
    description: 'A printable planner for mood, movement, and small wins.',
    est: 'PDF',
  },
  {
    title: 'Movement for calm (short session)',
    type: 'Videos',
    tag: 'Video',
    icon: Film,
    description: 'Gentle movement to reset attention and body tension.',
    est: '6 min',
  },
] as const

const FAQS = [
  {
    q: 'Are these resources a substitute for therapy?',
    a: 'No. They are supportive tools for everyday moments. If someone is in immediate danger, contact emergency services or a crisis helpline.',
  },
  {
    q: 'Can schools request tailored materials?',
    a: 'Yes — we can adapt resources for PSHE themes, pastoral needs, and age ranges. We’ll also include safeguarding and consent guidance where relevant.',
  },
  {
    q: 'Can young people contribute?',
    a: 'Absolutely. Youth voice matters. We’ll share a safe submission process with consent steps and clear boundaries.',
  },
] as const

export const ResourcesPage = () => {
  const [active, setActive] = useState<ResourceType>('Guides')
  const [query, setQuery] = useState('')
  const [openTitle, setOpenTitle] = useState<string | null>(null)

  const filtered = useMemo(
    () =>
      ITEMS.filter((i) => i.type === active).filter((i) => {
        const q = query.trim().toLowerCase()
        if (!q) return true
        return (
          i.title.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.tag.toLowerCase().includes(q)
        )
      }),
    [active, query],
  )

  const activeItem = useMemo(() => {
    if (!openTitle) return null
    return ITEMS.find((i) => i.title === openTitle) ?? null
  }, [openTitle])

  return (
    <>
      <PageHero
        backdrop="resources"
        eyebrow="Resources hub"
        title="Tools young people can actually use"
        subtitle="Practical, hopeful resources — clear, non‑judgemental, and easy to revisit."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/mental-health"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
          >
            Mental health support
            <Sparkles className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            to="/contact"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
          >
            Request tailored resources
          </Link>
        </div>
      </PageHero>

      <ContentBand>
        <TabsRoot value={active} onValueChange={(v) => setActive(v as ResourceType)}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <TabsList aria-label="Resource categories">
            <TabsTrigger
              value="Guides"
              icon={<BookOpen className="h-4 w-4" aria-hidden />}
            >
              Guides
            </TabsTrigger>
            <TabsTrigger
              value="Worksheets"
              icon={<Download className="h-4 w-4" aria-hidden />}
            >
              Worksheets
            </TabsTrigger>
            <TabsTrigger
              value="Videos"
              icon={<Film className="h-4 w-4" aria-hidden />}
            >
              Videos
            </TabsTrigger>
          </TabsList>

            <MagicCard className="rounded-3xl">
              <div className="flex w-full flex-col gap-2 rounded-3xl border border-border bg-surface-0 p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                    Search
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">
                    Type to filter instantly (no reload).
                  </p>
                </div>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search resources"
                  placeholder="Search guides, worksheets, videos…"
                  className="w-full rounded-2xl border border-border bg-surface-1 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 sm:max-w-sm"
                />
              </div>
            </MagicCard>
          </div>

          <TabsContent value={active}>
            <div className="grid gap-5 lg:grid-cols-2">
              {filtered.map((r) => (
                <TiltCard key={r.title} className="group rounded-3xl">
                  <article className="relative overflow-hidden rounded-3xl border border-border bg-surface-1 p-6 shadow-card transition group-hover:-translate-y-1 group-hover:shadow-float">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-surface-0 px-3 py-1 text-xs font-semibold text-ink ring-1 ring-border">
                        <r.icon className="h-4 w-4 text-brand-600" aria-hidden />
                        {r.tag}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
                        {r.est}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                      {r.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {r.description}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setOpenTitle(r.title)}
                        className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
                        aria-label={`Preview ${r.title}`}
                      >
                        Preview
                      </button>
                      <Link
                        to="/contact"
                        className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
                      >
                        Ask for this resource
                      </Link>
                    </div>
                  </article>
                </TiltCard>
              ))}
            </div>
          </TabsContent>
        </TabsRoot>
      </ContentBand>

      <Lightbox
        isOpen={openTitle !== null}
        onClose={() => setOpenTitle(null)}
        title={activeItem?.title ?? 'Resource preview'}
      >
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                {activeItem?.type ?? 'Resource'}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                {activeItem?.title ?? 'Preview'}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{activeItem?.description}</p>
            </div>
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setOpenTitle(null)}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 px-3 py-2 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
            >
              Close
            </button>
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-surface-1 p-6">
            <p className="text-sm leading-relaxed text-ink-muted">
              This is a real preview pattern (modal/lightbox). When you upload real
              files later, we can show an embedded PDF/video, plus download links and
              access notes.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {['Age guidance', 'Accessibility notes', 'How to use', 'Safeguarding reminder'].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-surface-0 p-4 text-sm font-semibold text-ink shadow-soft"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Lightbox>

      <ContentBand surface="1">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
          <div className="rounded-3xl border border-border bg-surface-0 p-7 shadow-card lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
              FAQ
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
              A few important notes
            </h3>
            <div className="mt-6 space-y-3">
              <AccordionRoot type="single" collapsible className="space-y-3">
                {FAQS.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </AccordionRoot>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-linear-to-b from-brand-50 to-surface-0 p-7 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              For parents / carers
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Supportive guides help families understand youth mental health and
              communicate effectively — without panic or shame.
            </p>
            <div className="mt-6 grid gap-3">
              {['Start the conversation', 'Signs to watch for', 'Calm routines'].map(
                (t) => (
                  <div
                    key={t}
                    className={cn(
                      'rounded-2xl border border-border bg-surface-0 p-4 text-sm font-semibold text-ink shadow-soft',
                    )}
                  >
                    {t}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </ContentBand>

      <CTABand
        title="Need something tailored?"
        body="We can point young people and professionals to the right resource — or co‑create new materials with your group."
        primary={{ label: 'Contact us', to: '/contact' }}
        secondary={{ label: 'See support', to: '/mental-health' }}
      />
    </>
  )
}
