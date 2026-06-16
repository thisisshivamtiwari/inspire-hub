import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { OutlineButtonLink } from './components/ui/OutlineButton'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { EventsPage } from './pages/EventsPage'
import { HomePage } from './pages/HomePage'
import { ImpactPage } from './pages/ImpactPage'
import { MentalHealthPage } from './pages/MentalHealthPage'
import { PhysicalHealthPage } from './pages/PhysicalHealthPage'
import { PoliciesPage } from './pages/PoliciesPage'
import { ProgrammesPage } from './pages/ProgrammesPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { SchoolsPage } from './pages/SchoolsPage'
import { SupportPage } from './pages/SupportPage'
import { YouthZonePage } from './pages/YouthZonePage'

const NotFoundPage = () => (
  <div className="flex flex-1 flex-col items-center justify-center bg-off-white px-4 py-24 text-center">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-red">404</p>
    <h1 className="mt-3 font-display text-3xl font-extrabold text-charcoal">Page not found</h1>
    <p className="mt-2 max-w-md text-sm text-ink-muted">
      That page doesn't exist — try the menu or head home.
    </p>
    <OutlineButtonLink to="/" className="mt-8">
      Return home
    </OutlineButtonLink>
  </div>
)

const App = () => (
  <SiteLayout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/mental-health" element={<MentalHealthPage />} />
      <Route path="/physical-health" element={<PhysicalHealthPage />} />
      <Route path="/programmes" element={<ProgrammesPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/policies" element={<PoliciesPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/youth-zone" element={<YouthZonePage />} />
      <Route path="/schools" element={<SchoolsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </SiteLayout>
)

export default App
