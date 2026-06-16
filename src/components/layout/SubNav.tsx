import { NavLink, useLocation } from 'react-router-dom'
import { SUB_NAV } from '../../lib/site'
import { cn } from '../../lib/cn'

export const SubNav = () => {
  const { pathname } = useLocation()
  const section = SUB_NAV.find(
    (s) => pathname === s.prefix || (s.prefix !== '/' && pathname.startsWith(s.prefix)),
  )

  if (!section) return null

  return (
    <div className="bg-sky text-charcoal">
      <div className="sb-container">
        <nav aria-label={`${section.label} section`} className="overflow-x-auto">
          <ul className="flex min-w-max gap-1 py-2">
            {section.items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === section.prefix}
                  className={({ isActive }) =>
                    cn(
                      'block whitespace-nowrap px-4 py-2 text-sm font-bold transition',
                      isActive
                        ? 'bg-charcoal text-white'
                        : 'text-charcoal hover:bg-charcoal/10',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
