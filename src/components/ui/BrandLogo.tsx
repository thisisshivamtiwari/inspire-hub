import type { ComponentPropsWithoutRef } from 'react'
import { SITE } from '../../lib/site'
import { IHMark } from './IHMark'
import { cn } from '../../lib/cn'

type BrandLogoProps = {
  /** sm = header, md = footer, lg/xl = hero & feature blocks */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** light text on dark backgrounds (header/footer) */
  tone?: 'light' | 'dark'
  layout?: 'horizontal' | 'stacked'
  showTagline?: boolean
  className?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

/** Reference: `.brand .mark{height:42px;width:auto}` */
const markSize: Record<NonNullable<BrandLogoProps['size']>, string> = {
  sm: 'h-[42px]',
  md: 'h-14',
  lg: 'h-20',
  xl: 'h-28 sm:h-32',
}

export const BrandLogo = ({
  size = 'sm',
  tone = 'light',
  layout = 'horizontal',
  showTagline = true,
  className,
  ...props
}: BrandLogoProps) => {
  const isLight = tone === 'light'

  return (
    <div
      className={cn(
        'flex min-w-0',
        layout === 'horizontal' ? 'items-center gap-[.7rem]' : 'flex-col items-center text-center',
        className,
      )}
      {...props}
    >
      <IHMark className={cn('w-auto shrink-0', markSize[size])} />

      <div className={cn('min-w-0', layout === 'stacked' && 'mt-4')}>
        <p
          className={cn(
            // Reference: `.brand .word{font-weight:800;font-size:1.4rem;letter-spacing:.02em}`
            'font-display font-extrabold uppercase leading-tight tracking-[.02em]',
            size === 'sm' && 'text-[1.4rem]',
            size === 'md' && 'text-[1.6rem]',
            size === 'lg' && 'text-[1.9rem]',
            size === 'xl' && 'text-[2.2rem] sm:text-[2.6rem]',
            isLight ? 'text-white' : 'text-charcoal',
          )}
        >
          {SITE.brandWordmark}
        </p>
        {showTagline ? (
          <p
            className={cn(
              // Reference: `.brand .word small{font-size:.48rem;letter-spacing:.32em;color:#b9bac0}`
              'font-display font-bold uppercase leading-none tracking-[.32em]',
              size === 'sm' && 'mt-px text-[.48rem]',
              size === 'md' && 'mt-0.5 text-[.55rem]',
              size === 'lg' && 'mt-1 text-[.65rem]',
              size === 'xl' && 'mt-1.5 text-[.75rem]',
              isLight ? 'text-[#b9bac0]' : 'text-grey',
            )}
          >
            {SITE.brandTagline}
          </p>
        ) : null}
      </div>
    </div>
  )
}
