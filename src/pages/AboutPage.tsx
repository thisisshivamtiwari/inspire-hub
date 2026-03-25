import { BadgeCheck, Heart, Sparkles } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { ContentBand } from '../components/sections/ContentBand'
import { CTABand } from '../components/sections/CTABand'
import { TiltCard } from '../components/ui/TiltCard'
import { BorderBeam } from '../components/ui/BorderBeam'
import { MagicCard } from '../components/ui/MagicCard'

const VALUES = [
  { letter: 'I', title: 'Inclusion', body: 'Everyone belongs. Every voice matters.' },
  { letter: 'N', title: 'Nurture', body: 'We grow confidence and spark creativity.' },
  { letter: 'S', title: 'Support', body: 'A steady lift, a safe space to rise.' },
  { letter: 'P', title: 'Possibility', body: 'No postcode. No limits. Just open doors.' },
  { letter: 'I', title: 'Imagination', body: 'Expression fuels power; ideas shape futures.' },
  { letter: 'R', title: 'Respect', body: 'We honour every story and challenge every barrier.' },
  { letter: 'E', title: 'Empowerment', body: 'Together we rise — stronger, braver, unstoppable.' },
] as const

const TIMELINE = [
  {
    title: 'Listen first',
    body: 'We start with young people, families, and schools — what’s missing, what’s working, what feels safe.',
  },
  {
    title: 'Co‑design',
    body: 'Programmes are shaped with the community: language, rhythm, accessibility, and outcomes.',
  },
  {
    title: 'Deliver with care',
    body: 'DBS‑checked staff, safeguarding training, and consistent facilitation that builds trust.',
  },
  {
    title: 'Learn + improve',
    body: 'We reflect on feedback and outcomes so support stays relevant — not generic.',
  },
] as const

export const AboutPage = () => (
  <>
    <PageHero
      backdrop="about"
      eyebrow="About us"
      title="Built for young people — held by community"
      subtitle="Inspire Hub CIC exists so enrichment, wellbeing, and opportunity are never out of reach because of background or circumstance."
    />

    <ContentBand>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink">Our story</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            We were founded with a simple belief: every young person deserves the chance to flourish. Too many face barriers that limit access to enrichment, wellbeing support, and positive opportunities — we exist to change that.
          </p>
        </div>
        <TiltCard className="group rounded-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-1 p-7 shadow-card">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-linear-to-br from-brand-500/14 to-transparent blur-2xl"
            />
            <div className="relative flex items-center gap-2 text-brand-700">
              <Sparkles className="h-5 w-5" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">Vision</span>
            </div>
            <p className="relative mt-3 text-lg font-medium leading-relaxed text-ink">
              A future where every young person rises with confidence, held by community, guided by opportunity, and free to imagine the life they deserve — Inspire, Believe, Achieve.
            </p>
          </div>
        </TiltCard>
      </div>
    </ContentBand>

    <ContentBand surface="1">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
            How we work
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
            A rhythm that builds trust
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            We don’t “drop in” with generic sessions. We build relationships, co‑design with the community, and deliver with consistency so young people feel safe enough to grow.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4">
            {TIMELINE.map((step, idx) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-3xl border border-border bg-surface-0 p-6 shadow-card"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-300/60 to-transparent"
                />
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentBand>

    <ContentBand surface="1">
      <h2 className="font-display text-2xl font-semibold text-ink">Mission & values</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">
        Our mission is to inspire young people, nurture belief in their abilities, and create pathways for them to achieve their goals. Our values spell{' '}
        <span className="font-semibold text-ink">INSPIRE</span>:
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v) => (
          <MagicCard key={v.title} className="rounded-2xl">
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface-0 p-5 shadow-soft transition hover:shadow-card">
              <BorderBeam
                borderWidth={1}
                size={52}
                durationSeconds={6.6}
                delaySeconds={v.title.length % 4}
                colorFrom="#2563eb"
                colorTo="#f97316"
              />
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
                {v.letter}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.body}</p>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-300/60 to-transparent opacity-0 transition group-hover:opacity-100"
              />
            </div>
          </MagicCard>
        ))}
      </div>
    </ContentBand>

    <ContentBand>
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="rounded-3xl border border-border bg-linear-to-b from-brand-50 to-surface-0 p-6 shadow-card">
          <BadgeCheck className="h-8 w-8 text-brand-600" aria-hidden />
          <h3 className="mt-4 font-display text-lg font-semibold text-ink">Meet the team</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Educators, youth workers, wellbeing practitioners, coaches, and creative facilitators — all DBS‑checked and trained in safeguarding and inclusive delivery.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-surface-1 p-6 shadow-card lg:col-span-2">
          <Heart className="h-8 w-8 text-coral-500" aria-hidden />
          <h3 className="mt-4 font-display text-lg font-semibold text-ink">CIC structure</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            As a Community Interest Company, we reinvest profits into programmes for disadvantaged young people — prioritising transparency, accountability, and long‑term change. We partner with schools, charities, local authorities, and community organisations who share our vision for equality of access.
          </p>
        </div>
      </div>
    </ContentBand>

    <CTABand
      title="See our work in action"
      body="Explore programmes, read stories, or reach out to collaborate."
      primary={{ label: 'View programmes', to: '/programmes' }}
      secondary={{ label: 'See impact', to: '/impact' }}
    />
  </>
)
