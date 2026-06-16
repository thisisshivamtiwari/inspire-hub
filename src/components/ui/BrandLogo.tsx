import type { ComponentPropsWithoutRef } from 'react'
import { SITE } from '../../lib/site'
import { SafeImage } from './SafeImage'
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

const markSize: Record<NonNullable<BrandLogoProps['size']>, string> = {
  sm: 'h-11 w-11',
  md: 'h-20 w-20',
  lg: 'h-28 w-28',
  xl: 'h-40 w-40 sm:h-52 sm:w-52',
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
        layout === 'horizontal' ? 'items-center gap-3' : 'flex-col items-center text-center',
        className,
      )}
      {...props}
    >
      <SafeImage
        src="/logo.svg"
        alt=""
        width={size === 'xl' ? 208 : size === 'lg' ? 112 : size === 'md' ? 80 : 44}
        height={size === 'xl' ? 208 : size === 'lg' ? 112 : size === 'md' ? 80 : 44}
        className={cn('shrink-0 object-contain', markSize[size])}
      />

      <div className={cn('min-w-0', layout === 'stacked' && 'mt-4')}>
        <p
          className={cn(
            'font-display font-extrabold uppercase tracking-wide',
            size === 'sm' && 'text-sm leading-tight',
            size === 'md' && 'text-lg leading-tight',
            size === 'lg' && 'text-xl leading-tight',
            size === 'xl' && 'text-2xl leading-tight sm:text-3xl',
            isLight ? 'text-white' : 'text-charcoal',
          )}
        >
          {SITE.brandWordmark}
        </p>
        {showTagline ? (
          <p
            className={cn(
              'font-display font-bold uppercase tracking-[0.14em]',
              size === 'sm' && 'mt-0.5 text-[10px] sm:text-[11px]',
              size === 'md' && 'mt-1 text-xs',
              size === 'lg' && 'mt-1.5 text-xs sm:text-sm',
              size === 'xl' && 'mt-2 text-xs sm:text-sm',
              isLight ? 'text-white/85' : 'text-ink-muted',
            )}
          >
            {SITE.brandTagline}
          </p>
        ) : null}
      </div>
    </div>
  )
}
