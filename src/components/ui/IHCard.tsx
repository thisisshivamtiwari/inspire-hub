import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type ChipColor =
  | 'pink'
  | 'blue'
  | 'teal'
  | 'orange'
  | 'purple'
  | 'lime'
  | 'amber'
  | 'red'
  | 'accent'

type IHCardProps = {
  icon: string
  title: string
  body: string
  color?: ChipColor
  to?: string
  moreLabel?: string
}

export const IHCard = ({
  icon,
  title,
  body,
  color = 'accent',
  to,
  moreLabel,
}: IHCardProps) => {
  const inner = (
    <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }} className="ih-card h-full">
      <div className={cn('ih-chip', `chip-${color}`)}>{icon}</div>
      <h3 className="font-display text-xl font-extrabold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-grey">{body}</p>
      {moreLabel && (
        <span className="mt-3 inline-block text-sm font-bold" style={{ color: 'var(--accent)' }}>
          {moreLabel}
        </span>
      )}
    </motion.div>
  )
  return to ? <Link to={to}>{inner}</Link> : inner
}
