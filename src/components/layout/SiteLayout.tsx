import type { ReactNode } from 'react'
import { ScrollToTop } from './ScrollToTop'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { SubNav } from './SubNav'
import { NewsletterTab } from './NewsletterTab'
import { NewsletterSection } from '../sections/NewsletterSection'

type SiteLayoutProps = {
  children: ReactNode
  hideNewsletter?: boolean
}

export const SiteLayout = ({ children, hideNewsletter }: SiteLayoutProps) => (
  <>
    <ScrollToTop />
    <div id="top" />
    <SiteHeader />
    <SubNav />
    <main id="main-content" className="flex-1">
      {children}
    </main>
    {hideNewsletter ? null : <NewsletterSection />}
    <SiteFooter />
    <NewsletterTab />
  </>
)
