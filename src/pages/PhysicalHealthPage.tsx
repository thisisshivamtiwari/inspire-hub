import { Mountain, Trophy, Waves } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { ContentBand } from '../components/sections/ContentBand'
import { CTABand } from '../components/sections/CTABand'
import { BorderBeam } from '../components/ui/BorderBeam'
import { MagicCard } from '../components/ui/MagicCard'

const CARDS = [
  {
    title: 'Sports programmes',
    body: 'Inclusive football, basketball, rugby, and multi‑sports — fun, teamwork, and personal growth.',
    icon: Trophy,
    blob: 'bg-gradient-to-br from-brand-500/15 to-brand-600/5',
  },
  {
    title: 'Fitness for wellbeing',
    body: 'Gentle, accessible sessions that promote body positivity, self‑care, and mental clarity.',
    icon: Waves,
    blob: 'bg-gradient-to-br from-teal-500/15 to-teal-600/5',
  },
  {
    title: 'Residentials',
    body: 'Holiday programmes that blend movement, creativity, and social connection in safe environments.',
    icon: Mountain,
    blob: 'bg-gradient-to-br from-violet-500/15 to-violet-600/5',
  },
] as const

export const PhysicalHealthPage = () => (
  <>
    <PageHero
      backdrop="physical"
      eyebrow="Physical health & activity"
      title="Movement that builds confidence — and calm"
      subtitle="Physical activity reduces stress, supports wellbeing, and helps young people build healthy habits for life."
    />

    <ContentBand>
      <div className="grid gap-5 md:grid-cols-3">
        {CARDS.map((c) => (
          <MagicCard key={c.title} className="rounded-3xl">
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface-0 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-float">
              <BorderBeam
                borderWidth={1}
                size={54}
                durationSeconds={6.2}
                delaySeconds={c.title.length % 3}
                colorFrom="#14b8a6"
                colorTo="#2563eb"
              />
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full ${c.blob} blur-2xl`}
                aria-hidden
              />
              <c.icon className="relative h-8 w-8 text-brand-600" aria-hidden />
              <h3 className="relative mt-4 font-display text-lg font-semibold text-ink">
                {c.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">{c.body}</p>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-300/60 to-transparent opacity-0 transition group-hover:opacity-100"
              />
            </div>
          </MagicCard>
        ))}
      </div>
    </ContentBand>

    <CTABand
      title="Bring sport & wellbeing to your group"
      body="We partner with schools and community organisations to deliver inclusive activity programmes."
      primary={{ label: 'Get in touch', to: '/contact' }}
      secondary={{ label: 'See all programmes', to: '/programmes' }}
    />
  </>
)
