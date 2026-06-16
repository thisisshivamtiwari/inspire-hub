import { MotionReveal } from '../ui/MotionReveal'
import { OutlineButtonLink } from '../ui/OutlineButton'

type CTABandProps = {
  title: string
  body: string
  primary: { label: string; to: string }
  secondary?: { label: string; to: string }
}

export const CTABand = ({ title, body, primary, secondary }: CTABandProps) => (
  <section className="bg-yellow text-charcoal">
    <div className="sb-container grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
      <MotionReveal>
        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{title}</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed">{body}</p>
      </MotionReveal>
      <MotionReveal
        className="flex flex-col gap-3 sm:flex-row sm:justify-end lg:justify-end"
        delay={0.1}
      >
        <OutlineButtonLink to={primary.to}>{primary.label}</OutlineButtonLink>
        {secondary ? (
          <OutlineButtonLink to={secondary.to} className="border-charcoal/40">
            {secondary.label}
          </OutlineButtonLink>
        ) : null}
      </MotionReveal>
    </div>
  </section>
)
