import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type MotionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export const MotionReveal = ({
  children,
  className,
  delay = 0,
}: MotionRevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-64px' }}
    transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    className={cn(className)}
  >
    {children}
  </motion.div>
)
