import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      'max-w-2xl',
      align === 'center' && 'mx-auto text-center',
      className,
    )}
  >
    {eyebrow ? (
      <p
        className={cn(
          'mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600',
          align === 'center' && 'mx-auto',
        )}
      >
        {eyebrow}
      </p>
    ) : null}
    <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
      {title}
    </h2>
    {description ? (
      <div
        className={cn(
          'mt-4 text-base leading-relaxed text-ink-muted sm:text-lg',
          align === 'center' && 'mx-auto',
        )}
      >
        {description}
      </div>
    ) : null}
  </div>
)
