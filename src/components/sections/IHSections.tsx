import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { IHMark } from '../ui/IHMark'

/* ── Page Banner ── */
type PageBannerProps = {
  title: string
  subtitle?: string
  breadcrumb?: { label: string; to?: string }[]
  watermark?: string
}

export const PageBanner = ({ title, subtitle, breadcrumb }: PageBannerProps) => (
  <section className="page-banner">
    <motion.div
      className="page-banner-glow"
      animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <IHMark className="page-banner-mark" />
    <div className="ih-wrap relative z-2">
      {breadcrumb && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-[14px] flex flex-wrap gap-1 text-[.85rem] font-semibold text-grey"
        >
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1">
              {i > 0 && <span>›</span>}
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-[color:var(--accent)]">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-ink">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
)

/* ── Section wrapper ── */
type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn('ih-section', className)}>
    <div className="ih-wrap">{children}</div>
  </section>
)

export const SectionHead = ({
  eyebrow,
  title,
  body,
  center,
}: {
  eyebrow?: string
  title: string
  body?: string
  center?: boolean
}) => (
  <div className={cn('section-head', center && 'mx-auto text-center')}>
    {eyebrow && <span className="ih-eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {body && <p>{body}</p>}
  </div>
)

/* ── Split layout ── */
export const SplitSection = ({
  image,
  imageAlt,
  reverse,
  children,
  className,
}: {
  image: string
  imageAlt: string
  reverse?: boolean
  children: ReactNode
  className?: string
}) => (
  <Section className={className}>
    <div className={cn('ih-split', reverse && 'rev')}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn('copy', reverse && 'md:order-2')}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="ih-photo"
      >
        <img src={image} alt={imageAlt} loading="lazy" />
      </motion.div>
    </div>
  </Section>
)

/* ── Info cards ── */
export const InfoCard = ({
  title,
  body,
  icon,
  to,
}: {
  title: string
  body: string
  icon?: string
  to?: string
}) => {
  const inner = (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="info-card h-full"
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <h3 className="mt-3 font-display text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-grey">{body}</p>
      {to && (
        <span className="mt-4 inline-block text-sm font-semibold" style={{ color: 'var(--accent)' }}>
          Learn more →
        </span>
      )}
    </motion.div>
  )
  return to ? <Link to={to}>{inner}</Link> : inner
}

export const CardGrid = ({
  children,
  cols = 3,
}: {
  children: ReactNode
  cols?: 2 | 3 | 4
}) => (
  <div
    className={cn(
      'grid gap-6',
      cols === 2 && 'sm:grid-cols-2',
      cols === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
      cols === 4 && 'sm:grid-cols-2 lg:grid-cols-4',
    )}
  >
    {children}
  </div>
)

/* ── Inspire values ── */
export const InspireGrid = () => {
  const values = [
    { letter: 'I', title: 'Inclusion', body: 'Everyone belongs. Every voice matters.', color: '#EC0F6E' },
    { letter: 'N', title: 'Nurture', body: 'We grow confidence and spark creativity.', color: '#FF7E00' },
    { letter: 'S', title: 'Support', body: 'A steady lift, a safe space to rise.', color: '#FFB400' },
    { letter: 'P', title: 'Possibility', body: 'No postcode. No limits. Just open doors.', color: '#8BC53F' },
    { letter: 'I', title: 'Imagination', body: 'Expression fuels power; ideas shape futures.', color: '#00AFDF' },
    { letter: 'R', title: 'Respect', body: 'We honour every story and challenge every barrier.', color: '#2C6FE8' },
    { letter: 'E', title: 'Empowerment', body: 'Together we rise — stronger, braver, unstoppable.', color: '#8E24C9' },
  ]
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
      {values.map((v, i) => (
        <motion.div
          key={`${v.letter}-${v.title}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          whileHover={{ y: -6, scale: 1.03 }}
          className="inspire-letter-card"
          style={{ background: v.color }}
        >
          <b>{v.letter}</b>
          <strong>{v.title}</strong>
          <span>{v.body}</span>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Gallery ── */
export const Gallery = ({
  images,
}: {
  images: readonly { src: string; alt: string; cap: string }[]
}) => (
  <div className="gallery-grid">
    {images.map((img, i) => (
      <motion.div
        key={img.src}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className="gallery-tile"
      >
        <img src={img.src} alt={img.alt} loading="lazy" />
        <span className="gallery-cap">{img.cap}</span>
      </motion.div>
    ))}
  </div>
)

/* ── Stats ── */
export const StatRow = ({
  stats,
}: {
  stats: { num: string; label: string }[]
}) => (
  <div className="stat-row">
    {stats.map((s, i) => (
      <motion.div
        key={s.label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="text-center"
      >
        <b className="stat-num">{s.num}</b>
        <span className="stat-label">{s.label}</span>
      </motion.div>
    ))}
  </div>
)

/* ── CTA Band ── */
export const CtaBand = ({
  title,
  body,
  ctaLabel,
  ctaTo,
}: {
  title: string
  body?: string
  ctaLabel: string
  ctaTo: string
}) => (
  <Section className="section-ink">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="font-display text-2xl font-black md:text-3xl">{title}</h2>
      {body && <p className="mx-auto mt-3 max-w-xl text-white/70">{body}</p>}
      <Link to={ctaTo} className="btn btn-accent mt-8 inline-flex">
        {ctaLabel}
      </Link>
    </motion.div>
  </Section>
)

/* ── Newsletter ── */
export const NewsletterStrip = () => (
  <div className="newsletter-strip">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="font-display text-xl font-black md:text-2xl">Stay in the loop</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
        Get updates on programmes, events and opportunities across Birmingham.
      </p>
      <Link to="/contact" className="btn btn-outline mt-6 border-white text-white hover:bg-white hover:text-charcoal">
        Sign up for updates
      </Link>
    </motion.div>
  </div>
)

/* ── Callout ── */
export const Callout = ({ children, warn }: { children: ReactNode; warn?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={warn ? 'callout-warn' : 'callout'}
  >
    {children}
  </motion.div>
)

/* ── Quote ── */
export const QuoteCard = ({ quote, author, role }: { quote: string; author: string; role?: string }) => (
  <motion.blockquote
    whileHover={{ scale: 1.02 }}
    className="rounded-2xl bg-white p-6 shadow-soft"
  >
    <p className="text-lg italic leading-relaxed text-ink">&ldquo;{quote}&rdquo;</p>
    <footer className="mt-4">
      <cite className="not-italic font-semibold text-charcoal">{author}</cite>
      {role && <span className="block text-sm text-grey">{role}</span>}
    </footer>
  </motion.blockquote>
)

/* ── Event list ── */
export const EventList = ({
  events,
}: {
  events: { day: string; month: string; title: string; body: string }[]
}) => (
  <div>
    {events.map((ev, i) => (
      <motion.div
        key={ev.title}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="event-card"
      >
        <div className="event-date">
          <span className="event-date-num">{ev.day}</span>
          <span className="event-date-mon">{ev.month}</span>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold">{ev.title}</h3>
          <p className="text-sm text-grey">{ev.body}</p>
        </div>
      </motion.div>
    ))}
  </div>
)

/* ── Pills ── */
export const Pills = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-3">
    {items.map((item, i) => (
      <motion.div
        key={item}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.04 }}
        whileHover={{ scale: 1.04, x: 4 }}
        className="pill-item"
      >
        {item}
      </motion.div>
    ))}
  </div>
)
