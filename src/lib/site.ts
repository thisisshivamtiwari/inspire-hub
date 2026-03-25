export const SITE = {
  name: 'Inspire Hub CIC',
  tagline: 'Inspire. Believe. Achieve.',
  email: 'info@inspirehubcic.org.uk',
  phone: '0121 123 4567',
  area: 'Birmingham & the West Midlands',
  social: {
    instagram: 'https://instagram.com/InspireHubCIC',
    facebook: 'https://facebook.com/InspireHubCIC',
    twitter: 'https://twitter.com/InspireHubCIC',
  },
} as const

export type NavItem = {
  label: string
  to: string
}

/** Primary header links — remainder live under “More” + footer */
export const HEADER_MAIN_NAV: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'Mental health', to: '/mental-health' },
  { label: 'Physical health', to: '/physical-health' },
  { label: 'Events', to: '/events' },
  { label: 'Impact', to: '/impact' },
  { label: 'Contact', to: '/contact' },
]

export const HEADER_MORE_NAV: NavItem[] = [
  { label: 'Resources', to: '/resources' },
  { label: 'Youth zone', to: '/youth-zone' },
  { label: 'Schools & professionals', to: '/schools' },
  { label: 'Support us', to: '/support' },
  { label: 'Policies', to: '/policies' },
]

export const ALL_PAGES_NAV: NavItem[] = [
  ...HEADER_MAIN_NAV.filter((l) => l.to !== '/'),
  ...HEADER_MORE_NAV,
]

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: 'What we do',
    items: [
      { label: 'Programmes', to: '/programmes' },
      { label: 'Mental health support', to: '/mental-health' },
      { label: 'Physical health & activity', to: '/physical-health' },
      { label: 'Events & workshops', to: '/events' },
      { label: 'Resources hub', to: '/resources' },
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
      { label: 'For schools & professionals', to: '/schools' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]
