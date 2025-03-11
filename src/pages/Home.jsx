import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Project from '../components/Projects'
import Contacts from '../components/Contacts'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contacts />
        <Footer />
    </div>
  )
}

export default Home