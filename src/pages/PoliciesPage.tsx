import { Link } from 'react-router-dom'
import { Callout, PageBanner, Section } from '../components/sections/IHSections'

const POLICIES = [
  { title: 'Safeguarding Policy', body: 'Our full safeguarding policy outlines how we protect young people and respond to concerns. The full document is available on request.' },
  { title: 'Child Protection Statement', body: 'We are committed to the safety and wellbeing of every child and young person we work with. All staff are DBS-checked and trained in safeguarding.' },
  { title: 'Privacy & GDPR', body: 'We handle all data in accordance with GDPR and only collect what is necessary to deliver our services and keep young people safe.' },
  { title: 'Code of Conduct', body: 'All staff, volunteers and participants are expected to follow our code of conduct, which sets clear expectations for respectful, safe behaviour.' },
  { title: 'Complaints Procedure', body: 'We take all concerns seriously. Our complaints process is transparent and accessible, and we aim to resolve issues fairly and promptly.' },
  { title: 'Consent Information', body: 'We obtain informed consent for all activities, media and data collection, and explain clearly how information will be used.' },
]

export const PoliciesPage = () => (
  <>
    <PageBanner
      title="Policies"
      subtitle="We are committed to the safety and wellbeing of every child and young person we work with. Our policies are transparent and accessible."
      breadcrumb={[
        { label: 'Home', to: '/' },
        { label: 'Resources' },
        { label: 'Policies' },
      ]}
    />

    <Section>
      <div className="mx-auto max-w-3xl">
        {POLICIES.map((p, i) => (
          <details key={p.title} className="ih-acc" open={i === 0}>
            <summary>{p.title}</summary>
            <div className="ih-acc-body">{p.body}</div>
          </details>
        ))}
      </div>
    </Section>

    <Section className="section-mist">
      <Callout>
        <h3 className="font-display text-lg font-bold">Request a full policy document</h3>
        <p className="mt-2 text-grey">
          To request the full version of any policy, please{' '}
          <Link to="/contact" className="font-bold" style={{ color: 'var(--accent)' }}>
            contact our team
          </Link>
          .
        </p>
      </Callout>
    </Section>
  </>
)
