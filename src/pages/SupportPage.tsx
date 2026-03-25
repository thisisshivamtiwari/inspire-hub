import { Building2, HandHeart, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { PageHero } from '../components/sections/PageHero'
import { ContentBand } from '../components/sections/ContentBand'
import { CTABand } from '../components/sections/CTABand'
import { ButtonLink } from '../components/ui/Button'
import { BentoCard, BentoGrid } from '../components/ui/BentoGrid'
import { Marquee } from '../components/ui/Marquee'
import { cn } from '../lib/cn'

const WAYS = [
  {
    title: 'Donate',
    body: 'Your support helps us remove barriers and create opportunities for disadvantaged young people.',
    icon: Sparkles,
    cta: 'Talk to us about giving',
    to: '/contact',
  },
  {
    title: 'Volunteer',
    body: 'Join sessions, events, and mentoring programmes — training and safeguarding included.',
    icon: HandHeart,
    cta: 'Offer your time',
    to: '/contact',
  },
  {
    title: 'Corporate support',
    body: 'CSR partnerships that align with community impact and measurable youth outcomes.',
    icon: Building2,
    cta: 'Explore partnership',
    to: '/contact',
  },
] as const

export const SupportPage = () => (
  <>
    <PageHero
      backdrop="support"
      eyebrow="Support us"
      title="Invest in young people — with impact you can see"
      subtitle="As a CIC, reinvestment is our promise. Every partnership is designed to expand access, not box‑tick."
    />

    <ContentBand>
      <SupportInteractive />
    </ContentBand>

    <CTABand
      title="Prefer a quick call?"
      body="We’ll walk through partnership options, safeguarding, and reporting — no jargon."
      primary={{ label: 'Contact', to: '/contact' }}
    />
  </>
)

const AMOUNTS = [15, 30, 60, 120] as const

const SupportInteractive = () => {
  const [amount, setAmount] = useState<(typeof AMOUNTS)[number]>(30)

  const impactLine = useMemo(() => {
    if (amount <= 15) return 'Covers materials for a creative session.'
    if (amount <= 30) return 'Supports a young person to attend a session with zero cost barrier.'
    if (amount <= 60) return 'Helps fund a small-group workshop with inclusive resources.'
    return 'Contributes toward a multi-week programme with evaluation and follow-up.'
  }, [amount])

  return (
    <div className="space-y-10">
      <Marquee pauseOnHover className="rounded-3xl border border-border bg-surface-0 shadow-soft [--duration:28s]">
        {[
          'Monthly giving',
          'CSR partnership',
          'Volunteer hours',
          'Sponsored event',
          'In-kind support',
          'Mentoring',
          'Room hire',
          'Equipment',
        ].map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full border border-border bg-surface-1 px-4 py-2 text-xs font-semibold tracking-tight text-ink-muted shadow-soft"
          >
            {t}
          </span>
        ))}
      </Marquee>

      <BentoGrid>
        <BentoCard
          className="md:col-span-4"
          eyebrow="Give"
          title="Choose an amount — see the impact"
          description="Pick a starting point. We’ll tailor a transparent plan for where support goes."
          icon={<Sparkles className="h-5 w-5" aria-hidden />}
          background={
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.14),transparent_42%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.10),transparent_40%)]" />
          }
          footer={
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {AMOUNTS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    aria-label={`Select £${a} amount`}
                    onClick={() => setAmount(a)}
                    className={cn(
                      'inline-flex cursor-pointer items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0',
                      a === amount
                        ? 'border-brand-200 bg-brand-50 text-brand-700'
                        : 'border-border bg-surface-0 text-ink hover:border-brand-200 hover:bg-brand-50/60',
                    )}
                  >
                    £{a}
                  </button>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">{impactLine}</p>
              <ButtonLink to="/contact" variant="primary" className="w-full justify-center sm:w-auto">
                Talk to us about giving
              </ButtonLink>
            </div>
          }
        />

        {WAYS.slice(1).map((w) => (
          <BentoCard
            key={w.title}
            className="md:col-span-2"
            eyebrow="Get involved"
            title={w.title}
            description={w.body}
            icon={<w.icon className="h-5 w-5" aria-hidden />}
            footer={
              <ButtonLink to={w.to} variant="outline" className="w-full justify-center">
                {w.cta}
              </ButtonLink>
            }
          />
        ))}
      </BentoGrid>
    </div>
  )
}
