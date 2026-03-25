import { useEffect, useMemo, useState } from 'react'
import { cn } from '../../lib/cn'

type StickySubnavItem = {
  id: string
  label: string
  description?: string
}

type StickySubnavProps = {
  items: StickySubnavItem[]
  className?: string
  topOffsetPx?: number
}

export const StickySubnav = ({
  items,
  className,
  topOffsetPx = 96,
}: StickySubnavProps) => {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  const ids = useMemo(() => items.map((i) => i.id), [items])

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0))
        const next = visible[0]?.target?.id
        if (next) setActiveId(next)
      },
      {
        root: null,
        rootMargin: `-${topOffsetPx}px 0px -70% 0px`,
        threshold: 0.01,
      },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, topOffsetPx])

  const handleJump = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveId(id)
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        'sticky self-start rounded-3xl border border-border bg-surface-0 p-4 shadow-card',
        className,
      )}
      style={{ top: topOffsetPx }}
    >
      <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-subtle">
        On this page
      </p>
      <div className="space-y-1">
        {items.map((item) => {
          const isActive = item.id === activeId
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleJump(item.id)}
              aria-label={`Jump to ${item.label}`}
              className={cn(
                'flex w-full cursor-pointer flex-col gap-0.5 rounded-2xl px-3 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0',
                isActive
                  ? 'bg-brand-50 text-brand-700 ring-1 ring-brand-100'
                  : 'text-ink hover:bg-brand-50/60',
              )}
            >
              <span className="text-sm font-semibold">{item.label}</span>
              {item.description ? (
                <span className="text-xs text-ink-muted">{item.description}</span>
              ) : null}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

