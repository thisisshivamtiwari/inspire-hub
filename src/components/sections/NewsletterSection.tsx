import { SITE } from '../../lib/site'
import { MotionReveal } from '../ui/MotionReveal'
import { OutlineButtonLink } from '../ui/OutlineButton'

export const NewsletterSection = () => (
  <section className="sb-newsletter-split text-charcoal">
    <div className="sb-container grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
      <MotionReveal>
        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Newsletter Signup</h2>
        <p className="mt-4 max-w-md text-base leading-relaxed">
          Sign up for the latest news, events, and ways to support young people across {SITE.area}.
        </p>
      </MotionReveal>
      <MotionReveal className="flex justify-start lg:justify-end" delay={0.1}>
        <OutlineButtonLink to={SITE.newsletterUrl}>Newsletter Signup</OutlineButtonLink>
      </MotionReveal>
    </div>
  </section>
)
