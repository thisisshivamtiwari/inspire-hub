import type { ReactNode } from 'react'
import { usePageAccent } from '../../hooks/usePageAccent'
import { ScrollToTop } from './ScrollToTop'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { TopBar } from './TopBar'

type SiteLayoutProps = {
  children: ReactNode
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  usePageAccent()

  return (
    <>
      <ScrollToTop />
      <TopBar />
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </>
  )
}
