import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'
import { useCallback, useEffect, useRef } from 'react'
import { cn } from '../../lib/cn'

type MagicCardBaseProps = {
  children: ReactNode
  className?: string
  gradientSize?: number
  gradientFrom?: string
  gradientTo?: string
}

type MagicCardGradientProps = MagicCardBaseProps & {
  mode?: 'gradient'
  gradientColor?: string
  gradientOpacity?: number
}

type MagicCardOrbProps = MagicCardBaseProps & {
  mode: 'orb'
  glowFrom?: string
  glowTo?: string
  glowAngle?: number
  glowSize?: number
  glowBlur?: number
  glowOpacity?: number
}

type MagicCardProps = MagicCardGradientProps | MagicCardOrbProps
type ResetReason = 'enter' | 'leave' | 'global' | 'init'

const isOrbMode = (props: MagicCardProps): props is MagicCardOrbProps =>
  (props as MagicCardOrbProps).mode === 'orb'

export const MagicCard = (props: MagicCardProps) => {
  const {
    children,
    className,
    gradientSize = 220,
    gradientFrom = 'rgba(37,99,235,0.85)',
    gradientTo = 'rgba(139,92,246,0.85)',
  } = props

  const mode = isOrbMode(props) ? 'orb' : (props.mode ?? 'gradient')
  const gradientColor =
    !isOrbMode(props) ? (props.gradientColor ?? 'rgba(15,23,42,0.10)') : 'transparent'
  const gradientOpacity = !isOrbMode(props) ? (props.gradientOpacity ?? 0.85) : 0

  const glowFrom = isOrbMode(props) ? (props.glowFrom ?? 'rgba(249,115,22,0.70)') : 'transparent'
  const glowTo = isOrbMode(props) ? (props.glowTo ?? 'rgba(139,92,246,0.70)') : 'transparent'
  const glowAngle = isOrbMode(props) ? (props.glowAngle ?? 100) : 100
  const glowSize = isOrbMode(props) ? (props.glowSize ?? 420) : 420
  const glowBlur = isOrbMode(props) ? (props.glowBlur ?? 60) : 60
  const glowOpacity = isOrbMode(props) ? (props.glowOpacity ?? 0.9) : 0.9

  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const orbX = useSpring(mouseX, { stiffness: 250, damping: 30, mass: 0.6 })
  const orbY = useSpring(mouseY, { stiffness: 250, damping: 30, mass: 0.6 })
  const orbVisible = useSpring(0, { stiffness: 300, damping: 35 })

  const modeRef = useRef(mode)
  const glowOpacityRef = useRef(glowOpacity)
  const gradientSizeRef = useRef(gradientSize)

  useEffect(() => {
    modeRef.current = mode
  }, [mode])
  useEffect(() => {
    glowOpacityRef.current = glowOpacity
  }, [glowOpacity])
  useEffect(() => {
    gradientSizeRef.current = gradientSize
  }, [gradientSize])

  const reset = useCallback(
    (reason: ResetReason) => {
      if (modeRef.current === 'orb') {
        orbVisible.set(reason === 'enter' ? glowOpacityRef.current : 0)
        return
      }

      const off = -gradientSizeRef.current
      mouseX.set(off)
      mouseY.set(off)
    },
    [mouseX, mouseY, orbVisible],
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY],
  )

  useEffect(() => {
    reset('init')
  }, [reset])

  useEffect(() => {
    const handleGlobalPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) reset('global')
    }
    const handleBlur = () => reset('global')
    const handleVisibility = () => {
      if (document.visibilityState !== 'visible') reset('global')
    }

    window.addEventListener('pointerout', handleGlobalPointerOut)
    window.addEventListener('blur', handleBlur)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('pointerout', handleGlobalPointerOut)
      window.removeEventListener('blur', handleBlur)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [reset])

  const borderBackground = useMotionTemplate`
    linear-gradient(#ffffff 0 0) padding-box,
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom},
      ${gradientTo},
      rgba(226,232,240,1) 100%
    ) border-box
  `

  const hoverGradient = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientColor},
      transparent 100%
    )
  `

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={() => reset('leave')}
      onPointerEnter={() => reset('enter')}
      className={cn(
        'group relative isolate overflow-hidden border border-transparent',
        className,
      )}
      style={{ background: borderBackground }}
    >
      <div className="absolute inset-px z-20 rounded-[inherit] bg-surface-0" />

      {mode === 'gradient' ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: hoverGradient, opacity: gradientOpacity }}
        />
      ) : null}

      {mode === 'orb' ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-30"
          style={{
            width: glowSize,
            height: glowSize,
            x: orbX,
            y: orbY,
            translateX: '-50%',
            translateY: '-50%',
            borderRadius: 9999,
            filter: `blur(${glowBlur}px)`,
            opacity: orbVisible,
            background: `linear-gradient(${glowAngle}deg, ${glowFrom}, ${glowTo})`,
            mixBlendMode: 'multiply',
            willChange: 'transform, opacity',
          }}
        />
      ) : null}

      <div className="relative z-40">{children}</div>
    </motion.div>
  )
}

