import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type StaggerProps = {
  children: ReactNode
  className?: string
  stagger?: number
}

export const Stagger = ({ children, className, stagger = 0.08 }: StaggerProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-48px' }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: stagger } },
    }}
    className={cn(className)}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    }}
    className={cn(className)}
  >
    {children}
  </motion.div>
)
