import React, { useState, createContext } from 'react'

export const NavContext = createContext()

const NavProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('')

  const value = {
    activeLink,
    setActiveLink,
  }

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

export default NavProvider
