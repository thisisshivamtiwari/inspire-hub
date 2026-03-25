import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BentoGridProps = {
  children: ReactNode
  className?: string
}

export const BentoGrid = ({ children, className }: BentoGridProps) => (
  <div
    className={cn(
      'grid w-full auto-rows-[18rem] grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-6',
      className,
    )}
  >
    {children}
  </div>
)

type BentoCardProps = {
  title: string
  description: string
  icon?: ReactNode
  eyebrow?: string
  className?: string
  background?: ReactNode
  footer?: ReactNode
}

export const BentoCard = ({
  title,
  description,
  icon,
  eyebrow,
  className,
  background,
  footer,
}: BentoCardProps) => (
  <div
    className={cn(
      'group relative overflow-hidden rounded-3xl border border-border bg-surface-0 shadow-card transition hover:-translate-y-1 hover:shadow-float',
      className,
    )}
  >
    {background ? <div className="absolute inset-0">{background}</div> : null}
    <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
            {eyebrow}
          </p>
        ) : null}
        <div className="mt-3 flex items-start gap-3">
          {icon ? (
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              {icon}
            </span>
          ) : null}
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
          </div>
        </div>
      </div>
      {footer ? <div className="relative mt-6">{footer}</div> : null}
    </div>

    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
      style={{
        background:
          'radial-gradient(800px circle at var(--mx,50%) var(--my,50%), rgba(37,99,235,0.14), transparent 40%)',
      }}
    />
  </div>
)

