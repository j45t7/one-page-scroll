import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NavProvider from './context/NavContext'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavProvider>
        <Navbar />
        <Home />
        <About />
        <Contact />
      </NavProvider>
    </div>
  )
}

export default App
