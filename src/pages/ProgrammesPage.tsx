import { CTABand } from '../components/sections/CTABand'
import { PageHero } from '../components/sections/PageHero'
import { PageLinkList, PROGRAMME_LINKS } from '../components/sections/PageLinkList'
import { IMAGES } from '../lib/site'

export const ProgrammesPage = () => (
  <>
    <PageHero
      title="Our programmes"
      image={IMAGES.heroProgrammes}
      accent="sky"
      cta={{ label: 'Contact us', to: '/contact' }}
    >
      <p>
        Education, creative enrichment, physical activity, and wellbeing — built for real lives
        across Birmingham and the West Midlands.
      </p>
    </PageHero>

    <PageLinkList title="What we deliver" items={PROGRAMME_LINKS} />

    <CTABand
      title="Book a discovery call"
      body="We'll map your priorities, safeguarding approach, and the programmes that fit your community."
      primary={{ label: 'Get in touch', to: '/contact' }}
      secondary={{ label: 'For schools', to: '/schools' }}
    />
  </>
)
