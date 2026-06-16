import type { ReactNode } from 'react'
import { MotionReveal } from '../ui/MotionReveal'
import { OutlineButtonLink } from '../ui/OutlineButton'

type CopyAbstractSectionProps = {
  eyebrow?: string
  body: ReactNode
  cta?: { label: string; to: string }
  abstractLines: string[]
}

export const CopyAbstractSection = ({
  eyebrow,
  body,
  cta,
  abstractLines,
}: CopyAbstractSectionProps) => (
  <section className="bg-sky text-charcoal">
    <div className="sb-container grid items-end gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <MotionReveal className="max-w-lg">
        {eyebrow ? (
          <h2 className="font-display text-xl font-extrabold sm:text-2xl">{eyebrow}</h2>
        ) : null}
        <div className="mt-4 space-y-4 text-base leading-relaxed">{body}</div>
        {cta ? (
          <div className="mt-8">
            <OutlineButtonLink to={cta.to}>{cta.label}</OutlineButtonLink>
          </div>
        ) : null}
      </MotionReveal>

      <MotionReveal delay={0.12}>
        <div
          className="relative bg-white p-8 transition-transform duration-500 hover:-translate-y-1 lg:p-12"
          style={{ clipPath: 'polygon(0 0, 100% 8%, 100% 100%, 0 100%)' }}
        >
          <p className="font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {abstractLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </MotionReveal>
    </div>
  </section>
)
