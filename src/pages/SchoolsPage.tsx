import { Link } from 'react-router-dom'
import { PageBanner, Section, SectionHead, SplitSection } from '../components/sections/IHSections'
import { IHCard } from '../components/ui/IHCard'
import { IMAGES } from '../lib/site'

const PACKAGES = [
  { name: 'Essentials', best: 'Getting started', includes: 'Wellbeing assembly + 1 workshop series' },
  { name: 'Enrichment', best: 'Whole-year groups', includes: 'PSHE-aligned workshops + enrichment sessions' },
  { name: 'Partnership', best: 'Ongoing impact', includes: 'Co-designed programme + CPD + reporting' },
]

export const SchoolsPage = () => (
  <>
    <PageBanner
      title="For Schools & Professionals"
      subtitle="Tiered packages, CPD training and clear referral pathways — built to fit how your school or service already works."
      breadcrumb={[
        { label: 'Home', to: '/' },
        { label: 'Programmes' },
        { label: 'For Schools & Professionals' },
      ]}
    />

    <SplitSection className="section-mist" image={IMAGES.classroom} imageAlt="Inside an Inspire Hub teaching space">
      <span className="ih-eyebrow">
        Inside our sessions
      </span>
      <h2 className="font-display">
        Spaces designed for focus and calm
      </h2>
      <p>
        Bright, welcoming teaching spaces and outdoor settings that help young people engage, learn
        and thrive.
      </p>
    </SplitSection>

    <Section>
      <SectionHead eyebrow="School packages" title="Tiered packages tailored to your needs" />
      <table className="pkg-table w-full overflow-hidden rounded-2xl">
        <thead>
          <tr>
            <th>Package</th>
            <th>Best for</th>
            <th>Includes</th>
          </tr>
        </thead>
        <tbody>
          {PACKAGES.map((pkg) => (
            <tr key={pkg.name}>
              <td>{pkg.name}</td>
              <td>{pkg.best}</td>
              <td>{pkg.includes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-sm text-grey">
        Package contents are illustrative — we tailor every package to your school.
      </p>
    </Section>

    <Section className="section-mist">
      <div className="grid gap-6 md:grid-cols-2">
        <IHCard icon="🎓" title="CPD training" body="Training for staff on youth mental health, inclusion and trauma-informed practice." color="teal" />
        <IHCard icon="📋" title="Referral pathways" body="Clear guidance for referring young people to Inspire Hub services." color="blue" />
      </div>
    </Section>

    <Section>
      <div className="cta-band-inline">
        <h2 className="font-display text-2xl font-black">Work with Inspire Hub</h2>
        <p className="mx-auto mt-3 max-w-lg text-white/80">
          Discuss packages, training or referrals with our team.
        </p>
        <Link to="/contact" className="btn mt-6 inline-flex bg-white text-charcoal hover:bg-mist">
          Enquire now
        </Link>
      </div>
    </Section>
  </>
)
