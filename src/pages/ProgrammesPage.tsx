import { Handshake, School, Sparkles, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/sections/PageHero'
import { ContentBand } from '../components/sections/ContentBand'
import { CTABand } from '../components/sections/CTABand'
import { BentoCard, BentoGrid } from '../components/ui/BentoGrid'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '../components/ui/Tabs'

export const ProgrammesPage = () => (
  <>
    <PageHero
      backdrop="default"
      eyebrow="Programmes & services"
      title="Programmes with depth — not drop‑ins"
      subtitle="Explore what we deliver in schools and in community spaces. Switch tabs to see a different programme mix (with clear outcomes + tone)."
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          to="/contact"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
        >
          Talk about a programme
          <Sparkles className="h-4 w-4" aria-hidden />
        </Link>
        <Link
          to="/schools"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-0 px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:border-brand-200 hover:bg-brand-50"
        >
          For schools & professionals
        </Link>
      </div>
    </PageHero>

    <ContentBand>
      <TabsRoot defaultValue="Schools">
        <TabsList aria-label="Programme categories">
          <TabsTrigger value="Schools" icon={<School className="h-4 w-4" aria-hidden />}>
            Schools
          </TabsTrigger>
          <TabsTrigger value="Community" icon={<UsersRound className="h-4 w-4" aria-hidden />}>
            Community
          </TabsTrigger>
          <TabsTrigger value="Leadership" icon={<Handshake className="h-4 w-4" aria-hidden />}>
            Leadership
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Schools">
          <BentoGrid className="mt-6">
            <BentoCard
              className="md:col-span-4"
              eyebrow="Schools"
              title="PSHE‑aligned workshops"
              description="Interactive sessions that match your timetable — trauma‑informed, youth‑friendly, and measurable."
              icon={<School className="h-5 w-5" aria-hidden />}
              background={<div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.14),transparent_42%),radial-gradient(circle_at_90%_10%,rgba(20,184,166,0.12),transparent_40%)]" />}
              footer={
                <Link to="/contact" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Request a workshop outline →
                </Link>
              }
            />
            <BentoCard
              className="md:col-span-2"
              eyebrow="Schools"
              title="Wellbeing assemblies"
              description="Short, warm, high-impact sessions that land with students."
              icon={<Sparkles className="h-5 w-5" aria-hidden />}
              background={<div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.14),transparent_40%)]" />}
            />
            <BentoCard
              className="md:col-span-3"
              eyebrow="Safeguarding"
              title="Clear pathways + consent"
              description="Safeguarding, referrals, and consent are built into delivery — not added later."
              icon={<Handshake className="h-5 w-5" aria-hidden />}
              background={<div className="h-full w-full bg-[radial-gradient(circle_at_70%_25%,rgba(249,115,22,0.12),transparent_40%)]" />}
            />
            <BentoCard
              className="md:col-span-3"
              eyebrow="Inclusion"
              title="Participation without pressure"
              description="Opt‑in prompts, calm spaces, and inclusive facilitation that respects every story."
              icon={<UsersRound className="h-5 w-5" aria-hidden />}
            />
          </BentoGrid>
        </TabsContent>

        <TabsContent value="Community">
          <BentoGrid className="mt-6">
            <BentoCard
              className="md:col-span-3"
              eyebrow="Community"
              title="After‑school & weekend sessions"
              description="Consistent rhythm, fun delivery, and spaces where young people feel they belong."
              icon={<UsersRound className="h-5 w-5" aria-hidden />}
            />
            <BentoCard
              className="md:col-span-3"
              eyebrow="Movement"
              title="Sport + wellbeing"
              description="Inclusive activity designed for confidence, teamwork, and stress reduction."
              icon={<Sparkles className="h-5 w-5" aria-hidden />}
              background={<div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.14),transparent_45%)]" />}
            />
            <BentoCard
              className="md:col-span-6"
              eyebrow="Events"
              title="Enrichment weeks + showcases"
              description="Creative, youth‑led moments that bring families and communities together — with consent-led storytelling."
              icon={<Handshake className="h-5 w-5" aria-hidden />}
              footer={
                <Link to="/events" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                  View events →
                </Link>
              }
            />
          </BentoGrid>
        </TabsContent>

        <TabsContent value="Leadership">
          <BentoGrid className="mt-6">
            <BentoCard
              className="md:col-span-4"
              eyebrow="Youth leadership"
              title="Youth voice programmes"
              description="Co‑design groups that shape delivery, language, and what success looks like."
              icon={<Handshake className="h-5 w-5" aria-hidden />}
              background={<div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.10),transparent_45%)]" />}
            />
            <BentoCard
              className="md:col-span-2"
              eyebrow="Mentoring"
              title="One‑to‑one check‑ins"
              description="Space to reflect, build routines, and find direction."
              icon={<UsersRound className="h-5 w-5" aria-hidden />}
            />
            <BentoCard
              className="md:col-span-6"
              eyebrow="Partnerships"
              title="Built with organisations"
              description="We partner with schools, charities, local authorities, and community groups — designing for local needs with transparency."
              icon={<School className="h-5 w-5" aria-hidden />}
              footer={
                <Link to="/contact" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Start a partnership →
                </Link>
              }
            />
          </BentoGrid>
        </TabsContent>
      </TabsRoot>
    </ContentBand>

    <ContentBand surface="1">
      <div className="rounded-3xl border border-border bg-surface-0 p-8 shadow-card sm:p-10">
        <h2 className="font-display text-xl font-semibold text-ink">Partnerships</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
          We collaborate with organisations to co‑design programmes that meet local needs — combining your insight with our delivery experience, evaluation, and youth‑centred practice.
        </p>
      </div>
    </ContentBand>

    <CTABand
      title="Tell us what your young people need"
      body="We’ll propose a programme outline, safeguarding approach, and timeline — transparent from day one."
      primary={{ label: 'Contact us', to: '/contact' }}
      secondary={{ label: 'For schools', to: '/schools' }}
    />
  </>
)
