import React from 'react'
import { useNav } from '../hooks/useNav'

const About = () => {
  const aboutRef = useNav('about')
  return (
    <div
      id='about'
      className='h-screen bg-slate-400 flex justify-center items-center'
    >
      <h1 ref={aboutRef} className='text-2xl'>
        About
      </h1>
    </div>
  )
}

export default About
