import React from 'react'
import logo from '../assets/logo.gif'

const Hero = () => {
  return (
    <div>
     <section id="home" className="pt-20 ">
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
                A.K.A 
                <span className="block text-3xl font-medium lg:text-5xl">
                  Yorunaka
                </span>
              </h1>
              <p className="leading-relaxed font-normal lg:text-lg">
                {`I'm a front-end web developer who also interested in AI stuff and graphics design.`}
              </p>
              <p className="block font-normal mb-5 lg:text-lg">Coding 4 Fun!</p>
              <p />
              <a
                href="mailto:vincentfernando.work@gmail.com"
                className="font-semibold text-base bg-sky-400 text-white px-6 py-3 rounded-xl hover:bg-sky-600 hover:text-sky-200 transition ease-in-out duration-300 delay-100"
              >
                Contact Me
              </a>
            </div>
            <div className="w-full self-end relative lg:w-1/2">
              <div className="absolute bottom-0 -z-10 left-1/2 -translate-x-3/4 opacity-30 md:scale-75 md:-translate-x-3/4 md:translate-y-[100px] lg:opacity-100 lg:-z-10 lg:-translate-x-[200px] lg:translate-y-[75px]">
                <img
                  src={logo}
                  alt="logo"
                  className="max-w-full lg:scale-175"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero