import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { OutlineButtonLink } from '../ui/OutlineButton'
import { SafeImage } from '../ui/SafeImage'
import { ScrollDiscover } from '../layout/SiteHeader'

type Accent = 'sky' | 'red' | 'yellow' | 'charcoal'

const titleColors: Record<Accent, string> = {
  sky: 'text-sky',
  red: 'text-red',
  yellow: 'text-yellow',
  charcoal: 'text-charcoal',
}

type PageHeroProps = {
  title: string
  children?: ReactNode
  image: string
  imageAlt?: string
  cta?: { label: string; to: string }
  accent?: Accent
  showDiscover?: boolean
}

export const PageHero = ({
  title,
  children,
  image,
  imageAlt = '',
  cta,
  accent = 'sky',
  showDiscover = true,
}: PageHeroProps) => (
  <header className="relative overflow-hidden bg-white">
    <div className="sb-container grid min-h-[420px] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-0 lg:py-0 lg:pr-0">
      <motion.div
        className="relative z-10 max-w-xl py-8 lg:py-16"
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1
          className={cn(
            'font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl',
            titleColors[accent],
          )}
        >
          {title}
        </h1>
        {children ? (
          <motion.div
            className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        ) : null}
        {cta ? (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 }}
          >
            <OutlineButtonLink to={cta.to}>{cta.label}</OutlineButtonLink>
          </motion.div>
        ) : null}
      </motion.div>

      <motion.div
        className="relative min-h-[280px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[55%]"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <SafeImage
          src={image}
          alt={imageAlt}
          className="sb-hero-image-clip h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          fetchPriority="high"
        />
        {showDiscover ? <ScrollDiscover accent={accent} /> : null}
      </motion.div>
    </div>
  </header>
)
