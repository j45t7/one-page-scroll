import { useState, useEffect } from 'react'

export const useOnScreen = (ref) => {
  const [isOnScreen, setOnScreen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setOnScreen(entry.isIntersecting)
    )
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isOnScreen
}
