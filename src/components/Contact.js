import React from 'react'
import { useNav } from '../hooks/useNav'

const Contact = () => {
  const contactRef = useNav('contact')

  return (
    <div
      id='contact'
      className='h-screen bg-slate-500 flex justify-center items-center'
    >
      <h1 ref={contactRef} className='text-2xl'>
        Contact
      </h1>
    </div>
  )
}

export default Contact
