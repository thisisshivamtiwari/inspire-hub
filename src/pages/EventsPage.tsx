import { Link } from 'react-router-dom'
import {
  EventList,
  Gallery,
  PageBanner,
  Section,
  SectionHead,
  SplitSection,
} from '../components/sections/IHSections'
import { GALLERY_IMAGES, IMAGES } from '../lib/site'

const UPCOMING = [
  { day: '12', month: 'Jul', title: 'Inspire Hub Enrichment Week', body: 'A celebration of creativity, movement and youth voice. All ages welcome.' },
  { day: '20', month: 'Jul', title: 'Wellbeing & Resilience Workshop', body: 'Practical tools for managing stress and building confidence.' },
  { day: '02', month: 'Aug', title: 'Summer Multi-Sports Residential', body: 'Active, enriching holiday programme combining movement and connection.' },
]

export const EventsPage = () => (
  <>
    <PageBanner
      title="Events & Workshops"
      subtitle="A calendar of enrichment days, wellbeing workshops and youth-led events — with simple, accessible booking."
      breadcrumb={[
        { label: 'Home', to: '/' },
        { label: 'Programmes' },
        { label: 'Events & Workshops' },
      ]}
    />

    <Section>
      <SectionHead eyebrow="Upcoming events" title="What's coming up" />
      <EventList events={UPCOMING} />
    </Section>

    <Section className="section-mist">
      <SectionHead
        eyebrow="Past events"
        title="Highlights from previous activities"
        body="Photos shared with consent — stories and moments from across the Inspire Hub community."
      />
      <Gallery images={GALLERY_IMAGES} />
    </Section>

    <SplitSection image={IMAGES.grounds} imageAlt="The grounds with giant outdoor chess and picnic benches">
      <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>
        Booking & registration
      </span>
      <h2 className="mt-2 font-display text-2xl font-black md:text-3xl">Simple, accessible booking</h2>
      <p className="mt-4 text-grey">
        Our booking forms are clear and accessible, with safeguarding and accessibility information
        provided up front so families know exactly what to expect.
      </p>
      <Link to="/contact" className="btn btn-accent mt-6 inline-flex">Register interest</Link>
    </SplitSection>
  </>
)
