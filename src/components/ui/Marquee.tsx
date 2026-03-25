import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type MarqueeProps = ComponentPropsWithoutRef<'div'> & {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: ReactNode
  vertical?: boolean
  repeat?: number
  durationSeconds?: number
}

export const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  durationSeconds = 40,
  ...props
}: MarqueeProps) => (
  <div
    {...props}
    className={cn(
      'group flex overflow-hidden p-2 [--gap:1rem]',
      vertical ? 'flex-col' : 'flex-row',
      className,
    )}
    style={{ ...(props.style ?? {}), ['--duration' as never]: `${durationSeconds}s` }}
  >
    {Array.from({ length: repeat }).map((_, i) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        className={cn(
          'flex shrink-0 justify-around gap-(--gap)',
          vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]',
        )}
      >
        {children}
      </div>
    ))}
  </div>
)

