import { useEffect, useState } from 'react'

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3

export const useCountUp = (
  end: number,
  isActive: boolean,
  durationMs = 1600,
) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isActive) return

    let frame: number
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      setValue(Math.round(end * easeOutCubic(t)))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [end, isActive, durationMs])

  return value
}
