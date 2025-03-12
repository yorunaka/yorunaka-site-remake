import React from 'react'
import projects from '../assets/projectData'


const Project = () => {

  return (
    <section id='project' className='pt-16 pb-16 lg:p-16'>
        <div className='w-full self-center px-4 mb-8 lg:text-center'>
          <h1 className='text-2xl font-semibold lg:text-4xl'>Projects</h1>
          <p className='lg:text-center'>See What I've Done!</p>
        </div>        
        <div className='w-full self-center px-4 mb-8'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>  
            {
            projects.map(({name, type, desc, linkToProject, linkToWebsite}, index)=> (
            <div className='grid grid-flow-row cursor-pointer bg-white rounded-md p-4 pb-2 shadow-lg shadow-slate-300 lg:hover:scale-105 lg:hover:transition lg:hover:delay-50' key={index}>
              <div className='pl-2 pr-2 text-xl font-bold'>
                {name}
              </div>
              <div className='pl-2 pr-2 text-sm text-slate-500'>
                {type}
              </div>
              <div className='pl-2 pr-2 text-sm leading-normal text-pretty'>
                {desc}
              </div>
              <div className='flex gap-4'>
                <a href={linkToProject}>
                  <div className='p-2 rounded-xs hover:transition hover:ease-in-out hover:bg-sky-300 text-blue-500 hover:text-blue-700'>
                    View Project
                  </div>
                </a>
                <div>
                  {linkToWebsite && (
                    <a href={linkToWebsite}>
                      <div className='p-2 rounded-xs hover:transition hover:ease-in-out hover:bg-sky-300 text-blue-500 hover:text-blue-700'>
                        View Live
                      </div>
                    </a>
                  )}
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