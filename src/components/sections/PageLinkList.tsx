import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  Equal,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { MotionReveal } from '../ui/MotionReveal'
import { OutlineButtonLink } from '../ui/OutlineButton'

export type PageLinkItem = {
  title: string
  body: string
  cta: { label: string; to: string }
  icon: LucideIcon
  color: 'red' | 'yellow' | 'sky' | 'charcoal'
  align?: 'left' | 'right'
}

const iconBg: Record<PageLinkItem['color'], string> = {
  red: 'bg-red',
  yellow: 'bg-yellow',
  sky: 'bg-sky',
  charcoal: 'bg-charcoal',
}

type PageLinkListProps = {
  title?: string
  items: PageLinkItem[]
}

export const PageLinkList = ({ title, items }: PageLinkListProps) => (
  <section className="bg-white py-16 lg:py-20">
    <div className="sb-container">
      {title ? (
        <MotionReveal>
          <h2 className="mb-12 font-display text-3xl font-extrabold text-charcoal">{title}</h2>
        </MotionReveal>
      ) : null}
      <div className="mx-auto max-w-4xl space-y-16">
        {items.map((item, index) => {
          const Icon = item.icon
          const reversed = item.align === 'right'

          return (
            <MotionReveal key={item.title} delay={index * 0.06}>
            <div
              className={cn(
                'grid items-center gap-8 md:grid-cols-2',
                reversed && 'md:[&>*:first-child]:order-2',
              )}
            >
              <div
                className={cn(
                  'sb-leaf flex aspect-square max-w-[220px] items-center justify-center text-white transition-transform duration-500 hover:scale-105',
                  iconBg[item.color],
                  reversed ? 'md:ml-auto' : '',
                )}
              >
                <Icon className="h-16 w-16" strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold text-charcoal">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">{item.body}</p>
                <div className="mt-6">
                  <OutlineButtonLink to={item.cta.to}>{item.cta.label}</OutlineButtonLink>
                </div>
              </div>
            </div>
            </MotionReveal>
          )
        })}
      </div>
    </div>
  </section>
)

export const PROGRAMME_LINKS: PageLinkItem[] = [
  {
    title: 'Mental health support',
    body: 'Early-intervention, youth-led wellbeing sessions that build resilience and healthy coping strategies.',
    cta: { label: 'Find out more', to: '/mental-health' },
    icon: HeartHandshake,
    color: 'red',
  },
  {
    title: 'Physical health & activity',
    body: 'Inclusive sport and movement programmes that reduce stress and build confidence.',
    cta: { label: 'Find out more', to: '/physical-health' },
    icon: Users,
    color: 'yellow',
    align: 'right',
  },
  {
    title: 'School programmes',
    body: 'PSHE-aligned workshops, assemblies, and enrichment tailored to your school.',
    cta: { label: 'Find out more', to: '/schools' },
    icon: BookOpen,
    color: 'sky',
  },
  {
    title: 'Youth zone',
    body: 'Creative gallery, youth voice, and achievements — built with consent and care.',
    cta: { label: 'Open youth zone', to: '/youth-zone' },
    icon: Sparkles,
    color: 'charcoal',
    align: 'right',
  },
  {
    title: 'Safeguarding',
    body: 'DBS-checked staff, clear policies, and a culture where every young person feels safe.',
    cta: { label: 'Read policies', to: '/policies' },
    icon: ShieldCheck,
    color: 'red',
  },
  {
    title: 'Remove barriers',
    body: 'We open doors to participation so opportunity is never limited by background or postcode.',
    cta: { label: 'Support our work', to: '/support' },
    icon: Equal,
    color: 'yellow',
    align: 'right',
  },
]
