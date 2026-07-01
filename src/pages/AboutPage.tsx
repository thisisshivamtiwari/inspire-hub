import {
  InspireGrid,
  PageBanner,
  Section,
  SectionHead,
  SplitSection,
} from '../components/sections/IHSections'
import { IHCard } from '../components/ui/IHCard'
import { Stagger, StaggerItem } from '../components/ui/Stagger'
import { IMAGES } from '../lib/site'

export const AboutPage = () => (
  <>
    <PageBanner
      title="About Us"
      subtitle="Every young person deserves the chance to flourish, regardless of their background or circumstances. We exist to change what holds them back."
      breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
    />

    <SplitSection image={IMAGES.centre} imageAlt="The Inspire Hub activity centre">
      <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>
        Our story
      </span>
      <h2 className="mt-2 font-display text-2xl font-black md:text-3xl">Founded on a simple belief</h2>
      <p className="mt-4 text-grey">
        Inspire Hub CIC was founded with a simple belief: every young person deserves the chance to
        flourish, regardless of their background or circumstances.
      </p>
      <p className="mt-3 text-grey">
        Too many young people face barriers that limit their access to enrichment, wellbeing support
        and positive opportunities. We exist to change that.
      </p>
    </SplitSection>

    <Section className="section-ink text-center">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Our vision</span>
      <h2 className="mx-auto mt-3 max-w-3xl font-display text-2xl font-black leading-tight text-white md:text-3xl">
        A future where every young person rises with confidence — held by community, guided by
        opportunity, and free to imagine the life they deserve.
      </h2>
      <p className="mt-4 text-white/70">Inspire. Believe. Achieve.</p>
    </Section>

    <Section className="section-mist">
      <SectionHead
        eyebrow="Mission & values"
        title="The INSPIRE values"
        body="Our mission is to inspire young people, nurture belief in their abilities, and create pathways for them to achieve their goals."
      />
      <InspireGrid />
    </Section>

    <Section>
      <Stagger className="grid gap-6 md:grid-cols-3">
        <StaggerItem>
          <IHCard
            icon="👥"
            title="Meet the team"
            body="Educators, youth workers, wellbeing practitioners, coaches and creative facilitators who share a passion for empowering young people. All staff are DBS-checked and trained in safeguarding and inclusive delivery."
            color="purple"
          />
        </StaggerItem>
        <StaggerItem>
          <IHCard
            icon="🏢"
            title="Our CIC structure"
            body="As a Community Interest Company, we reinvest all profits into programmes that benefit disadvantaged young people. We are committed to community impact, transparency and long-term change."
            color="teal"
          />
        </StaggerItem>
        <StaggerItem>
          <IHCard
            icon="🤝"
            title="Partners & funders"
            body="We collaborate with schools, charities, local authorities and community organisations who share our vision for equality of access and youth empowerment."
            color="orange"
          />
        </StaggerItem>
      </Stagger>
    </Section>
  </>
)
