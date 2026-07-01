import {
  PageBanner,
  QuoteCard,
  Section,
  SectionHead,
  StatRow,
} from '../components/sections/IHSections'
import { IHCard } from '../components/ui/IHCard'
import { Stagger, StaggerItem } from '../components/ui/Stagger'

export const ImpactPage = () => (
  <>
    <PageBanner
      title="Impact & Stories"
      subtitle="Real stories, honest data and the difference Inspire Hub makes in young people's lives."
      breadcrumb={[
        { label: 'Home', to: '/' },
        { label: 'Resources' },
        { label: 'Impact & Stories' },
      ]}
    />

    <Section className="section-ink">
      <StatRow
        stats={[
          { num: '600+', label: 'young people supported a year' },
          { num: '5', label: 'neighbourhoods reached' },
          { num: '100%', label: 'profits reinvested' },
          { num: '12+', label: 'weekly sessions' },
        ]}
      />
      <p className="mt-6 text-center text-xs text-white/40">
        Figures shown are illustrative placeholders for layout.
      </p>
    </Section>

    <Section>
      <SectionHead
        eyebrow="Case studies"
        title="Real stories, real change"
        body="Anonymised stories showing how Inspire Hub has changed lives."
      />
      <Stagger className="grid gap-6 md:grid-cols-3">
        <StaggerItem><IHCard icon="⭐" title="Finding a voice" body="How one young person went from quiet newcomer to leading our music nights." color="amber" /></StaggerItem>
        <StaggerItem><IHCard icon="🌿" title="Building resilience" body="Wellbeing check-ins that helped a young person manage anxiety at school." color="teal" /></StaggerItem>
        <StaggerItem><IHCard icon="🤝" title="Belonging" body="A new arrival finding friendship and confidence through sport." color="pink" /></StaggerItem>
      </Stagger>
    </Section>

    <Section className="section-mist">
      <SectionHead eyebrow="Testimonials" title="In their words" />
      <div className="grid gap-6 md:grid-cols-3">
        <QuoteCard quote="This place believed in me before I did." author="Young person, 16" />
        <QuoteCard quote="The change in my child's confidence has been remarkable." author="Parent" />
        <QuoteCard quote="A genuinely inclusive, well-run service for our pupils." author="School partner" />
      </div>
    </Section>

    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        <IHCard icon="📊" title="Annual reports" body="Impact summaries, data and outcomes published each year." color="blue" moreLabel="Download latest →" />
        <IHCard icon="📰" title="Media & press" body="Articles, interviews and features about our work." color="purple" moreLabel="Read coverage →" />
      </div>
    </Section>
  </>
)
