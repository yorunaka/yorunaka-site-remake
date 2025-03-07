import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Project from './components/Projects'
import Contacts from './components/Contacts'

function App() {

  return (
    <div className='bg-slate-400/25 h-full w-full top-0'>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contacts />
        <Footer />
    </div>
  )
}

export default App
