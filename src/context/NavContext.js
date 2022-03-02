import React, { useState, createContext } from 'react'

export const NavContext = createContext()

const NavProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('')

  const providerValue = {
    activeLink,
    setActiveLink,
  }

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  )
}

export default NavProvider
