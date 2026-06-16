import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { MotionReveal } from '../ui/MotionReveal'
import { SafeImage } from '../ui/SafeImage'
import { OutlineButtonLink } from '../ui/OutlineButton'

type CopyImageSectionProps = {
  title: string
  body: ReactNode
  cta?: { label: string; to: string }
  image: string
  imageAlt?: string
  variant?: 'dark' | 'light'
  titleColor?: 'yellow' | 'white' | 'sky'
}

export const CopyImageSection = ({
  title,
  body,
  cta,
  image,
  imageAlt = '',
  variant = 'dark',
  titleColor = 'yellow',
}: CopyImageSectionProps) => {
  const titleCls =
    titleColor === 'yellow'
      ? 'text-yellow'
      : titleColor === 'sky'
        ? 'text-sky'
        : 'text-white'

  return (
    <section className={cn(variant === 'dark' ? 'bg-charcoal text-white' : 'bg-white text-charcoal')}>
      <div className="sb-container grid items-end gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <MotionReveal className="max-w-lg">
          <h2 className={cn('font-display text-3xl font-extrabold sm:text-4xl', titleCls)}>{title}</h2>
          <div className="mt-5 text-base leading-relaxed opacity-90">{body}</div>
          {cta ? (
            <div className="mt-8">
              <OutlineButtonLink to={cta.to} onDark={variant === 'dark'} light={variant === 'light'}>
                {cta.label}
              </OutlineButtonLink>
            </div>
          ) : null}
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <SafeImage
            src={image}
            alt={imageAlt}
            className="sb-curved-image w-full object-cover shadow-soft transition-transform duration-500 hover:scale-[1.02]"
          />
        </MotionReveal>
      </div>
    </section>
  )
}
