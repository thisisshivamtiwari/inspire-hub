import type { ReactNode } from 'react'
import { ScrollToTop } from './ScrollToTop'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

type SiteLayoutProps = {
  children: ReactNode
}

export const SiteLayout = ({ children }: SiteLayoutProps) => (
  <>
    <ScrollToTop />
    <SiteHeader />
    <main className="flex-1">{children}</main>
    <SiteFooter />
  </>
)
