import { AlertTriangle, Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/sections/PageHero'
import { ContentBand } from '../components/sections/ContentBand'
import { AnimatedList } from '../components/ui/AnimatedList'
import { Button } from '../components/ui/Button'
import { MagicCard } from '../components/ui/MagicCard'
import { SITE } from '../lib/site'

export const ContactPage = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We respond within two working days"
        subtitle="Share your enquiry — safeguarding, partnerships, programmes, or press. We’ll route it to the right person."
      />

      <ContentBand>
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-lg font-semibold text-ink">Direct lines</h2>
            <ul className="mt-6 space-y-4 text-sm text-ink-muted">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium text-ink hover:text-brand-700"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className="font-medium text-ink hover:text-brand-700"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                <span>{SITE.area}</span>
              </li>
            </ul>
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-ink-subtle">
              Social
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              @InspireHubCIC on Instagram, Facebook, and Twitter
            </p>

            <div className="mt-10">
              <MagicCard className="rounded-3xl">
                <div className="rounded-3xl border border-border bg-surface-0 p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
                    What happens next
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">
                    A clear, calm process
                  </p>
                  <AnimatedList className="mt-5" delayMs={780}>
                    <div className="rounded-2xl border border-border bg-surface-1 p-4 text-sm text-ink">
                      <span className="font-semibold">1)</span> We route your message to the right lead.
                    </div>
                    <div className="rounded-2xl border border-border bg-surface-1 p-4 text-sm text-ink">
                      <span className="font-semibold">2)</span> We reply within two working days.
                    </div>
                    <div className="rounded-2xl border border-border bg-surface-1 p-4 text-sm text-ink">
                      <span className="font-semibold">3)</span> If needed, we set a short call and share next steps.
                    </div>
                  </AnimatedList>
                </div>
              </MagicCard>
            </div>
          </div>

          <div className="lg:col-span-3">
            <MagicCard className="rounded-3xl">
              <div className="rounded-3xl border border-border bg-surface-0 p-6 shadow-float sm:p-8">
              {sent ? (
                <div className="py-10 text-center">
                  <p className="font-display text-xl font-semibold text-ink">
                    Thank you — your message is in.
                  </p>
                  <p className="mt-3 text-sm text-ink-muted">
                    We’ll reply within two working days. If your matter is urgent safeguarding, please follow your school or local authority procedures — and call emergency services if someone is in immediate danger.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-ink">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-border bg-surface-1 px-4 py-3 text-sm text-ink outline-none ring-brand-200 transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-2 w-full rounded-xl border border-border bg-surface-1 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-ink">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full resize-y rounded-xl border border-border bg-surface-1 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    Send enquiry
                  </Button>
                </form>
              )}
              </div>
            </MagicCard>

            <div className="mt-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50/90 p-4 text-amber-950">
              <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden />
              <p className="text-sm leading-relaxed">
                We are not a crisis service. If you are in immediate danger, call{' '}
                <span className="font-semibold">999</span> or contact a crisis helpline.
              </p>
            </div>
          </div>
        </div>
      </ContentBand>
    </>
  )
}
