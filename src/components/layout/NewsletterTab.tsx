import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE } from '../../lib/site'

/** Sport Birmingham–style fixed newsletter tab (narrow vertical strip, not full-screen) */
export const NewsletterTab = () => (
  <aside
    className="newsletter-sidebar fixed right-0 top-[26%] z-999 hidden min-h-[230px] w-10 bg-sky transition-all duration-400 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] sm:block"
    aria-label="Newsletter signup"
  >
    <Link
      to={SITE.newsletterUrl}
      className="flex h-full w-full rotate-90 items-center gap-3 whitespace-nowrap px-4 py-2 font-black text-white no-underline"
    >
      <span className="text-sm tracking-wide">Newsletter Signup</span>
      <ArrowRight className="h-6 w-6 shrink-0 stroke-white" strokeWidth={2.5} aria-hidden />
    </Link>
  </aside>
)
