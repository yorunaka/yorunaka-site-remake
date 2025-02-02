import React from 'react'
import { useState, useEffect } from 'react'
import techstack from '../assets/stackData'
import { motion, useAnimation } from 'motion/react'
 
const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  return (
    <section id='skills' className='w-full self-center px-4 py-auto h-full'>
        <div className='lg:text-center'>
          <h1 className='text-2xl font-semibold lg:text-4xl'>Skills</h1>
          <p className='lg:text-center'>My Techstacks</p>
        </div>
        <div id='carousel' className='pt-8 pb-8 overflow-hidden'>
          <motion.div
          className='px-4 flex gap-4'
          initial={{x: '50%'}}
          animate={{x: '-100%'}}
          transition={{
            ease: 'linear',
            duration: techstack.length * 7,
            repeat: Infinity,
          }}
          >
            {
                techstack.concat(techstack).map(({id, name, img}, index) => (
                  <div className='bg-white w-full px-8 py-8 lg:px-8 lg:py-8 rounded-lg hover:scale-105 hover:transition hover:delay-50 hover:rounded-lg hover:ease-in-out' key={`${index}`}>
                    <img src={img} alt={name} className='w-full h-auto'/>
                  </div>    
                ))
            }
          </motion.div>
        </div>
    </section>
  )
}

export default Skills