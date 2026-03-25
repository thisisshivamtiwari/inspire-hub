import { useEffect, useRef, useState } from 'react'

export const useInView = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true)
        }
      },
      { root: null, rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}
