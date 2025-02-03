import React from 'react'
import projects from '../assets/projectData'

const Project = () => {

  return (
    <section id='project' className='pt-16 pb-16 lg:p-16'>
        <div className='w-full self-center px-4 mb-8 lg:text-center'>
          <h1 className='text-2xl font-semibold lg:text-4xl'>Project</h1>
          <p className='lg:text-center'>See What I've Done!</p>
        </div>        
        <div className='w-full self-center px-4 mb-8'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>  
            {
            projects.map(({name, type, desc, linkToProject, linkToWebsite}, index)=> (
            <div className='grid grid-flow-row bg-white rounded-md p-2' key={index}>
              <div className='text-xl font-bold'>
                {name}
              </div>
              <div className='text-sm text-slate-500'>
                {type}
              </div>
              <div className='text-sm leading-normal text-pretty'>
                {desc}
              </div>
              <div className='flex gap-4 pt-2'>
                <a href={linkToProject}>
                  <div className='text-blue-500 hover:text-blue-700'>
                    View Project
                  </div>
                </a>
                <div>
                  {
                    
                  }
                  <a href={linkToWebsite}>
                    <div className='text-blue-500 hover:text-blue-700'>
                      View Live
                    </div>
                  </a>
                </div>
              </div>
            </div>

              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Project