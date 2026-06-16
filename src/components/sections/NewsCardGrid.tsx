import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MotionReveal } from '../ui/MotionReveal'
import { OutlineButtonLink } from '../ui/OutlineButton'
import { SafeImage } from '../ui/SafeImage'

export type NewsCard = {
  title: string
  date: string
  category: string
  image: string
  to: string
}

type NewsCardGridProps = {
  title?: string
  cards: NewsCard[]
  viewAllTo?: string
}

export const NewsCardGrid = ({
  title = "What's happening",
  cards,
  viewAllTo = '/events',
}: NewsCardGridProps) => (
  <section className="bg-white py-16 lg:py-20">
    <div className="sb-container">
      <MotionReveal>
        <h2 className="font-display text-3xl font-extrabold text-red sm:text-4xl">{title}</h2>
      </MotionReveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <MotionReveal key={card.to} delay={i * 0.08}>
            <Link
              to={card.to}
              className="group block overflow-hidden bg-charcoal text-white shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="aspect-5/3 overflow-hidden">
                <SafeImage
                  src={card.image}
                  alt=""
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <article className="p-6">
                <h3 className="font-display text-lg font-extrabold leading-snug">{card.title}</h3>
                <p className="mt-2 text-sm text-white/60">{card.date}</p>
                <span className="mt-4 inline-block border border-white/40 px-3 py-1 text-xs font-bold uppercase">
                  {card.category}
                </span>
              </article>
            </Link>
          </MotionReveal>
        ))}
      </div>

      {viewAllTo ? (
        <MotionReveal className="mt-10 flex justify-center" delay={0.2}>
          <OutlineButtonLink to={viewAllTo} className="gap-3">
            See more
            <Plus className="h-4 w-4" aria-hidden />
          </OutlineButtonLink>
        </MotionReveal>
      ) : null}
    </div>
  </section>
)
