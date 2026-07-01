export const SITE = {
  name: 'Inspire Hub CIC',
  brandWordmark: 'INSPIRE HUB',
  brandTagline: 'INSPIRE · BELIEVE · ACHIEVE',
  tagline: 'Inspire. Believe. Achieve.',
  email: 'info@inspirehubcic.org.uk',
  phone: '0121 123 4567',
  area: 'Birmingham & the West Midlands',
  legal: {
    charityNote: 'Community Interest Company',
  },
  social: {
    instagram: 'https://instagram.com/InspireHubCIC',
    facebook: 'https://facebook.com/Facebook',
    twitter: 'https://twitter.com/InspireHubCIC',
  },
} as const

export type NavItem = { label: string; to: string }

export type NavGroup = {
  label: string
  items: NavItem[]
}

/** Primary navigation — matches html_reference */
export const MAIN_NAV: (NavItem | NavGroup)[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Wellbeing',
    items: [
      { label: 'Mental Health Support', to: '/mental-health' },
      { label: 'Physical Health & Activity', to: '/physical-health' },
    ],
  },
  {
    label: 'Programmes',
    items: [
      { label: 'Programmes & Services', to: '/programmes' },
      { label: 'Events & Workshops', to: '/events' },
      { label: 'For Schools & Professionals', to: '/schools' },
    ],
  },
  { label: 'Youth Zone', to: '/youth-zone' },
  {
    label: 'Resources',
    items: [
      { label: 'Resources Hub', to: '/resources' },
      { label: 'Impact & Stories', to: '/impact' },
      { label: 'Policies', to: '/policies' },
    ],
  },
  { label: 'Support Us', to: '/support' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_EXPLORE: NavItem[] = [
  { label: 'About Us', to: '/about' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'Events', to: '/events' },
  { label: 'Impact & Stories', to: '/impact' },
]

export const FOOTER_WELLBEING: NavItem[] = [
  { label: 'Mental Health', to: '/mental-health' },
  { label: 'Physical Health', to: '/physical-health' },
  { label: 'Resources Hub', to: '/resources' },
  { label: 'Youth Zone', to: '/youth-zone' },
]

/** Per-page accent colour — matches html_reference body --accent */
export const PAGE_ACCENTS: Record<string, string> = {
  '/': '#EC0F6E',
  '/about': '#8E24C9',
  '/contact': '#E2620A',
  '/events': '#DE0C66',
  '/impact': '#C98A00',
  '/mental-health': '#0094BE',
  '/physical-health': '#E2620A',
  '/policies': '#6E5BD0',
  '/programmes': '#2C6FE8',
  '/resources': '#5E9E16',
  '/schools': '#0094BE',
  '/support': '#D8260A',
  '/youth-zone': '#C61C8E',
}

export const getPageAccent = (pathname: string) => {
  if (PAGE_ACCENTS[pathname]) return PAGE_ACCENTS[pathname]
  for (const [prefix, color] of Object.entries(PAGE_ACCENTS)) {
    if (prefix !== '/' && pathname.startsWith(prefix)) return color
  }
  return '#8E24C9'
}

/** Local Inspire Hub photography — public/images */
export const IMAGES = {
  climbing: '/images/climbing.jpeg',
  centre: '/images/centre.jpeg',
  teambuilding: '/images/teambuilding.jpeg',
  grounds: '/images/grounds.jpeg',
  den: '/images/den.jpeg',
  campfire: '/images/campfire.jpeg',
  classroom: '/images/classroom.jpeg',
  harnesses: '/images/harnesses.jpeg',
} as const

export const IMAGE_PLACEHOLDER = '/images/placeholder.svg'

export const GALLERY_IMAGES = [
  { src: IMAGES.climbing, alt: 'High ropes', cap: 'High ropes' },
  { src: IMAGES.harnesses, alt: 'Team challenge', cap: 'Team challenge' },
  { src: IMAGES.teambuilding, alt: 'Build & launch', cap: 'Build & launch' },
  { src: IMAGES.grounds, alt: 'Giant chess', cap: 'Giant chess' },
  { src: IMAGES.den, alt: 'Den building', cap: 'Den building' },
  { src: IMAGES.campfire, alt: 'Campfire night', cap: 'Campfire night' },
  { src: IMAGES.centre, alt: 'Our base', cap: 'Our base' },
  { src: IMAGES.classroom, alt: 'Workshops', cap: 'Workshops' },
] as const

export const INSPIRE_VALUES = [
  { letter: 'I', title: 'Inclusion', body: 'Everyone belongs. Every voice matters.', color: 'var(--pink)' },
  { letter: 'N', title: 'Nurture', body: 'We grow confidence and spark creativity.', color: 'var(--orange)' },
  { letter: 'S', title: 'Support', body: 'A steady lift, a safe space to rise.', color: 'var(--amber)' },
  { letter: 'P', title: 'Possibility', body: 'No postcode. No limits. Just open doors.', color: 'var(--lime)' },
  { letter: 'I', title: 'Imagination', body: 'Expression fuels power; ideas shape futures.', color: 'var(--teal)' },
  { letter: 'R', title: 'Respect', body: 'We honour every story and challenge every barrier.', color: 'var(--blue)' },
  { letter: 'E', title: 'Empowerment', body: 'Together we rise — stronger, braver, unstoppable.', color: 'var(--purple)' },
] as const
