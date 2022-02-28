import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-500 w-full fixed'>
      <ul className='list-none flex text-white container mx-auto h-24 p-6 justify-center items-center '>
        <li className='p-3 text-xl text-bold cursor-pointer hover:text-pink-300 transition duration-300 hover:text-2xl'>
          Home
        </li>
        <li className='p-3 text-xl text-bold cursor-pointer hover:text-pink-300 transition duration-300 hover:text-2xl'>
          About
        </li>
        <li className='p-3 text-xl text-bold cursor-pointer hover:text-pink-300 transition duration-300 hover:text-2xl'>
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
