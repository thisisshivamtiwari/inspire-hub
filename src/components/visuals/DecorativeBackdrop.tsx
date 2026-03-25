import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '../../lib/cn'

export type BackdropVariant =
  | 'default'
  | 'events'
  | 'resources'
  | 'youth'
  | 'impact'
  | 'support'
  | 'schools'
  | 'mental'
  | 'physical'
  | 'about'

type DecorativeBackdropProps = {
  variant?: BackdropVariant
  className?: string
}

const variantClasses: Record<BackdropVariant, string> = {
  default:
    'from-brand-50/90 via-surface-0 to-surface-1 [--blob1:theme(colors.teal.400/0.18)] [--blob2:theme(colors.violet.400/0.14)]',
  events:
    'from-warm-50/90 via-surface-0 to-surface-1 [--blob1:theme(colors.warm.400/0.22)] [--blob2:theme(colors.brand.500/0.12)]',
  resources:
    'from-brand-50/90 via-surface-0 to-surface-1 [--blob1:theme(colors.brand.500/0.18)] [--blob2:theme(colors.teal.500/0.12)]',
  youth:
    'from-violet-50/90 via-surface-0 to-surface-1 [--blob1:theme(colors.coral.400/0.20)] [--blob2:theme(colors.violet.500/0.14)]',
  impact:
    'from-teal-50/90 via-surface-0 to-surface-1 [--blob1:theme(colors.teal.500/0.18)] [--blob2:theme(colors.brand.600/0.12)]',
  support:
    'from-warm-50/90 via-surface-0 to-surface-1 [--blob1:theme(colors.warm.500/0.18)] [--blob2:theme(colors.coral.400/0.12)]',
  schools:
    'from-teal-50/90 via-surface-0 to-surface-1 [--blob1:theme(colors.teal.500/0.18)] [--blob2:theme(colors.violet.400/0.10)]',
  mental:
    'from-violet-50/90 via-surface-0 to-surface-1 [--blob1:theme(colors.violet.500/0.18)] [--blob2:theme(colors.teal.400/0.10)]',
  physical:
    'from-brand-50/90 via-surface-0 to-surface-1 [--blob1:theme(colors.brand.600/0.14)] [--blob2:theme(colors.warm.400/0.14)]',
  about:
    'from-surface-1 via-surface-0 to-surface-1 [--blob1:theme(colors.brand.600/0.14)] [--blob2:theme(colors.teal.500/0.10)]',
}

export const DecorativeBackdrop = ({
  variant = 'default',
  className,
}: DecorativeBackdropProps) => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 900], [0, -24])
  const y2 = useTransform(scrollY, [0, 900], [0, 16])

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden bg-linear-to-b',
        variantClasses[variant],
        className,
      )}
    >
      <div className="absolute inset-0 opacity-[0.55] mask-[radial-gradient(ellipse_at_top,black,transparent_65%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.18),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(249,115,22,0.14),transparent_40%),radial-gradient(circle_at_24%_88%,rgba(20,184,166,0.14),transparent_42%),radial-gradient(circle_at_80%_90%,rgba(139,92,246,0.12),transparent_45%)]" />
      </div>

      <motion.div
        style={{ y: y1 }}
        className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-(--blob1) blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full bg-(--blob2) blur-3xl"
      />

      <div className="absolute inset-0 opacity-[0.55] mask-[linear-gradient(to_bottom,transparent,black,transparent)]">
        <div className="absolute -left-48 top-14 h-72 w-[520px] -rotate-6 rounded-[48px] bg-linear-to-r from-white/0 via-white/70 to-white/0 blur-md" />
      </div>
    </div>
  )
}

