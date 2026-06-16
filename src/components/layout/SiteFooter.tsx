import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FOOTER_NAV, SITE } from '../../lib/site'
import { BrandLogo } from '../ui/BrandLogo'

const socials = [
  { label: 'Twitter', href: SITE.social.twitter },
  { label: 'Instagram', href: SITE.social.instagram },
  { label: 'Facebook', href: SITE.social.facebook },
  { label: 'YouTube', href: SITE.social.youtube },
  { label: 'LinkedIn', href: SITE.social.linkedin },
] as const

export const SiteFooter = () => (
  <footer className="mt-auto bg-charcoal text-white">
    <div className="sb-container grid gap-12 py-14 lg:grid-cols-12 lg:py-16">
      <div className="lg:col-span-4">
        <BrandLogo size="md" tone="light" layout="stacked" className="items-start text-left" />
      </div>

      <div className="lg:col-span-4">
        <h2 className="text-lg font-extrabold">Get in touch</h2>
        <ul className="mt-4 space-y-2 text-sm font-semibold">
          <li>
            <a href={`mailto:${SITE.email}`} className="hover:text-sky">
              {SITE.email}
            </a>
          </li>
          <li>
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-sky">
              {SITE.phone}
            </a>
          </li>
          <li className="text-white/70">{SITE.area}</li>
        </ul>
      </div>

      <div className="lg:col-span-4">
        <h2 className="text-lg font-extrabold">Connect</h2>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:text-sky"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:col-span-12 lg:grid lg:grid-cols-3 lg:gap-10 lg:border-t lg:border-white/10 lg:pt-10">
        {FOOTER_NAV.map((block) => (
          <div key={block.title}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">{block.title}</p>
            <ul className="mt-4 space-y-2">
              {block.items.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm font-semibold hover:text-sky">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-white/10 bg-white text-charcoal">
      <div className="sb-container flex flex-col gap-4 py-4 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <p className="text-ink-muted">{SITE.legal.charityNote}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/policies" className="hover:text-red">
            Privacy Policy
          </Link>
          <Link to="/policies" className="hover:text-red">
            Cookie Policy
          </Link>
        </div>
        <a href="#top" className="inline-flex items-center gap-1 hover:text-red">
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </div>
  </footer>
)
