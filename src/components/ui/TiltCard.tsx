import type { ReactNode } from 'react'
import { useMemo, useRef, useState } from 'react'
import { cn } from '../../lib/cn'

type TiltCardProps = {
  children: ReactNode
  className?: string
  tiltMaxDeg?: number
}

export const TiltCard = ({
  children,
  className,
  tiltMaxDeg = 7,
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState<Record<string, string>>({})

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height

    const rx = (0.5 - py) * tiltMaxDeg
    const ry = (px - 0.5) * tiltMaxDeg

    setStyle({
      transform: `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`,
      '--mx': `${(px * 100).toFixed(2)}%`,
      '--my': `${(py * 100).toFixed(2)}%`,
    })
  }

  const handlePointerLeave = () => {
    setStyle({
      transform:
        'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)',
      '--mx': '50%',
      '--my': '50%',
    })
  }

  const mergedStyle = useMemo(
    () =>
      ({
        ...style,
      }) as React.CSSProperties,
    [style],
  )

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        'relative will-change-transform transform-3d transition-transform duration-200',
        className,
      )}
      style={mergedStyle}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(37,99,235,0.14), transparent 45%)',
        }}
      />
      {children}
    </div>
  )
}

