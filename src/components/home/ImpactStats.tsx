import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from '../../hooks/useInView'
import { MotionReveal } from '../ui/MotionReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../ui/Container'
import { BorderBeam } from '../ui/BorderBeam'
import { MagicCard } from '../ui/MagicCard'

const STATS = [
  { label: 'Young people engaged', end: 500, suffix: '+' },
  { label: 'Partner schools & orgs', end: 35, suffix: '+' },
  { label: 'Programme sessions delivered', end: 1200, suffix: '+' },
  { label: 'Staff trained in safeguarding', end: 100, suffix: '%' },
] as const

const StatBlock = ({
  label,
  end,
  suffix,
}: {
  label: string
  end: number
  suffix: string
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const value = useCountUp(end, isInView)

  return (
    <MagicCard className="rounded-3xl">
      <div
        ref={ref}
        className="group relative overflow-hidden rounded-3xl border border-border bg-surface-0 p-6 text-center shadow-card"
      >
        <BorderBeam
          borderWidth={1}
          size={56}
          durationSeconds={6.8}
          colorFrom="#2563eb"
          colorTo="#8b5cf6"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-300/60 to-transparent"
          aria-hidden
        />
        <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {value}
          {suffix}
        </p>
        <p className="mt-2 text-sm font-medium text-ink-muted">{label}</p>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-300/60 to-transparent opacity-0 transition group-hover:opacity-100"
        />
      </div>
    </MagicCard>
  )
}

export const ImpactStats = () => (
  <section className="border-b border-border bg-surface-0 py-16 sm:py-20 lg:py-24">
    <Container>
      <MotionReveal>
        <SectionHeading
          eyebrow="Impact"
          title="Outcomes we measure in confidence, connection, and access"
          description="We’re a CIC — every programme is built to expand opportunity for young people who need it most."
        />
      </MotionReveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <MotionReveal key={s.label} delay={i * 0.05}>
            <StatBlock label={s.label} end={s.end} suffix={s.suffix} />
          </MotionReveal>
        ))}
      </div>
    </Container>
  </section>
)
