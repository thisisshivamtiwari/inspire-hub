import type { ReactNode } from 'react'
import { MotionReveal } from '../ui/MotionReveal'
import { Container } from '../ui/Container'
import { cn } from '../../lib/cn'

type ContentBandProps = {
  children: ReactNode
  className?: string
  surface?: '0' | '1'
}

export const ContentBand = ({
  children,
  className,
  surface = '0',
}: ContentBandProps) => (
  <section
    className={cn(
      'border-b border-border py-14 sm:py-16 lg:py-20',
      surface === '1' ? 'bg-surface-1' : 'bg-surface-0',
      className,
    )}
  >
    <Container>
      <MotionReveal>{children}</MotionReveal>
    </Container>
  </section>
)
