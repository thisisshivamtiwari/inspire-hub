import { motion } from 'framer-motion'
import { SITE } from '../../lib/site'

export const TopBar = () => (
  <div className="hidden border-b border-white/10 bg-ink text-xs text-white/70 sm:block">
    <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-4">
        <motion.a
          href={`mailto:${SITE.email}`}
          className="hover:text-white"
          whileHover={{ scale: 1.02 }}
        >
          ✉ {SITE.email}
        </motion.a>
        <span className="text-white/30">|</span>
        <motion.a
          href={`tel:${SITE.phone.replace(/\s/g, '')}`}
          className="hover:text-white"
          whileHover={{ scale: 1.02 }}
        >
          ☎ {SITE.phone}
        </motion.a>
      </div>
      <div className="flex items-center gap-4">
        {(['Instagram', 'Facebook', 'Twitter'] as const).map((label) => (
          <motion.a
            key={label}
            href="#"
            className="hover:text-white"
            whileHover={{ y: -2 }}
          >
            {label}
          </motion.a>
        ))}
      </div>
    </div>
  </div>
)
