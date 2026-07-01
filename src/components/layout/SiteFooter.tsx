import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BrandLogo } from '../ui/BrandLogo'
import {
  FOOTER_EXPLORE,
  FOOTER_WELLBEING,
  SITE,
} from '../../lib/site'

export const SiteFooter = () => (
  <footer className="mt-auto bg-charcoal text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div>
        <BrandLogo tone="light" size="sm" />
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          Safe, vibrant, inclusive spaces where young people grow, express themselves and discover
          their potential.
        </p>
      </div>

      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/50">Explore</h3>
        <ul className="mt-4 space-y-2">
          {FOOTER_EXPLORE.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="text-sm text-white/80 transition-colors hover:text-teal"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/50">Wellbeing</h3>
        <ul className="mt-4 space-y-2">
          {FOOTER_WELLBEING.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="text-sm text-white/80 transition-colors hover:text-teal"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/50">Get in touch</h3>
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          <li>
            <a href={`mailto:${SITE.email}`} className="hover:text-teal">
              {SITE.email}
            </a>
          </li>
          <li>
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-teal">
              {SITE.phone}
            </a>
          </li>
          <li>@InspireHubCIC</li>
          <li>{SITE.area}</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-white/50 lg:px-8">
        <p>
          © {new Date().getFullYear()} {SITE.name}. {SITE.legal.charityNote}.
        </p>
        <p className="mt-2 text-white/40">
          If you or someone you know is in crisis, call{' '}
          <a href="tel:116123" className="text-white/70 underline hover:text-white">
            Samaritans 116 123
          </a>{' '}
          (free, 24/7) or text SHOUT to 85258.
        </p>
      </div>
    </div>

    <motion.div
      className="spectrum-bar"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      style={{ transformOrigin: 'left' }}
    />
  </footer>
)
