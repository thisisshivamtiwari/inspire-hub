import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from '../../hooks/useInView'
import { MotionReveal } from '../ui/MotionReveal'

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
    <div
      ref={ref}
      className="border-2 border-charcoal bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <p className="font-display text-4xl font-extrabold text-charcoal sm:text-5xl">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-bold text-ink-muted">{label}</p>
    </div>
  )
}

export const ImpactStats = () => (
  <section className="bg-off-white py-16 lg:py-20">
    <div className="sb-container">
      <MotionReveal>
        <h2 className="font-display text-3xl font-extrabold text-red sm:text-4xl">
          Outcomes we measure
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink-muted">
          Confidence, connection, and access — we're a CIC built to expand opportunity for young
          people who need it most.
        </p>
      </MotionReveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <MotionReveal key={s.label} delay={i * 0.06}>
            <StatBlock label={s.label} end={s.end} suffix={s.suffix} />
          </MotionReveal>
        ))}
      </div>
    </div>
  </section>
)
