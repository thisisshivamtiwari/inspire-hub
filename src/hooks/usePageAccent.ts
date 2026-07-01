import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageAccent } from '../lib/site'

export const usePageAccent = () => {
  const { pathname } = useLocation()
  const accent = getPageAccent(pathname)

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
  }, [accent])

  return accent
}
