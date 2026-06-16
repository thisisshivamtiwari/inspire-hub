import { CopyAbstractSection } from '../components/sections/CopyAbstractSection'
import { ContentBand } from '../components/sections/ContentBand'
import { CTABand } from '../components/sections/CTABand'
import { LinkCardsSection } from '../components/sections/LinkCardsSection'
import { PageHero } from '../components/sections/PageHero'
import { IMAGES } from '../lib/site'

const VALUES = [
  {
    title: 'Inclusion',
    body: 'Everyone belongs. Every voice matters.',
    cta: { label: 'Find out more', to: '/programmes' },
    icon: 'I' as const,
    color: 'red' as const,
  },
  {
    title: 'Nurture',
    body: 'We grow confidence and spark creativity.',
    cta: { label: 'Find out more', to: '/programmes' },
    icon: 'N' as const,
    color: 'yellow' as const,
    align: 'right' as const,
  },
  {
    title: 'Support',
    body: 'A steady lift, a safe space to rise.',
    cta: { label: 'Find out more', to: '/mental-health' },
    icon: 'S' as const,
    color: 'sky' as const,
  },
  {
    title: 'Empowerment',
    body: 'Together we rise — stronger, braver, unstoppable.',
    cta: { label: 'Support us', to: '/support' },
    icon: 'E' as const,
    color: 'charcoal' as const,
    align: 'right' as const,
  },
]

export const AboutPage = () => (
  <>
    <PageHero
      title="Built for young people"
      image={IMAGES.heroProgrammes}
      accent="red"
      cta={{ label: 'Find out more', to: '/programmes' }}
    >
      <p>
        Inspire Hub CIC exists so enrichment, wellbeing, and opportunity are never out of reach
        because of background or circumstance.
      </p>
    </PageHero>

    <CopyAbstractSection
      eyebrow="Our vision"
      body={
        <p>
          A future where every young person rises with confidence, held by community, guided by
          opportunity, and free to imagine the life they deserve.
        </p>
      }
      abstractLines={['Inspire', 'Believe', 'Achieve']}
    />

    <ContentBand surface="muted">
      <h2 className="font-display text-3xl font-extrabold text-charcoal">Our story</h2>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-muted">
        We were founded with a simple belief: every young person deserves the chance to flourish.
        Too many face barriers that limit access to enrichment, wellbeing support, and positive
        opportunities — we exist to change that.
      </p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">
        As a Community Interest Company, we reinvest all profits into programmes for disadvantaged
        young people. Our team includes educators, youth workers, wellbeing practitioners, and
        creative facilitators — all DBS-checked and trained in safeguarding.
      </p>
    </ContentBand>

    <section className="bg-white py-16 lg:py-20">
      <div className="sb-container">
        <h2 className="font-display text-3xl font-extrabold text-charcoal">Our values</h2>
        <div className="mx-auto mt-12 max-w-4xl space-y-16">
          {VALUES.map((v) => {
            const reversed = v.align === 'right'
            const bg =
              v.color === 'red'
                ? 'bg-red'
                : v.color === 'yellow'
                  ? 'bg-yellow'
                  : v.color === 'sky'
                    ? 'bg-sky'
                    : 'bg-charcoal'

            return (
              <div
                key={v.title}
                className={`grid items-center gap-8 md:grid-cols-2 ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div
                  className={`sb-leaf flex aspect-square max-w-[220px] items-center justify-center font-display text-5xl font-extrabold text-white ${bg} ${reversed ? 'md:ml-auto' : ''}`}
                >
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold">{v.title}</h3>
                  <p className="mt-3 text-ink-muted">{v.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <LinkCardsSection
      cards={[
        { title: 'Our programmes', image: IMAGES.discover2, to: '/programmes' },
        { title: 'Support us', image: IMAGES.discover1, to: '/support' },
      ]}
    />

    <CTABand
      title="Partner with a youth-first CIC"
      body="Whether you're a school, a funder, or a neighbour — we'll co-design programmes that meet local need."
      primary={{ label: 'Contact us', to: '/contact' }}
      secondary={{ label: 'Support our work', to: '/support' }}
    />
  </>
)
