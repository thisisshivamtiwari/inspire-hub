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
      <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>
        Fitness for wellbeing
      </span>
      <h2 className="mt-2 font-display text-2xl font-black md:text-3xl">
        Gentle, accessible, body-positive
      </h2>
      <p className="mt-4 text-grey">
        Fitness sessions that promote body positivity, self-care and mental clarity — accessible for
        every ability and designed to feel good, not intimidating.
      </p>
    </SplitSection>

    <SplitSection image={IMAGES.campfire} imageAlt="A campfire on a residential evening">
      <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>
        Residentials
      </span>
      <h2 className="mt-2 font-display text-2xl font-black md:text-3xl">
        Active, enriching holiday programmes
      </h2>
      <p className="mt-4 text-grey">
        Safe, active and enriching holiday programmes that combine movement, creativity and social
        connection — giving young people new experiences and lasting friendships.
      </p>
      <Link to="/events" className="btn btn-accent mt-6 inline-flex">
        See upcoming residentials
      </Link>
    </SplitSection>
  </>
)
