import { CTABand } from '../components/sections/CTABand'
import { EventsPreview } from '../components/home/EventsPreview'
import { FeaturedHighlight } from '../components/home/FeaturedHighlight'
import { HeroHome } from '../components/home/HeroHome'
import { ImpactStats } from '../components/home/ImpactStats'
import { ProgrammesPreview } from '../components/home/ProgrammesPreview'
import { QuickLinks } from '../components/home/QuickLinks'
import { Testimonials } from '../components/home/Testimonials'
import { WhatWeDo } from '../components/home/WhatWeDo'

export const HomePage = () => (
  <>
    <HeroHome />
    <QuickLinks />
    <WhatWeDo />
    <FeaturedHighlight />
    <ProgrammesPreview />
    <ImpactStats />
    <Testimonials />
    <EventsPreview />
    <CTABand
      title="Partner with a youth‑first CIC"
      body="Whether you’re a school, a funder, or a neighbour — we’ll co‑design programmes that meet local need with warmth and rigour."
      primary={{ label: 'Start a conversation', to: '/contact' }}
      secondary={{ label: 'Support our work', to: '/support' }}
    />
  </>
)
