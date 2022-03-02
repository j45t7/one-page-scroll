import React from 'react'
import NavbarLinks from './NavbarLinks'

const links = [
  { name: 'home', scrollToName: 'home' },
  { name: 'about', scrollToName: 'about' },
  { name: 'contact', scrollToName: 'contact' },
]

const Navbar = () => {
  return (
    <nav className='bg-slate-500 w-full fixed'>
      <ul className='list-none flex text-white container mx-auto h-24 p-6 justify-center items-center '>
        {links.map((link) => (
          <NavbarLinks
            key={link.name}
            name={link.name}
            scrollToName={link.scrollToName}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
