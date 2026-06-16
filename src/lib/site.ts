export const SITE = {
  name: 'Inspire Hub CIC',
  brandWordmark: 'INSPIRE HUB',
  brandTagline: 'INSPIRE | BELIEVE | ACHIEVE',
  tagline: 'Inspire. Believe. Achieve.',
  email: 'info@inspirehubcic.org.uk',
  phone: '0121 123 4567',
  area: 'Birmingham & the West Midlands',
  legal: {
    charityNote: 'Community Interest Company',
    companyNumber: 'Pending registration',
  },
  social: {
    instagram: 'https://instagram.com/InspireHubCIC',
    facebook: 'https://facebook.com/InspireHubCIC',
    twitter: 'https://twitter.com/InspireHubCIC',
    linkedin: 'https://linkedin.com/company/inspirehubcic',
    youtube: 'https://youtube.com/@InspireHubCIC',
  },
  newsletterUrl: '/contact',
} as const

export type NavItem = {
  label: string
  to: string
}

/** Full-screen menu — Sport Birmingham pattern */
export const MAIN_MENU: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'Support us', to: '/support' },
  { label: 'Impact', to: '/impact' },
  { label: 'Events', to: '/events' },
  { label: 'Youth zone', to: '/youth-zone' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

/** Contextual sub-nav per section */
export const SUB_NAV: { prefix: string; label: string; items: NavItem[] }[] = [
  {
    prefix: '/about',
    label: 'About',
    items: [
      { label: 'About us', to: '/about' },
      { label: 'Policies', to: '/policies' },
      { label: 'Impact', to: '/impact' },
    ],
  },
  {
    prefix: '/programmes',
    label: 'Programmes',
    items: [
      { label: 'Programmes', to: '/programmes' },
      { label: 'Mental health', to: '/mental-health' },
      { label: 'Physical health', to: '/physical-health' },
      { label: 'Schools', to: '/schools' },
    ],
  },
  {
    prefix: '/mental-health',
    label: 'Programmes',
    items: [
      { label: 'Programmes', to: '/programmes' },
      { label: 'Mental health', to: '/mental-health' },
      { label: 'Physical health', to: '/physical-health' },
      { label: 'Schools', to: '/schools' },
    ],
  },
  {
    prefix: '/physical-health',
    label: 'Programmes',
    items: [
      { label: 'Programmes', to: '/programmes' },
      { label: 'Mental health', to: '/mental-health' },
      { label: 'Physical health', to: '/physical-health' },
      { label: 'Schools', to: '/schools' },
    ],
  },
  {
    prefix: '/schools',
    label: 'Programmes',
    items: [
      { label: 'Programmes', to: '/programmes' },
      { label: 'Mental health', to: '/mental-health' },
      { label: 'Physical health', to: '/physical-health' },
      { label: 'Schools', to: '/schools' },
    ],
  },
  {
    prefix: '/support',
    label: 'Support us',
    items: [
      { label: 'Donate', to: '/support' },
      { label: 'Volunteer', to: '/support#volunteer' },
      { label: 'Partner', to: '/support#partner' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: 'What we do',
    items: [
      { label: 'Programmes', to: '/programmes' },
      { label: 'Mental health', to: '/mental-health' },
      { label: 'Physical health', to: '/physical-health' },
      { label: 'Events', to: '/events' },
      { label: 'Resources', to: '/resources' },
    ],
  },
  {
    title: 'Organisation',
    items: [
      { label: 'About us', to: '/about' },
      { label: 'Impact & stories', to: '/impact' },
      { label: 'Policies', to: '/policies' },
      { label: 'Support us', to: '/support' },
    ],
  },
  {
    title: 'Community',
    items: [
      { label: 'Youth zone', to: '/youth-zone' },
      { label: 'For schools', to: '/schools' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

/** Local fallback when a remote image fails to load */
export const IMAGE_PLACEHOLDER = '/images/placeholder.svg'

const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

/** Youth, education & wellbeing photography — replace with consented Inspire Hub assets */
export const IMAGES = {
  heroHome: unsplash('photo-1523240795612-9a054b0db644', 1600),
  heroProgrammes: unsplash('photo-1529390079861-591de354faf5', 1600),
  heroSupport: unsplash('photo-1517486808906-6ca8b3f04846', 1600),
  activity: unsplash('photo-1522202176988-66273c2fd55f', 1200),
  community: unsplash('photo-1529156069898-49953e39b3ac', 1200),
  card1: unsplash('photo-1503676260728-1c00da094a0b', 800),
  card2: unsplash('photo-1552664730-d307ca884978', 800),
  card3: unsplash('photo-1517245386807-bb43f82c33c4', 800),
  discover1: unsplash('photo-1571019613454-1cb2f99b2d8b', 900),
  discover2: unsplash('photo-1503454537195-1dcabb73ffb9', 900),
  wellbeing: unsplash('photo-1522071820081-009f0129c71c', 1200),
} as const
