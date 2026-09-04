import { Link } from 'react-router-dom'
import { PageBanner, Section, SectionHead, SplitSection } from '../components/sections/IHSections'
import { IHCard } from '../components/ui/IHCard'
import { Stagger, StaggerItem } from '../components/ui/Stagger'
import { IMAGES } from '../lib/site'

export const PhysicalHealthPage = () => (
  <>
    <PageBanner
      title="Physical Health & Activity"
      subtitle="Movement is a powerful tool for wellbeing. Our programmes help young people build confidence, reduce stress and develop healthy habits."
      breadcrumb={[
        { label: 'Home', to: '/' },
        { label: 'Wellbeing' },
        { label: 'Physical Health & Activity' },
      ]}
    />

    <Section>
      <SectionHead
        eyebrow="Why it matters"
        title="Confidence, calm and healthy habits"
        body="Physical activity supports mental clarity as much as physical health. Our sessions are built around fun, teamwork and personal growth — never competition for its own sake."
      />
    </Section>

    <Section className="section-mist">
      <SectionHead eyebrow="Sports programmes" title="Inclusive sessions for everyone" />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StaggerItem><IHCard icon="⚽" title="Football" body="Inclusive, fun sessions focused on teamwork." color="orange" /></StaggerItem>
        <StaggerItem><IHCard icon="🏀" title="Basketball" body="Skills, movement and confidence on court." color="pink" /></StaggerItem>
        <StaggerItem><IHCard icon="🏉" title="Rugby" body="Teamwork, respect and personal growth." color="blue" /></StaggerItem>
        <StaggerItem><IHCard icon="🤸" title="Multi-sports" body="A bit of everything — fun and variety." color="lime" /></StaggerItem>
      </Stagger>
    </Section>

    <SplitSection reverse image={IMAGES.harnesses} imageAlt="Young people getting ready for an outdoor activity">
      <span className="ih-eyebrow">
        Fitness for wellbeing
      </span>
      <h2 className="font-display">
        Gentle, accessible, body-positive
      </h2>
      <p>
        Fitness sessions that promote body positivity, self-care and mental clarity — accessible for
        every ability and designed to feel good, not intimidating.
      </p>
    </SplitSection>

    <SplitSection className="section-mist" image={IMAGES.campfire} imageAlt="A campfire on a residential evening">
      <span className="ih-eyebrow">
        Residentials
      </span>
      <h2 className="font-display">
        Active, enriching holiday programmes
      </h2>
      <p>
        Safe, active and enriching holiday programmes that combine movement, creativity and social
        connection — giving young people new experiences and lasting friendships.
      </p>
      <Link to="/events" className="btn btn-accent mt-6 inline-flex">
        See upcoming residentials
      </Link>
    </SplitSection>
  </>
)
