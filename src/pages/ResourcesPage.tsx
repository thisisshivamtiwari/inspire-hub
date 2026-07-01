import { Link } from 'react-router-dom'
import { Callout, PageBanner, Section } from '../components/sections/IHSections'
import { IHCard } from '../components/ui/IHCard'

export const ResourcesPage = () => (
  <>
    <PageBanner
      title="Resources Hub"
      subtitle="Youth-friendly guides, worksheets, downloads and short videos — created to help young people and families thrive."
      breadcrumb={[
        { label: 'Home', to: '/' },
        { label: 'Resources' },
        { label: 'Resources Hub' },
      ]}
    />

    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        <IHCard icon="🧠" title="Mental health guides" body="Youth-friendly guides on stress, emotions, friendships and self-care." color="teal" moreLabel="Download →" />
        <IHCard icon="🏃" title="Physical health guides" body="Tips on movement, nutrition basics and healthy routines." color="orange" moreLabel="Download →" />
        <IHCard icon="📝" title="Worksheets & downloads" body="Journals, planners, reflection sheets and creative prompts." color="pink" moreLabel="Download →" />
        <IHCard icon="🎬" title="Videos & tutorials" body="Short wellbeing and movement videos created by our team." color="blue" moreLabel="Watch →" />
      </div>
    </Section>

    <Section className="section-mist">
      <Callout>
        <h3 className="font-display text-lg font-bold">Looking for something specific?</h3>
        <p className="mt-2 text-grey">
          If you're a young person, parent or professional looking for a particular resource,{' '}
          <Link to="/contact" className="font-bold" style={{ color: 'var(--accent)' }}>
            get in touch
          </Link>{' '}
          and we'll point you in the right direction.
        </p>
      </Callout>
    </Section>
  </>
)
