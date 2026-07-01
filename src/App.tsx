import { AnimatePresence, motion } from 'framer-motion'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
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
  <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink">404</p>
    <h1 className="mt-3 font-display text-3xl font-extrabold text-charcoal">Page not found</h1>
    <p className="mt-2 max-w-md text-sm text-grey">
      That page doesn't exist — try the menu or head home.
    </p>
    <Link to="/" className="btn btn-primary mt-8">
      Return home
    </Link>
  </div>
)

const App = () => {
  const location = useLocation()

  return (
    <SiteLayout>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-1 flex-col"
        >
          <Routes location={location}>
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
        </motion.div>
      </AnimatePresence>
    </SiteLayout>
  )
}

export default App
