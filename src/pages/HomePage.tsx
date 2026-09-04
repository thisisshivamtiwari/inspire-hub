import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HeroHome } from '../components/home/HeroHome'
import {
  Section,
  SectionHead,
  SplitSection,
} from '../components/sections/IHSections'
import { IHCard } from '../components/ui/IHCard'
import { Stagger, StaggerItem } from '../components/ui/Stagger'
import { IMAGES } from '../lib/site'

export const HomePage = () => (
  <>
    <HeroHome />

    <Section className="section-mist">
      <SectionHead
        eyebrow="What we do"
        title="Opening doors to opportunity"
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StaggerItem><IHCard icon="⚡" title="Empower" body="Through education and creative, physical and wellbeing programmes." color="pink" /></StaggerItem>
        <StaggerItem><IHCard icon="🔓" title="Remove barriers" body="We break down the obstacles that limit young people's participation." color="teal" /></StaggerItem>
        <StaggerItem><IHCard icon="⚖" title="Champion equality" body="We champion equality of access for every young person, everywhere." color="orange" /></StaggerItem>
        <StaggerItem><IHCard icon="💪" title="Build belonging" body="Confidence, resilience and a real sense of community belonging." color="blue" /></StaggerItem>
      </Stagger>
    </Section>

    <Section>
      <SectionHead eyebrow="Quick links" title="Where would you like to go?" />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StaggerItem><IHCard icon="🎯" title="Programmes" body="School, community and leadership programmes." color="blue" to="/programmes" moreLabel="Explore →" /></StaggerItem>
        <StaggerItem><IHCard icon="🎤" title="Youth Zone" body="Creative gallery, blog and achievements wall." color="pink" to="/youth-zone" moreLabel="Visit →" /></StaggerItem>
        <StaggerItem><IHCard icon="🛡" title="Safeguarding" body="How we keep every young person safe." color="purple" to="/policies" moreLabel="Read →" /></StaggerItem>
        <StaggerItem><IHCard icon="✉" title="Contact Us" body="Get in touch — we reply within 2 working days." color="orange" to="/contact" moreLabel="Say hello →" /></StaggerItem>
      </Stagger>
    </Section>

    <SplitSection className="section-mist" image={IMAGES.climbing} imageAlt="Young people on the high-ropes pole climb">
      <span className="ih-eyebrow" style={{ color: 'var(--orange)' }}>Featured highlight</span>
      <h2 className="font-display">Inspire Hub Enrichment Week</h2>
      <p>
        A celebration of creativity, sport and youth voice — a week of workshops, activities
        and connection that brings our whole community together.
      </p>
      <Link to="/events" className="btn mt-6 inline-flex bg-pink text-white">
        See what's on
      </Link>
    </SplitSection>

    <Section className="section-ink text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="ih-eyebrow" style={{ color: 'var(--teal)' }}>Our values</span>
        <h2 className="mt-2 font-display text-2xl font-black text-white md:text-3xl">
          Guided by INSPIRE
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-white/70">
          Inclusion, Nurture, Support, Possibility, Imagination, Respect and Empowerment shape
          everything we do.
        </p>
        <Link
          to="/about"
          className="btn mt-8 inline-flex border-2 border-white/50 bg-transparent text-white hover:bg-white hover:text-charcoal"
        >
          Read our story
        </Link>
      </motion.div>
    </Section>

    <div className="news-cta">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="news-cta-inner"
      >
        <div>
          <h2 className="font-display text-xl font-black md:text-2xl">Stay in the loop</h2>
          <p className="mt-1 text-sm text-white/70">
            Sessions, events and opportunities for young people near you.
          </p>
        </div>
        <Link to="/contact" className="btn bg-white text-charcoal hover:bg-mist">
          Sign up
        </Link>
      </motion.div>
    </div>
  </>
)
