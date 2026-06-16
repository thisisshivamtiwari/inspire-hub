import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ContentBandProps = {
  children: ReactNode
  className?: string
  surface?: 'white' | 'muted' | 'sky'
}

export const ContentBand = ({
  children,
  className,
  surface = 'white',
}: ContentBandProps) => (
  <section
    className={cn(
      'py-14 lg:py-16',
      surface === 'muted' && 'bg-off-white',
      surface === 'sky' && 'bg-sky/20',
      surface === 'white' && 'bg-white',
      className,
    )}
  >
    <div className="sb-container">{children}</div>
  </section>
)
