import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SITE } from '../../lib/site'

export const HeroHome = () => (
  <section className="hero hero-warm-bg">
    <motion.span
      className="hero-glow left-[10%] top-[20%] h-64 w-64 bg-pink"
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.span
      className="hero-glow right-[15%] top-[30%] h-48 w-48 bg-teal"
      animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.span
      className="hero-glow bottom-[20%] left-[40%] h-56 w-56 bg-amber"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
    <img src="/logo.svg" alt="" className="hero-mark h-24 w-auto md:h-32" aria-hidden />

    <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-28">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/65 px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink"
      >
        📍 {SITE.area}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="mt-6 max-w-xl font-display text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
      >
        <motion.span
          className="text-orange"
          animate={{ color: ['#EA5B00', '#FF7E00', '#EA5B00'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Inspire.
        </motion.span>{' '}
        <motion.span
          className="text-teal"
          animate={{ color: ['#0094BE', '#00AFDF', '#0094BE'] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          Believe.
        </motion.span>{' '}
        <motion.span
          className="text-pink"
          animate={{ color: ['#DE0C66', '#EC0F6E', '#DE0C66'] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          Achieve.
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-xl text-lg text-grey"
      >
        At Inspire Hub CIC, we create safe, vibrant and inclusive spaces where young people from
        disadvantaged communities can grow, express themselves and discover their potential —
        through education, enrichment, physical activity and mental wellbeing support.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <Link to="/programmes" className="btn bg-pink text-white hover:-translate-y-0.5 hover:shadow-lg">
          Explore programmes →
        </Link>
        <Link to="/about" className="btn border-2 border-charcoal/30 bg-transparent hover:bg-charcoal hover:text-white">
          About Inspire Hub
        </Link>
      </motion.div>
    </div>
  </section>
)
