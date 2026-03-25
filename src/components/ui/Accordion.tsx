import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/cn'

export const AccordionRoot = AccordionPrimitive.Root

export const AccordionItem = ({
  className,
  ...props
}: AccordionPrimitive.AccordionItemProps) => (
  <AccordionPrimitive.Item
    {...props}
    className={cn(
      'overflow-hidden rounded-2xl border border-border bg-surface-0 shadow-soft',
      className,
    )}
  />
)

export const AccordionTrigger = ({
  className,
  children,
  ...props
}: AccordionPrimitive.AccordionTriggerProps) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      {...props}
      className={cn(
        'group flex w-full cursor-pointer items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-ink transition hover:bg-brand-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0',
        className,
      )}
    >
      <span>{children}</span>
      <ChevronDown
        className="h-5 w-5 text-ink-subtle transition-transform group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)

export const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionPrimitive.AccordionContentProps) => (
  <AccordionPrimitive.Content
    {...props}
    className={cn(
      'overflow-hidden data-[state=closed]:animate-[accordion-up_220ms_ease-out] data-[state=open]:animate-[accordion-down_220ms_ease-out]',
      className,
    )}
  >
    <div className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">
      {children}
    </div>
  </AccordionPrimitive.Content>
)

