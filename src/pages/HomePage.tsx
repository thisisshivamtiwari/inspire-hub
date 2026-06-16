import { CopyAbstractSection } from '../components/sections/CopyAbstractSection'
import { CopyImageSection } from '../components/sections/CopyImageSection'
import { LinkCardsSection } from '../components/sections/LinkCardsSection'
import { NewsCardGrid } from '../components/sections/NewsCardGrid'
import { PageHero } from '../components/sections/PageHero'
import { PartnersSection } from '../components/sections/LogoGridSection'
import { IMAGES, SITE } from '../lib/site'

const NEWS = [
  {
    title: 'Inspire Hub Enrichment Week — creativity, movement & youth voice',
    date: '15 Jun 2026',
    category: 'Events',
    image: IMAGES.card1,
    to: '/events',
  },
  {
    title: 'New wellbeing workshops for schools across Birmingham',
    date: '2 Jun 2026',
    category: 'Programmes',
    image: IMAGES.card2,
    to: '/programmes',
  },
  {
    title: 'How your support removes cost barriers for young people',
    date: '20 May 2026',
    category: 'Support',
    image: IMAGES.card3,
    to: '/support',
  },
] as const

export const HomePage = () => (
  <>
    <PageHero
      title="Spaces where young people thrive"
      image={IMAGES.heroHome}
      imageAlt="Young people learning together"
      accent="sky"
      cta={{ label: 'Find out more', to: '/about' }}
    >
      <p>
        {SITE.name} creates safe, vibrant, and inclusive spaces where young people from
        disadvantaged communities can grow, express themselves, and discover their potential.
      </p>
      <p>
        Through education, enrichment, physical activity, and mental wellbeing support, we open
        doors to opportunities that help young people flourish.
      </p>
    </PageHero>

    <CopyImageSection
      title="Find your way to grow"
      titleColor="yellow"
      variant="dark"
      body={
        <p>
          Explore programmes built for real lives — workshops, mentoring, sport, and creative
          enrichment across {SITE.area}. Every session is designed for inclusion, joy, and
          belonging.
        </p>
      }
      cta={{ label: 'Explore programmes', to: '/programmes' }}
      image={IMAGES.activity}
      imageAlt="Young people in a creative workshop"
    />

    <CopyAbstractSection
      eyebrow="Safe spaces for every young person"
      body={
        <>
          <p>
            As a Community Interest Company, we reinvest everything into programmes for young
            people who need them most — with transparency, safeguarding, and long-term impact.
          </p>
          <p>Want to partner with us or support our work?</p>
        </>
      }
      cta={{ label: 'Support our work', to: '/support' }}
      abstractLines={['Inspire', 'Believe', 'Achieve', 'Together']}
    />

    <NewsCardGrid cards={[...NEWS]} viewAllTo="/events" />

    <PartnersSection />

    <LinkCardsSection
      cards={[
        { title: 'Support us', image: IMAGES.discover1, to: '/support' },
        { title: 'Our programmes', image: IMAGES.discover2, to: '/programmes' },
      ]}
    />
  </>
)
