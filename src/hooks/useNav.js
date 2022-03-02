import { useRef, useContext, useEffect } from 'react'
import { useOnScreen } from './useOnScreen'
import { NavContext } from '../context/NavContext'

export const useNav = (navLink) => {
  const ref = useRef(null)

  const { setActiveLink } = useContext(NavContext)

  const isOnScreen = useOnScreen(ref)

  useEffect(() => {
    if (isOnScreen) {
      setActiveLink(navLink)
    }
  }, [isOnScreen, setActiveLink, navLink])

  return ref
}
