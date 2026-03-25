import { forwardRef, type ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-soft hover:shadow-glow hover:brightness-[1.02] active:scale-[0.99]',
  secondary:
    'bg-warm-500 text-white shadow-soft hover:brightness-105 active:scale-[0.99]',
  ghost:
    'bg-surface-0/80 text-ink backdrop-blur hover:bg-surface-2 border border-border',
  outline:
    'border-2 border-brand-200 bg-transparent text-brand-700 hover:bg-brand-50 hover:border-brand-300',
}

type ButtonProps = {
  children: ReactNode
  className?: string
  variant?: Variant
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  'aria-label'?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      type = 'button',
      onClick,
      disabled,
      'aria-label': ariaLabel,
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 disabled:pointer-events-none disabled:opacity-50',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </button>
  ),
)
Button.displayName = 'Button'

type ButtonLinkProps = Omit<LinkProps, 'className'> & {
  children: ReactNode
  className?: string
  variant?: Variant
}

export const ButtonLink = ({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonLinkProps) => (
  <Link
    {...props}
    className={cn(
      'inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0',
      variantStyles[variant],
      className,
    )}
  >
    {children}
  </Link>
)
