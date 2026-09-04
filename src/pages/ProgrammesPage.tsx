import { Link } from 'react-router-dom'
import { PageBanner, Section, SplitSection } from '../components/sections/IHSections'
import { IHCard } from '../components/ui/IHCard'
import { IMAGES } from '../lib/site'

export const ProgrammesPage = () => (
  <>
    <PageBanner
      title="Programmes & Services"
      subtitle="From PSHE-aligned school workshops to community clubs and youth leadership, we co-design inclusive programmes that meet local needs."
      breadcrumb={[
        { label: 'Home', to: '/' },
        { label: 'Programmes' },
        { label: 'Programmes & Services' },
      ]}
    />

    <SplitSection className="section-mist" image={IMAGES.teambuilding} imageAlt="Young people on a team-building challenge">
      <span className="ih-eyebrow">
        In the community
      </span>
      <h2 className="font-display">
        Programmes that bring young people together
      </h2>
      <p>
        From school workshops to weekend clubs and residentials, our programmes are built around
        connection, challenge and fun.
      </p>
    </SplitSection>

    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        <IHCard icon="🏫" title="School programmes" body="PSHE-aligned workshops, wellbeing assemblies and enrichment sessions tailored to each school's needs." color="blue" to="/schools" moreLabel="For schools →" />
        <IHCard icon="🏠" title="Community programmes" body="After-school clubs, weekend sessions and community events that bring young people together." color="teal" to="/events" moreLabel="What's on →" />
        <IHCard icon="🎤" title="Youth leadership & mentoring" body="Programmes that amplify youth voice, build leadership skills and encourage peer support." color="pink" to="/youth-zone" moreLabel="Youth Zone →" />
        <IHCard icon="🤝" title="Partnerships" body="We work with organisations to co-design impactful, inclusive programmes that meet local needs." color="orange" to="/contact" moreLabel="Partner with us →" />
      </div>
    </Section>

    <Section className="section-mist">
      <div className="cta-band-inline">
        <h2 className="font-display text-2xl font-black">Bring Inspire Hub to your community</h2>
        <p className="mx-auto mt-3 max-w-lg text-white/80">
          Tell us what your young people need and we'll help design a programme that fits.
        </p>
        <Link to="/contact" className="btn mt-6 inline-flex bg-white text-charcoal hover:bg-mist">
          Start a conversation
        </Link>
      </div>
    </Section>
  </>
)
