import { motion, useScroll, useSpring } from 'framer-motion'

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 40,
    mass: 0.4,
  })

  return (
    <motion.div
      aria-hidden
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brand-600 via-violet-500 to-teal-500"
      style={{ scaleX }}
    />
  )
}

