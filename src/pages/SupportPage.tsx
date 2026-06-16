import { useMemo, useState } from 'react'
import { Building2, HandHeart, Sparkles } from 'lucide-react'
import { CTABand } from '../components/sections/CTABand'
import { LinkCardsSection } from '../components/sections/LinkCardsSection'
import { PageHero } from '../components/sections/PageHero'
import { PageLinkList } from '../components/sections/PageLinkList'
import { cn } from '../lib/cn'
import { IMAGES } from '../lib/site'
import { OutlineButtonLink } from '../components/ui/OutlineButton'

const AMOUNTS = [15, 30, 60, 120] as const

const WAYS = [
  {
    title: 'Volunteer',
    body: 'Join sessions, events, and mentoring programmes — training and safeguarding included.',
    icon: HandHeart,
    cta: 'Offer your time',
    to: '/contact',
    color: 'yellow' as const,
    align: 'right' as const,
  },
  {
    title: 'Corporate support',
    body: 'CSR partnerships aligned with community impact and measurable youth outcomes.',
    icon: Building2,
    cta: 'Explore partnership',
    to: '/contact',
    color: 'sky' as const,
    align: undefined,
  },
] as const

export const SupportPage = () => (
  <>
    <PageHero
      title="Support young people"
      image={IMAGES.heroSupport}
      accent="yellow"
      cta={{ label: 'Talk to us about giving', to: '/contact' }}
    >
      <p>
        Your support helps us remove barriers and create opportunities for disadvantaged young
        people across Birmingham and the West Midlands.
      </p>
      <p>As a CIC, every penny is reinvested into programmes — with transparency you can trust.</p>
    </PageHero>

    <section className="bg-sky py-16 lg:py-20">
      <div className="sb-container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-charcoal">Choose an amount</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Pick a starting point — we'll show you what your gift could fund. Monthly giving helps
            us plan sessions with zero cost barriers for young people.
          </p>
        </div>
        <DonatePicker />
      </div>
    </section>

    <PageLinkList
      title="Other ways to help"
      items={[
        {
          title: 'Donate',
          body: 'One-off or monthly gifts that fund materials, sessions, and inclusive programme delivery.',
          cta: { label: 'Talk to us about giving', to: '/contact' },
          icon: Sparkles,
          color: 'red',
        },
        ...WAYS.map((w) => ({
          title: w.title,
          body: w.body,
          cta: { label: w.cta, to: w.to },
          icon: w.icon,
          color: w.color,
          ...(w.align ? { align: w.align } : {}),
        })),
      ]}
    />

    <LinkCardsSection
      cards={[
        { title: 'See our impact', image: IMAGES.card2, to: '/impact' },
        { title: 'Read our policies', image: IMAGES.card3, to: '/policies' },
      ]}
    />

    <CTABand
      title="Prefer a quick call?"
      body="We'll walk through giving options, Gift Aid, safeguarding, and reporting — no jargon."
      primary={{ label: 'Contact us', to: '/contact' }}
    />
  </>
)

const DonatePicker = () => {
  const [amount, setAmount] = useState<(typeof AMOUNTS)[number]>(30)

  const impactLine = useMemo(() => {
    if (amount <= 15) return 'Covers materials for a creative session.'
    if (amount <= 30) return 'Supports a young person to attend a session with zero cost barrier.'
    if (amount <= 60) return 'Helps fund a small-group workshop with inclusive resources.'
    return 'Contributes toward a multi-week programme with evaluation and follow-up.'
  }, [amount])

  return (
    <div className="bg-white p-8 shadow-soft">
      <div className="flex flex-wrap gap-2">
        {AMOUNTS.map((a) => (
          <button
            key={a}
            type="button"
            aria-label={`Select £${a} amount`}
            onClick={() => setAmount(a)}
            className={cn(
              'cursor-pointer border-2 px-5 py-3 text-sm font-bold transition',
              a === amount
                ? 'border-charcoal bg-charcoal text-white'
                : 'border-border bg-white text-charcoal hover:border-charcoal',
            )}
          >
            £{a}
          </button>
        ))}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-ink-muted">{impactLine}</p>
      <div className="mt-6">
        <OutlineButtonLink to="/contact">Talk to us about giving</OutlineButtonLink>
      </div>
    </div>
  )
}
