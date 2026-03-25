import { GraduationCap, Route, Users } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { ContentBand } from '../components/sections/ContentBand'
import { CTABand } from '../components/sections/CTABand'
import { BentoCard, BentoGrid } from '../components/ui/BentoGrid'
import { BorderBeam } from '../components/ui/BorderBeam'
import { MagicCard } from '../components/ui/MagicCard'

const OFFERS = [
  {
    title: 'School packages',
    body: 'Tiered packages tailored to school needs — assemblies, workshops, and enrichment blocks.',
    icon: GraduationCap,
  },
  {
    title: 'CPD training',
    body: 'Staff training on youth mental health, inclusion, and trauma‑informed practice.',
    icon: Users,
  },
  {
    title: 'Referral pathways',
    body: 'Clear guidance for referring young people to Inspire Hub services with confidence.',
    icon: Route,
  },
] as const

export const SchoolsPage = () => (
  <>
    <PageHero
      backdrop="schools"
      eyebrow="For schools & professionals"
      title="Partnership that fits your timetable — and your pupils"
      subtitle="We align with PSHE priorities, pastoral needs, and safeguarding expectations — with practical, youth‑friendly delivery."
    />

    <ContentBand>
      <BentoGrid>
        <BentoCard
          className="md:col-span-4"
          eyebrow="Schools"
          title="A clear partnership model"
          description="Pick a package, set outcomes, align safeguarding, and we deliver with consistent facilitation and evaluation."
          icon={<GraduationCap className="h-5 w-5" aria-hidden />}
          background={
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.14),transparent_42%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.10),transparent_40%)]" />
          }
          footer={
            <div className="grid gap-3 sm:grid-cols-3">
              {['PSHE-aligned', 'Safeguarding-first', 'Youth-led delivery'].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-surface-0 p-4 text-sm font-semibold text-ink shadow-soft"
                >
                  {t}
                </div>
              ))}
            </div>
          }
        />

        {OFFERS.map((o, idx) => (
          <MagicCard key={o.title} className="rounded-3xl md:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-1 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-float">
              <BorderBeam
                borderWidth={1}
                size={56}
                durationSeconds={6.3}
                delaySeconds={idx * 0.6}
                colorFrom="#14b8a6"
                colorTo="#8b5cf6"
              />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                <o.icon className="h-6 w-6" aria-hidden />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold text-ink">{o.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{o.body}</p>
            </div>
          </MagicCard>
        ))}
      </BentoGrid>
    </ContentBand>

    <CTABand
      title="Book a discovery call"
      body="We’ll map your priorities and propose a delivery plan — including evaluation and safeguarding."
      primary={{ label: 'Contact us', to: '/contact' }}
      secondary={{ label: 'Programmes overview', to: '/programmes' }}
    />
  </>
)
