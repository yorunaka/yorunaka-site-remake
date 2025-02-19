import React from 'react'
import portrait from '../assets/portrait.png'

const About = () => {
  const text = ["My name is Vincent Louis Fernando. I'm currently studied in Computer Science major at the Universitas Negeri Surabaya. I'm a developer who has interest at doing fun AI stuff, web development, UI/UX, and graphic design. I'm a gamer and technology enthusiast. I'm a fast learner and I'm always eager to learn new things. I'm a hard worker and always willing to put in extra effort to get the job done. I'm also ready for collaborative environment and always open for work within a team."]

  return (
    <section id="about" className="pt-16 lg:pt-32 pb-16">
    <div className="">
        <div className="w-full flex flex-wrap md:gap-2 md:flex-nowrap">
            <div className="self-center md:w-auto md:self-center lg:mt-16 lg:w-1/2 lg:self-start">
                <img src={portrait}alt="portrait" className="mx-auto sm:max-w-xs md:max-w-md lg:max-w-lg">
                </img>
            </div>
            <div className="bg-black w-full h-0.5 m-4 mb-0 md:hidden lg:hidden">
              <br />
            </div>
            <div className="self-center px-4 pt-6 lg:mb-40 lg:w-1/2 lg:self-end">
                <h1 className="text-2xl font-semibold mb-3 lg:text-4xl">About Me</h1>
                <p className="leading-relaxed font-normal lg:mr-28">
                  {text}
                </p>
            </div>
        </div>    
    </div>
</section>
  )
}

export default About