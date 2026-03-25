import { motion } from 'framer-motion'

type BorderBeamProps = {
  className?: string
  size?: number
  durationSeconds?: number
  delaySeconds?: number
  colorFrom?: string
  colorTo?: string
  reverse?: boolean
  initialOffset?: number
  borderWidth?: number
}

export const BorderBeam = ({
  className,
  size = 56,
  delaySeconds = 0,
  durationSeconds = 6,
  colorFrom = '#f97316',
  colorTo = '#8b5cf6',
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => (
  <div
    className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]"
    style={
      {
        borderWidth,
        borderStyle: 'solid',
      } as React.CSSProperties
    }
  >
    <motion.div
      className={className ?? 'absolute aspect-square'}
      style={
        {
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          backgroundImage: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
        } as React.CSSProperties
      }
      initial={{ offsetDistance: `${initialOffset}%` }}
      animate={{
        offsetDistance: reverse
          ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
          : [`${initialOffset}%`, `${100 + initialOffset}%`],
      }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        duration: durationSeconds,
        delay: -delaySeconds,
      }}
    />
  </div>
)

