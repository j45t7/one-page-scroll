import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext'

const NavbarLink = ({ name }) => {
  const { activeLink, setActiveLink } = useContext(NavContext)

  const handleClick = () => {
    setActiveLink(name)
    document.getElementById(name).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <li
      onClick={handleClick}
      className={
        activeLink === name
          ? 'p-3 text-xl text-bold cursor-pointer text-pink-300 transition duration-300 capitalize delay-300'
          : 'p-3 text-xl text-bold cursor-pointer transition duration-300 capitalize'
      }
    >
      {name}
    </li>
  )
}

export default NavbarLink
