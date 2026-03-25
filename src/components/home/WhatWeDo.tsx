import {
  BookOpen,
  Equal,
  HeartHandshake,
  Sparkles,
  Users,
} from 'lucide-react'
import { MotionReveal } from '../ui/MotionReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../ui/Container'

const ITEMS = [
  {
    title: 'Empower through programmes',
    body: 'Education, creative enrichment, physical activity, and wellbeing — built for real lives.',
    icon: BookOpen,
    blob: 'bg-gradient-to-br from-brand-500/15 to-brand-600/5',
  },
  {
    title: 'Remove barriers',
    body: 'We open doors to participation so opportunity is never limited by circumstance.',
    icon: Equal,
    blob: 'bg-gradient-to-br from-teal-500/15 to-teal-600/5',
  },
  {
    title: 'Champion access',
    body: 'Equality of access is non‑negotiable in everything we design and deliver.',
    icon: HeartHandshake,
    blob: 'bg-gradient-to-br from-violet-500/15 to-violet-600/5',
  },
  {
    title: 'Build belonging',
    body: 'Confidence, resilience, and community — the foundation young people deserve.',
    icon: Users,
    blob: 'bg-gradient-to-br from-warm-500/15 to-orange-500/5',
  },
] as const

export const WhatWeDo = () => (
  <section className="border-b border-border bg-surface-1 py-16 sm:py-20 lg:py-24">
    <Container>
      <MotionReveal>
        <SectionHeading
          eyebrow="What we do"
          title="Programmes rooted in trust, joy, and inclusion"
          description="We combine learning, movement, and mental wellbeing so every young person can show up as themselves — and grow from there."
        />
      </MotionReveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
        {ITEMS.map((item, index) => (
          <MotionReveal key={item.title} delay={index * 0.06}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface-0 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float">
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full ${item.blob} blur-2xl transition group-hover:opacity-100`}
                aria-hidden
              />
              <div className="relative flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <item.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </div>
              </div>
              <div className="relative mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 opacity-0 transition group-hover:opacity-100">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Inspire-led delivery
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </Container>
  </section>
)
