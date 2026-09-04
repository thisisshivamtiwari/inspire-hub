import { Callout, PageBanner, Pills, Section, SectionHead, SplitSection } from '../components/sections/IHSections'
import { IHCard } from '../components/ui/IHCard'
import { IMAGES } from '../lib/site'

export const MentalHealthPage = () => (
  <>
    <PageBanner
      title="Mental Health Support"
      subtitle="Early-intervention, non-clinical mental health support that is culturally aware, youth-led and rooted in empowerment."
      breadcrumb={[
        { label: 'Home', to: '/' },
        { label: 'Wellbeing' },
        { label: 'Mental Health Support' },
      ]}
    />

    <Section>
      <SectionHead
        eyebrow="Our approach"
        title="Helping young people understand and grow"
        body="Our sessions help young people understand their emotions, build resilience and develop healthy coping strategies — in spaces designed to feel safe and welcoming."
      />
    </Section>

    <Section className="section-mist">
      <SectionHead eyebrow="Workshops & groups" title="Interactive, creative sessions" />
      <Pills
        items={[
          'Emotional regulation',
          'Confidence & self-esteem',
          'Friendship & communication',
          'Stress & anxiety',
          'Identity & belonging',
        ]}
      />
    </Section>

    <SplitSection image={IMAGES.den} imageAlt="A young person building a woodland den">
      <span className="ih-eyebrow">
        One-to-one support
      </span>
      <h2 className="font-display">
        Space to talk, reflect and build confidence
      </h2>
      <p>
        We offer wellbeing check-ins and mentoring for young people who need individual support —
        a calm space to talk things through at their own pace.
      </p>
    </SplitSection>

    <Section className="section-mist">
      <div className="grid gap-6 md:grid-cols-2">
        <IHCard
          icon="📚"
          title="Youth resources"
          body="Downloadable tools, videos and guides to help young people manage emotions, build routines and stay grounded."
          color="teal"
          to="/resources"
          moreLabel="Browse resources →"
        />
        <IHCard
          icon="👨‍👩‍👧"
          title="Parent / carer guides"
          body="Supportive resources to help families understand youth mental health and communicate effectively."
          color="purple"
          to="/resources"
          moreLabel="View guides →"
        />
      </div>
    </Section>

    <Section>
      <Callout warn>
        <h3 className="font-display text-lg font-bold">Crisis signposting</h3>
        <p className="mt-2 text-grey">
          We are not a crisis service. If a young person is in immediate danger, please contact
          emergency services on 999 or a crisis helpline straight away.
        </p>
      </Callout>
    </Section>
  </>
)
