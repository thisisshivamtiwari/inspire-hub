import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FOOTER_NAV, SITE } from '../../lib/site'
import { Container } from '../ui/Container'

export const SiteFooter = () => (
  <footer className="mt-auto border-t border-border bg-surface-0">
    <Container as="section" className="py-14 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="mb-4 flex items-center gap-3">
            <img
              src="/logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-2xl object-contain shadow-card"
            />
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                {SITE.name}
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-subtle">
                {SITE.tagline}
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
            Safe, vibrant, inclusive spaces for young people — education,
            enrichment, movement, and wellbeing across {SITE.area}.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-muted">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
              <a
                href={`mailto:${SITE.email}`}
                className="cursor-pointer hover:text-brand-700"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="cursor-pointer hover:text-brand-700">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
              <span>{SITE.area}</span>
            </li>
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
          {FOOTER_NAV.map((block) => (
            <div key={block.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-subtle">
                {block.title}
              </p>
              <ul className="space-y-2.5">
                {block.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm font-medium text-ink-muted transition hover:text-brand-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-subtle">
          © {new Date().getFullYear()} {SITE.name}. Community Interest Company.
          All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-ink-subtle">
          <span className="inline-flex items-center gap-1">
            <Heart className="h-3.5 w-3.5 text-coral-500" aria-hidden />
            Made for young people &amp; community
          </span>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-brand-700"
          >
            Instagram
          </a>
          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-brand-700"
          >
            Facebook
          </a>
          <a
            href={SITE.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-brand-700"
          >
            X / Twitter
          </a>
        </div>
      </div>
    </Container>
  </footer>
)
