import { AnimatePresence, motion } from 'framer-motion'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Children, useEffect, useMemo, useState } from 'react'
import { cn } from '../../lib/cn'

export const AnimatedListItem = ({ children }: { children: ReactNode }) => (
  <motion.div
    layout
    initial={{ scale: 0.95, opacity: 0, y: 10 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    exit={{ scale: 0.95, opacity: 0, y: -10 }}
    transition={{ type: 'spring', stiffness: 350, damping: 34, mass: 0.55 }}
    className="mx-auto w-full"
  >
    {children}
  </motion.div>
)

type AnimatedListProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode
  delayMs?: number
}

export const AnimatedList = ({
  children,
  className,
  delayMs = 850,
  ...props
}: AnimatedListProps) => {
  const [index, setIndex] = useState(0)
  const childrenArray = useMemo(() => {
    return Children.toArray(children)
  }, [children])

  useEffect(() => {
    if (childrenArray.length <= 1) return
    if (index >= childrenArray.length - 1) return

    const t = window.setTimeout(() => {
      setIndex((i) => Math.min(childrenArray.length - 1, i + 1))
    }, delayMs)

    return () => window.clearTimeout(t)
  }, [childrenArray.length, delayMs, index])

  const itemsToShow = useMemo(() => {
    const result = childrenArray.slice(0, index + 1).reverse()
    return result
  }, [childrenArray, index])

  return (
    <div
      {...props}
      className={cn('flex flex-col items-center gap-4', className)}
    >
      <AnimatePresence>
        {itemsToShow.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <AnimatedListItem key={i}>{item as ReactNode}</AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  )
}

