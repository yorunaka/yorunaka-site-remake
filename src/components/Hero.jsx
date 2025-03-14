import React from 'react'
import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from 'react'
import logo from '../assets/logo.gif'

const Hero = () => {
  const text = ["Front End Web Developer", "Graphic Designer", "AI Enthusiast", "Wutdeheel"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let typingSpeed = 100
    let deletingSpeed = 50
    
    const currentText = text[currentIndex]

    if (isDeleting){
        setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1))
      }, deletingSpeed)
    } else {
        setTimeout(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1))
      }, typingSpeed)
    }
    
    if (!isDeleting && displayedText === currentText){
        setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayedText === ''){
      setIsDeleting(false)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length)
    }
    
  }, [displayedText, isDeleting, currentIndex, text])

  return (
    <div>
     <section id="home" className="pt-20 w-full">
        <div className="container ">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2 lg:pl-56 lg:pt-24">
              <h1 className="text-2xl lg:text-4xl">
                Hello,
                <span className="block text-4xl font-bold lg:text-6xl">
                  Vincent{" "}
                  <span className="text-2xl font-normal lg:text-4xl">
                    here.
                  </span>
                </span>
              </h1>
              <p className="leading-relaxed font-normal lg:text-lg">
                {`I'm a `}
                  <motion.span 
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{
                    duration:0.25
                  }}
                  key={currentIndex}
                  >
                  {displayedText}
                  </motion.span>
                  <motion.span
                  className='font-bold'
                  animate={{opacity:[1,0]}}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity
                  }}
                  >
                    |
                  </motion.span>
                who has a great vision about future.
              </p>
              <p className="block font-normal mb-5 lg:text-lg">Coding 4 Fun!</p>
              <p />
              <a
                href="mailto:vincentfernando.work@gmail.com"
                className="font-semibold px-3 py-2 text-sm rounded-md lg:text-base bg-sky-400 text-white lg:px-6 lg:py-3 lg:rounded-xl hover:bg-sky-600 hover:text-sky-200 transition ease-in-out duration-300 delay-100"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero