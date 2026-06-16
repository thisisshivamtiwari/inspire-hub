import { Link } from 'react-router-dom'
import { MotionReveal } from '../ui/MotionReveal'
import { SafeImage } from '../ui/SafeImage'

type LinkCard = {
  title: string
  image: string
  to: string
}

type LinkCardsSectionProps = {
  title?: string
  cards: LinkCard[]
}

export const LinkCardsSection = ({
  title = 'Discover more',
  cards,
}: LinkCardsSectionProps) => (
  <section className="bg-charcoal py-16 lg:py-20">
    <div className="sb-container">
      <MotionReveal>
        <h2 className="text-center font-display text-3xl font-extrabold text-yellow sm:text-4xl">
          {title}
        </h2>
      </MotionReveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {cards.map((card, i) => (
          <MotionReveal key={card.to} delay={i * 0.1}>
            <Link
              to={card.to}
              className="sb-leaf group relative block aspect-4/3 overflow-hidden"
            >
              <SafeImage
                src={card.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/40 transition duration-300 group-hover:bg-charcoal/25" />
              <span className="absolute inset-0 flex items-center justify-center p-6 text-center font-display text-2xl font-extrabold text-white transition duration-300 group-hover:scale-105 sm:text-3xl">
                {card.title}
              </span>
            </Link>
          </MotionReveal>
        ))}
      </div>
    </div>
  </section>
)
