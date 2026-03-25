import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { MotionReveal } from '../ui/MotionReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Container } from '../ui/Container'
import { cn } from '../../lib/cn'
import { Marquee } from '../ui/Marquee'

const ITEMS = [
  {
    quote:
      'My daughter finally found a space where she feels seen. The team are warm, consistent, and genuinely on her side.',
    name: 'Parent · West Midlands',
    role: 'Community programme',
  },
  {
    quote:
      'Sessions helped our students name their emotions without shame. The facilitators make inclusion feel effortless.',
    name: 'Pastoral lead · Local school',
    role: 'School partnership',
  },
  {
    quote:
      'I didn’t think I’d speak in front of anyone — now I’m helping run our youth voice group.',
    name: 'Young person · 16',
    role: 'Youth leadership',
  },
] as const

export const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const active = ITEMS[index]!

  const handlePrev = () => {
    setIndex((i) => (i === 0 ? ITEMS.length - 1 : i - 1))
  }

  const handleNext = () => {
    setIndex((i) => (i === ITEMS.length - 1 ? 0 : i + 1))
  }

  return (
    <section className="border-b border-border bg-surface-1 py-16 sm:py-20 lg:py-24">
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow="Stories"
            title="Voices from our community"
            description="Anonymised reflections from families, schools, and young people — trust is at the centre of how we work."
          />
        </MotionReveal>

        <div className="mt-10">
          <Marquee pauseOnHover className="rounded-3xl border border-border bg-surface-0 shadow-soft [--duration:34s]">
            {[
              'Safe spaces',
              'Youth voice',
              'Belonging',
              'Confidence',
              'Consistency',
              'Community',
              'Wellbeing',
              'Growth',
              'Creativity',
              'Support',
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-border bg-surface-1 px-4 py-2 text-xs font-semibold tracking-tight text-ink-muted shadow-soft"
              >
                {t}
              </span>
            ))}
          </Marquee>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface-0 p-8 shadow-float sm:p-10">
            <Quote
              className="h-10 w-10 text-brand-200"
              aria-hidden
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.quote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="mt-4"
              >
                <p className="text-lg leading-relaxed text-ink sm:text-xl">
                  “{active.quote}”
                </p>
                <div className="mt-8 flex flex-col gap-1 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-ink">{active.name}</p>
                    <p className="text-sm text-ink-muted">{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-1.5">
                {ITEMS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      'h-2.5 w-2.5 cursor-pointer rounded-full transition',
                      i === index
                        ? 'bg-brand-600'
                        : 'bg-border hover:bg-ink-subtle',
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={handlePrev}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={handleNext}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
