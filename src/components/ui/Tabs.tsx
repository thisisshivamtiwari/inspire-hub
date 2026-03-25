import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export const TabsRoot = TabsPrimitive.Root

export const TabsList = ({
  className,
  ...props
}: TabsPrimitive.TabsListProps) => (
  <TabsPrimitive.List
    {...props}
    className={cn(
      'inline-flex w-full flex-wrap gap-2 rounded-2xl border border-border bg-surface-0 p-2 shadow-soft',
      className,
    )}
  />
)

type TabsTriggerProps = TabsPrimitive.TabsTriggerProps & {
  icon?: ReactNode
}

export const TabsTrigger = ({
  className,
  icon,
  children,
  ...props
}: TabsTriggerProps) => (
  <TabsPrimitive.Trigger
    {...props}
    className={cn(
      'group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-700',
      className,
    )}
  >
    {icon ? (
      <span className="text-ink-subtle transition group-data-[state=active]:text-brand-600">
        {icon}
      </span>
    ) : null}
    {children}
  </TabsPrimitive.Trigger>
)

export const TabsContent = ({
  className,
  ...props
}: TabsPrimitive.TabsContentProps) => (
  <TabsPrimitive.Content
    {...props}
    className={cn('mt-6 focus-visible:outline-none', className)}
  />
)

