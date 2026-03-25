import { AlertTriangle, Brain, Heart, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/sections/PageHero'
import { ContentBand } from '../components/sections/ContentBand'
import { CTABand } from '../components/sections/CTABand'
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '../components/ui/Accordion'
import { AnimatedList } from '../components/ui/AnimatedList'
import { BorderBeam } from '../components/ui/BorderBeam'
import { MagicCard } from '../components/ui/MagicCard'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '../components/ui/Tabs'
import { TiltCard } from '../components/ui/TiltCard'
import { cn } from '../lib/cn'

type Topic = 'Emotions' | 'Confidence' | 'Communication' | 'Stress' | 'Belonging'

const TOPIC_CARDS: Record<
  Topic,
  { title: string; body: string; points: string[]; tone: string }
> = {
  Emotions: {
    title: 'Emotional regulation',
    body: 'Tools to understand feelings, calm the body, and respond — not react.',
    points: ['Grounding', 'Body cues', 'Safe coping skills'],
    tone: 'from-violet-500/15 to-violet-600/5',
  },
  Confidence: {
    title: 'Confidence & self‑esteem',
    body: 'Small wins, identity strength, and voice — built with kindness and structure.',
    points: ['Strengths mapping', 'Goal setting', 'Positive routines'],
    tone: 'from-brand-500/15 to-brand-600/5',
  },
  Communication: {
    title: 'Friendship & communication',
    body: 'Boundaries, repair, and connection — explained in youth-friendly language.',
    points: ['Boundaries', 'Conflict repair', 'Support networks'],
    tone: 'from-teal-500/15 to-teal-600/5',
  },
  Stress: {
    title: 'Stress & anxiety',
    body: 'Calm strategies for busy minds — simple, repeatable, and stigma-free.',
    points: ['Breathing', 'Reset routines', 'Thought patterns'],
    tone: 'from-warm-500/15 to-orange-500/5',
  },
  Belonging: {
    title: 'Identity & belonging',
    body: 'Space to explore who you are — with respect, safety, and cultural awareness.',
    points: ['Belonging', 'Values', 'Community strength'],
    tone: 'from-coral-400/15 to-violet-500/5',
  },
}

const FAQS = [
  {
    q: 'Is this a crisis service?',
    a: 'No. If a young person is in immediate danger, contact emergency services or a crisis helpline. We can support with non‑clinical early intervention and signposting.',
  },
  {
    q: 'What does “youth‑led” mean in practice?',
    a: 'Young people shape topics, pace, and format. We build sessions around safety, consent, and participation that never pressures anyone to share.',
  },
  {
    q: 'Can you deliver sessions in schools?',
    a: 'Yes — we offer PSHE‑aligned workshops, wellbeing assemblies, and enrichment sessions tailored to the setting and age group.',
  },
] as const

export const MentalHealthPage = () => (
  <>
    <PageHero
      backdrop="mental"
      eyebrow="Mental health support"
      title="Wellbeing support that feels warm, safe, and real"
      subtitle="Early‑intervention, non‑clinical sessions that help young people build emotional literacy, resilience, and coping tools — without judgement."
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          to="/contact"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
        >
          Ask about support
          <Sparkles className="h-4 w-4" aria-hidden />
        </Link>
        <Link
          to="/resources"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
        >
          Browse resources
        </Link>
      </div>
    </PageHero>

    <ContentBand>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <TiltCard className="group rounded-3xl">
          <MagicCard className="rounded-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-1 p-7 shadow-card">
              <BorderBeam
                borderWidth={1}
                size={64}
                durationSeconds={6.4}
                colorFrom="#8b5cf6"
                colorTo="#14b8a6"
              />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-linear-to-br from-violet-500/15 to-transparent blur-2xl"
            />
            <Brain className="relative h-8 w-8 text-violet-600" aria-hidden />
            <h2 className="relative mt-4 font-display text-xl font-semibold text-ink">
              Our approach
            </h2>
            <p className="relative mt-3 text-sm leading-relaxed text-ink-muted">
              Youth‑led, culturally aware, and rooted in empowerment. Sessions are
              interactive and creative — designed for participation at your own
              pace, with facilitators who listen first.
            </p>
            <div className="relative mt-6 rounded-3xl border border-border bg-surface-0 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-subtle">
                Session flow
              </p>
              <AnimatedList className="mt-4 items-stretch" delayMs={720}>
                <div className="rounded-2xl border border-border bg-surface-1 p-4 text-sm text-ink">
                  Welcome + safety check-in
                </div>
                <div className="rounded-2xl border border-border bg-surface-1 p-4 text-sm text-ink">
                  Tools + practice (youth-paced)
                </div>
                <div className="rounded-2xl border border-border bg-surface-1 p-4 text-sm text-ink">
                  Reflect + signpost support
                </div>
              </AnimatedList>
            </div>
            </div>
          </MagicCard>
        </TiltCard>

        <div className="rounded-3xl border border-border bg-surface-0 p-7 shadow-card">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                Workshops & groups
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                Choose a theme
              </h3>
            </div>
            <Users className="h-8 w-8 text-brand-600" aria-hidden />
          </div>

          <TabsRoot defaultValue="Emotions">
            <TabsList aria-label="Mental health workshop themes" className="mt-5">
              {(
                Object.keys(TOPIC_CARDS) as Array<keyof typeof TOPIC_CARDS>
              ).map((k) => (
                <TabsTrigger key={k} value={k}>
                  {k}
                </TabsTrigger>
              ))}
            </TabsList>

            {(
              Object.entries(TOPIC_CARDS) as Array<
                [Topic, (typeof TOPIC_CARDS)[Topic]]
              >
            ).map(([key, data]) => (
              <TabsContent key={key} value={key}>
                <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-1 p-6 shadow-soft">
                  <div
                    aria-hidden
                    className={cn(
                      'pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-linear-to-br blur-2xl',
                      data.tone,
                    )}
                  />
                  <h4 className="relative font-display text-lg font-semibold text-ink">
                    {data.title}
                  </h4>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                    {data.body}
                  </p>
                  <div className="relative mt-5 grid gap-2 sm:grid-cols-3">
                    {data.points.map((p) => (
                      <div
                        key={p}
                        className="rounded-2xl border border-border bg-surface-0 px-4 py-3 text-sm font-medium text-ink shadow-soft"
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </TabsRoot>
        </div>
      </div>
    </ContentBand>

    <ContentBand surface="1">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Heart className="h-8 w-8 text-coral-500" aria-hidden />
          <h2 className="mt-4 font-display text-xl font-semibold text-ink">One‑to‑one support</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Wellbeing check‑ins and mentoring for young people who need individual space to talk, reflect, and build confidence.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-subtle">Youth & family resources</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Downloadable tools, videos, and guides for young people; supportive guides for parents and carers to understand youth mental health and communicate effectively.
          </p>
        </div>
      </div>
    </ContentBand>

    <ContentBand>
      <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
        <div className="rounded-3xl border border-border bg-surface-1 p-7 shadow-card lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
            FAQs
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
            What families and schools ask most
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

        <div className="flex gap-4 rounded-3xl border border-amber-200 bg-amber-50/90 p-6 text-amber-950 shadow-soft">
          <AlertTriangle className="h-6 w-6 shrink-0" aria-hidden />
          <div>
            <p className="font-semibold">Crisis signposting</p>
            <p className="mt-3 text-sm leading-relaxed text-amber-950/90">
              We are not a crisis service. If a young person is in immediate
              danger, contact emergency services or a crisis helpline. For
              non‑emergency support and signposting,{' '}
              <Link
                to="/contact"
                className="font-semibold underline underline-offset-2 hover:text-amber-900"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </ContentBand>

    <CTABand
      title="Ask about workshops for your school or community"
      body="We’ll co‑design sessions around your needs — safeguarding and accessibility first."
      primary={{ label: 'Contact the team', to: '/contact' }}
      secondary={{ label: 'Resources hub', to: '/resources' }}
    />
  </>
)
