import React from 'react'
import { useState, useEffect } from 'react'
import stacks from '../assets/stackData'
import { motion, useAnimation } from 'motion/react'
import { div } from 'motion/react-client'
 
const Skills = () => {
 
  return (
    <section id='skills' className='w-full self-center px-4 py-auto h-full'>
        <div className='lg:text-center'>
          <h1 className='text-2xl font-semibold lg:text-4xl'>Skills</h1>
          <p className='lg:text-center'>My Techstacks</p>
        </div>
        <div id='carousel' className='carousel w-full pt-8 pb-8 overflow-hidden'>
          <div className='carousel-item w-full grid grid-flow-col justify-center gap-4' id='item1'>
          {
            stacks.webDev.map(({img,name}, id) => (
                <div className='bg-white w-full px-2 py-auto shadow-md shadow-slate-300 rounded-lg lg:px-8 lg:py-8 
                hover:scale-105 hover:transition hover:delay-50 
                hover:rounded-lg hover:ease-in-out' key={`${id}`}>
                  <img src={img} alt={name} className='w-10 h-10 m-2 mx-auto lg:m-0 lg:w-full lg:h-20'/>
                  <h1 className='text-center hidden font-semibold pt-2 lg:block'>{name}</h1>
                </div>
            ))
          }
          </div>
          <div className='carousel-item w-full grid grid-flow-col justify-center gap-4' id='item2'>
          {
            stacks.graphicDes.map(({img,name}, id) => (
              <div className='bg-white w-full px-2 py-auto shadow-md shadow-slate-300 rounded-lg lg:px-8 lg:py-8 
              hover:scale-105 hover:transition hover:delay-50 
              hover:rounded-lg hover:ease-in-out' key={`${id}`}>
                <img src={img} alt={name} className='w-10 h-10 m-2 mx-auto lg:m-0 lg:w-full lg:h-20'/>
                <h1 className='text-center hidden font-semibold pt-2 lg:block'>{name}</h1>
              </div>
            ))
          }
          </div>
        </div>
          <div className="flex w-full justify-center gap-2 py-2">
              <div className="left-5 right-5 top-1/2 flex gap-2 -translate-y-1/2 transform justify-between">
                <a href="#item1" className="btn btn-circle">❮</a>                  
                    <a href="#item1" className="btn btn-md">1</a>
                    <a href="#item2" className="btn btn-md">2</a>
                <a href="#item2" className="btn btn-circle">❯</a>
              </div>  
          </div>
    </section>
  )
}

export default Skills