import { MotionReveal } from '../ui/MotionReveal'

type LogoGridSectionProps = {
  title: string
  logos: { name: string; src?: string }[]
}

export const LogoGridSection = ({ title, logos }: LogoGridSectionProps) => (
  <section className="border-t border-border bg-white py-14 lg:py-16">
    <div className="sb-container">
      <MotionReveal>
        <h2 className="font-display text-2xl font-extrabold text-charcoal sm:text-3xl">{title}</h2>
      </MotionReveal>
      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {logos.map((logo, i) => (
          <MotionReveal key={logo.name} delay={i * 0.04}>
            <div className="flex h-20 items-center justify-center border border-border bg-off-white px-4 text-center text-xs font-bold uppercase tracking-wide text-ink-muted transition duration-300 hover:border-sky hover:shadow-soft">
              {logo.src ? (
                <img src={logo.src} alt={logo.name} className="max-h-12 max-w-full object-contain" />
              ) : (
                logo.name
              )}
            </div>
          </MotionReveal>
        ))}
      </div>
    </div>
  </section>
)

const PARTNER_NAMES = [
  'Birmingham City Council',
  'Local schools',
  'Community partners',
  'Youth charities',
  'West Midlands Combined',
  'Faith groups',
  'NHS partners',
  'Creative agencies',
  'Family hubs',
  'Funders & trusts',
] as const

const ACCREDITATION_NAMES = ['Safeguarding trained', 'DBS checked', 'CIC registered'] as const

export const PartnersSection = () => (
  <>
    <LogoGridSection title="Our partners" logos={PARTNER_NAMES.map((name) => ({ name }))} />
    <LogoGridSection
      title="Accreditations"
      logos={ACCREDITATION_NAMES.map((name) => ({ name }))}
    />
  </>
)
