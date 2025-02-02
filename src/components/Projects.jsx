import React from 'react'

const Project = () => {

  const project = 
    {
      title: 'a',
      types: 'lupa',
      description: 'kalo gak lupa ya inget',
      linkToProject: 'b',
      linkToWebsite: 'c',
    }
  

  return (
    <section id='project' className='pt-16 pb-16 lg:p-16'>
        <div className='w-full self-center px-4 mb-8 lg:text-center'>
          <h1 className='text-2xl font-semibold lg:text-4xl'>Project</h1>
          <p className='lg:text-center'>See What I've Done!</p>
        </div>        
        <div className='w-full self-center px-4 mb-8'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <div className='grid grid-flow-row bg-white rounded-sm p-2'>
              <div className='text-lg'>
                {project.title}
              </div>
              <div className='text-sm'>
                {project.types}
              </div>
              <div className='text-lg'>
                {project.description}
              </div>
              <div className='flex gap-4 pt-2'>
                <a href={project.linkToProject}>
                  <div className='text-blue-500 hover:text-blue-700'>
                    View Project
                  </div>
                </a>
                <div>
                  <a href={project.linkToWebsite}>
                    <div className='text-blue-500 hover:text-blue-700'>
                      View Live
                    </div>
                  </a>
                </div>
              </div>
            </div>         
            
            <div className='grid grid-flow-row bg-white rounded-sm p-2'>
              <div className='text-lg'>
                {project.title}
              </div>
              <div className='text-sm'>
                {project.types}
              </div>
              <div className='text-lg'>
                {project.description}
              </div>
              <div className='flex gap-4 pt-2'>
                <a href={project.linkToProject}>
                  <div className='text-blue-500 hover:text-blue-700'>
                    View Project
                  </div>
                </a>
                <div>
                  <a href={project.linkToWebsite}>
                    <div className='text-blue-500 hover:text-blue-700'>
                      View Live
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Project