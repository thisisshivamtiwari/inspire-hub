import { FileCheck, Heart, Lock, Scale, ShieldAlert, UserCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/sections/PageHero'
import { ContentBand } from '../components/sections/ContentBand'
import { BorderBeam } from '../components/ui/BorderBeam'
import { MagicCard } from '../components/ui/MagicCard'
import { StickySubnav } from '../components/ui/StickySubnav'

const POLICIES = [
  {
    id: 'safeguarding',
    title: 'Safeguarding policy',
    body: 'How we protect young people and respond to concerns — roles, reporting, and escalation.',
    icon: ShieldAlert,
  },
  {
    id: 'child-protection',
    title: 'Child protection statement',
    body: 'Our commitment to the safety and wellbeing of every child and young person we work with.',
    icon: Heart,
  },
  {
    id: 'privacy',
    title: 'Privacy & GDPR',
    body: 'We collect only what we need, store it responsibly, and respect your rights.',
    icon: Lock,
  },
  {
    id: 'conduct',
    title: 'Code of conduct',
    body: 'Expectations for staff, volunteers, and participants — respect, inclusion, and accountability.',
    icon: UserCheck,
  },
  {
    id: 'complaints',
    title: 'Complaints procedure',
    body: 'Transparent, accessible steps if something doesn’t feel right — we take concerns seriously.',
    icon: Scale,
  },
  {
    id: 'consent',
    title: 'Consent information',
    body: 'Informed consent for activities, media, and data collection — explained in plain language.',
    icon: FileCheck,
  },
] as const

export const PoliciesPage = () => (
  <>
    <PageHero
      eyebrow="Policies"
      title="Trust is built on clarity"
      subtitle="Safeguarding and data protection are foundational — not a footnote. Full policy documents are available on request."
    />

    <ContentBand>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <StickySubnav
          className="hidden lg:block lg:col-span-4"
          items={POLICIES.map((p) => ({
            id: p.id,
            label: p.title,
            description: 'Jump to section',
          }))}
        />

        <div className="lg:col-span-8">
          <div className="grid gap-5">
            {POLICIES.map((p, idx) => (
              <MagicCard key={p.id} className="rounded-3xl">
                <article
                  id={p.id}
                  className="group relative scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-surface-1 p-6 shadow-card"
                >
                  {idx === 0 ? (
                    <BorderBeam
                      borderWidth={1}
                      size={64}
                      durationSeconds={6.5}
                      colorFrom="#2563eb"
                      colorTo="#14b8a6"
                    />
                  ) : null}

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <p.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h2 className="font-display text-lg font-semibold text-ink">{p.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                      <p className="mt-4 text-sm text-ink-subtle">
                        Request the full document via{' '}
                        <Link to="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
                          contact
                        </Link>
                        .
                      </p>
                    </div>
                  </div>

                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-300/60 to-transparent opacity-0 transition group-hover:opacity-100"
                  />
                </article>
              </MagicCard>
            ))}
          </div>
        </div>
      </div>
    </ContentBand>
  </>
)
