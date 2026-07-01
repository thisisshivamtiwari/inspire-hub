import { Callout, PageBanner, Section } from '../components/sections/IHSections'
import { SITE, IMAGES } from '../lib/site'

export const ContactPage = () => (
  <>
    <PageBanner
      title="Contact"
      subtitle="Submit your enquiry and we'll get back to you within 2 working days. We operate across Birmingham and the West Midlands."
      breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
    />

    <Section>
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>
            Send us a message
          </span>
          <h2 className="mt-2 font-display text-2xl font-black">Get in touch</h2>
          <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold">Name</label>
              <input id="name" type="text" placeholder="Your name" className="w-full rounded-lg border border-line px-4 py-3 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold">Email</label>
              <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-lg border border-line px-4 py-3 text-sm" />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-semibold">Subject</label>
              <input id="subject" type="text" placeholder="How can we help?" className="w-full rounded-lg border border-line px-4 py-3 text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold">Message</label>
              <textarea id="message" rows={5} placeholder="Tell us a little more..." className="w-full rounded-lg border border-line px-4 py-3 text-sm" />
            </div>
            <button type="submit" className="btn btn-accent justify-self-start">Send enquiry</button>
          </form>
        </div>
        <div>
          <div className="space-y-4 rounded-2xl border border-line bg-mist p-6">
            <div className="flex gap-4">
              <span className="text-xl">✉</span>
              <div>
                <p className="font-bold">Email</p>
                <a href={`mailto:${SITE.email}`} className="text-sm text-grey hover:text-purple">{SITE.email}</a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-xl">☎</span>
              <div>
                <p className="font-bold">Phone</p>
                <span className="text-sm text-grey">{SITE.phone}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-xl">📱</span>
              <div>
                <p className="font-bold">Social</p>
                <span className="text-sm text-grey">@InspireHubCIC on Instagram, Facebook & Twitter</span>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-xl">📍</span>
              <div>
                <p className="font-bold">Service area</p>
                <span className="text-sm text-grey">{SITE.area}</span>
              </div>
            </div>
          </div>
          <div className="mt-5 overflow-hidden rounded-2xl shadow-card">
            <img src={IMAGES.teambuilding} alt="A team-building catapult challenge at Inspire Hub" className="aspect-16/10 w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </Section>

    <Section className="section-mist">
      <Callout warn>
        <h3 className="font-display text-lg font-bold">Crisis disclaimer</h3>
        <p className="mt-2 text-grey">
          We are not a crisis service. If you are in immediate danger, please call 999 or contact a
          crisis helpline.
        </p>
      </Callout>
    </Section>
  </>
)
