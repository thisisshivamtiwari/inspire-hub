import { BarChart3, FileText, Quote, Radio } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { ContentBand } from '../components/sections/ContentBand'
import { CTABand } from '../components/sections/CTABand'
import { Testimonials } from '../components/home/Testimonials'
import { ImpactStats } from '../components/home/ImpactStats'
import { AnimatedList } from '../components/ui/AnimatedList'
import { MagicCard } from '../components/ui/MagicCard'

const STRIPS = [
  {
    title: 'Case studies',
    body: 'Anonymised stories showing how Inspire Hub supports confidence, attendance, and belonging.',
    icon: Quote,
  },
  {
    title: 'Annual reports',
    body: 'Impact summaries, outcomes data, and learning we share with partners and funders.',
    icon: BarChart3,
  },
  {
    title: 'Media & press',
    body: 'Articles, interviews, and features — help us amplify youth voices responsibly.',
    icon: Radio,
  },
  {
    title: 'Policy & transparency',
    body: 'Find safeguarding, privacy, and consent information in our policies hub.',
    icon: FileText,
  },
] as const

export const ImpactPage = () => (
  <>
    <PageHero
      backdrop="impact"
      eyebrow="Impact & stories"
      title="Evidence, stories, and accountability"
      subtitle="We measure what matters: confidence, connection, and access — alongside the human stories that numbers can never fully capture."
    />

    <ImpactStats />

    <ContentBand>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
            What we track
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
            Small signals, big story
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            We combine lived experience with measurable indicators. This section
            intentionally feels “alive” — like a live impact feed — not static
            cards.
          </p>

          <div className="mt-8">
            <MagicCard className="rounded-3xl">
              <div className="rounded-3xl border border-border bg-surface-0 p-6 shadow-card">
                <p className="text-sm font-semibold text-ink">Impact feed</p>
                <p className="mt-1 text-sm text-ink-muted">
                  A rolling glimpse of outcomes we care about (example content).
                </p>
                <AnimatedList className="mt-6" delayMs={780}>
                  <div className="rounded-2xl border border-border bg-surface-1 p-4 text-sm text-ink">
                    <span className="font-semibold">Confidence:</span>{' '}
                    young people report increased self-belief.
                  </div>
                  <div className="rounded-2xl border border-border bg-surface-1 p-4 text-sm text-ink">
                    <span className="font-semibold">Belonging:</span>{' '}
                    consistent attendance in safe sessions.
                  </div>
                  <div className="rounded-2xl border border-border bg-surface-1 p-4 text-sm text-ink">
                    <span className="font-semibold">Connection:</span>{' '}
                    peer support grows through youth-led groups.
                  </div>
                </AnimatedList>
              </div>
            </MagicCard>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
        {STRIPS.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-border bg-surface-1 p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-float"
          >
            <s.icon className="h-7 w-7 text-brand-600" aria-hidden />
            <h2 className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
          </div>
        ))}
      </div>
        </div>
      </div>
    </ContentBand>

    <Testimonials />

    <CTABand
      title="Fund impact that stays local"
      body="Support programmes that reinvest in young people across the West Midlands."
      primary={{ label: 'Support us', to: '/support' }}
      secondary={{ label: 'Partner with us', to: '/contact' }}
    />
  </>
)
