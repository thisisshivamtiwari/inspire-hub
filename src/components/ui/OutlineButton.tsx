import type { ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'

type OutlineButtonProps = {
  children: ReactNode
  className?: string
  light?: boolean
  onDark?: boolean
}

const outlineClasses = (light?: boolean, onDark?: boolean) => {
  if (onDark) return 'sb-btn-outline sb-btn-outline--on-dark'
  if (light) return 'sb-btn-outline sb-btn-outline--light'
  return 'sb-btn-outline'
}

export const OutlineButton = ({
  children,
  className,
  light,
  onDark,
  ...props
}: OutlineButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    className={cn(outlineClasses(light, onDark), className)}
    {...props}
  >
    <span>{children}</span>
    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
  </button>
)

export const OutlineButtonLink = ({
  children,
  className,
  light,
  onDark,
  ...props
}: OutlineButtonProps & LinkProps) => (
  <Link className={cn(outlineClasses(light, onDark), className)} {...props}>
    <span>{children}</span>
    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
  </Link>
)
