import React from 'react'
import { techstack } from './techstack.js'
import { desc, img } from 'motion/react-client'
 
const Skills = ({techstack}) => {
  return (
    <section id='skills' className='container w-full self-center px-4 mb-8'>
        <div className=''>
          <h1 className='text-2xl font-semibold lg:text-4xl'>Skills</h1>
          <p className='lg:text-center'>My Techstacks</p>
        </div>
        <div id='carousel' className='pt-4'>
          {
              techstack.map((tech, id) => (
                <div className='bg-white w-fit px-5 py-8 my-auto rounded-lg' key={id}>
                  <img src={tech.src} alt={tech.name} />
                </div>    
              ))
          }
        </div>
    </section>
  )
}

export default Skills