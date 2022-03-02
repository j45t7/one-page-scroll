import React from 'react'
import { useNav } from '../hooks/useNav'

const Home = () => {
  const homeRef = useNav('home')

  return (
    <div
      id='home'
      className='h-screen bg-slate-300 flex justify-center items-center'
    >
      <h1 ref={homeRef} className='text-2xl'>
        Home
      </h1>
    </div>
  )
}

export default Home
