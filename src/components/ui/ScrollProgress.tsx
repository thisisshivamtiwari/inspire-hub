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
      className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-linear-to-r from-sky via-yellow to-red"
      style={{ scaleX }}
    />
  )
}
