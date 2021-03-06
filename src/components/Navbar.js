import React from 'react'
import NavbarLink from './NavbarLink'

const links = [{ name: 'home' }, { name: 'about' }, { name: 'contact' }]

const Navbar = () => {
  return (
    <nav className='bg-slate-500 w-full fixed'>
      <ul className='list-none flex text-white container mx-auto h-24 p-6 justify-center items-center '>
        {links.map((link) => (
          <NavbarLink key={link.name} name={link.name} />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
