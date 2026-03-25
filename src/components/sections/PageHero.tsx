import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import type { BackdropVariant } from '../visuals/DecorativeBackdrop'
import { Container } from '../ui/Container'
import { DecorativeBackdrop } from '../visuals/DecorativeBackdrop'

type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: ReactNode
  children?: ReactNode
  className?: string
  backdrop?: BackdropVariant
}

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  children,
  className,
  backdrop = 'default',
}: PageHeroProps) => (
  <section
    className={cn(
      'relative overflow-hidden border-b border-border',
      className,
    )}
  >
    <DecorativeBackdrop variant={backdrop} />
    <Container className="relative py-14 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <div className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {subtitle}
          </div>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </motion.div>
    </Container>
  </section>
)
