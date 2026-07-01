import { Link } from 'react-router-dom'
import { PageBanner, Section } from '../components/sections/IHSections'
import { IHCard } from '../components/ui/IHCard'
import { Stagger, StaggerItem } from '../components/ui/Stagger'

export const SupportPage = () => (
  <>
    <PageBanner
      title="Support Us"
      subtitle="Your support helps us remove barriers and create opportunities for disadvantaged young people."
      breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Support Us' }]}
    />

    <Section>
      <Stagger className="grid gap-6 md:grid-cols-3">
        <StaggerItem>
          <IHCard icon="❤" title="Donate" body="Your support helps us remove barriers and create opportunities for disadvantaged young people." color="red" to="/contact" moreLabel="Donate →" />
        </StaggerItem>
        <StaggerItem>
          <IHCard icon="🤝" title="Volunteer" body="Join our team and make a meaningful difference in young people's lives." color="teal" to="/contact" moreLabel="Get involved →" />
        </StaggerItem>
        <StaggerItem>
          <IHCard icon="🏢" title="Corporate support" body="Partnerships that align with CSR goals and lasting community impact." color="blue" to="/contact" moreLabel="Partner with us →" />
        </StaggerItem>
      </Stagger>
    </Section>

    <Section className="section-mist">
      <div className="cta-band-inline">
        <h2 className="font-display text-2xl font-black">Every contribution opens a door</h2>
        <p className="mx-auto mt-3 max-w-lg text-white/80">
          As a Community Interest Company, we reinvest all profits into programmes for disadvantaged
          young people.
        </p>
        <Link to="/contact" className="btn mt-6 inline-flex bg-white text-charcoal hover:bg-mist">
          Talk to our team
        </Link>
      </div>
    </Section>
  </>
)
