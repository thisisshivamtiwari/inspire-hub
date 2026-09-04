import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SITE } from '../../lib/site'
import { IHMark } from '../ui/IHMark'

/** Reference hero — `theme-cool` background with the spectrum bar and scroll cue. */
export const HeroHome = () => (
  <section className="hero hero-cool-bg">
    <motion.span
      className="hero-glow -right-[60px] -top-[180px] h-[520px] w-[520px] bg-orange"
      style={{ opacity: 0.3 }}
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.span
      className="hero-glow -bottom-[200px] right-[280px] h-[420px] w-[420px] bg-pink"
      style={{ opacity: 0.24 }}
      animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.span
      className="hero-glow -left-[180px] top-5 h-[400px] w-[400px] bg-blue"
      style={{ opacity: 0.18 }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />

    <IHMark className="hero-mark" />

    <div className="ih-wrap relative z-10 py-[92px] pb-[108px]">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hero-eyebrow"
      >
        📍 {SITE.area}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="mb-[22px] mt-[26px] font-display font-black leading-tight"
      >
        <motion.span
          animate={{ color: ['#EA5B00', '#FF7E00', '#EA5B00'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Inspire.
        </motion.span>{' '}
        <motion.span
          animate={{ color: ['#0094BE', '#00AFDF', '#0094BE'] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          Believe.
        </motion.span>{' '}
        <motion.span
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
        className="hero-lead mb-[34px]"
      >
        At Inspire Hub CIC, we create safe, vibrant and inclusive spaces where young people from
        disadvantaged communities can grow, express themselves and discover their potential —
        through education, enrichment, physical activity and mental wellbeing support.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-[14px]"
      >
        <Link to="/programmes" className="btn bg-pink text-white hover:-translate-y-0.5 hover:shadow-lg">
          Explore programmes →
        </Link>
        <Link to="/about" className="btn border-2 border-charcoal/30 bg-transparent hover:bg-charcoal hover:text-white">
          About Inspire Hub
        </Link>
      </motion.div>
    </div>

    <div className="discover" aria-hidden>
      <span>Discover</span>
      <span className="discover-arrow" />
    </div>
    <div className="hero-spectrum" aria-hidden />
  </section>
)
