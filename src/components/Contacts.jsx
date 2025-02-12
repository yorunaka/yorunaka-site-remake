import React from 'react'

const Contacts = () => {
  return (
    <section id="contact" className="pb-16 lg:p-16">
        <div className="">
            <div className="flex flex-wrap">
                <div className="w-full self-center px-4 mb-8 text-center">
                    <h1 className="text-2xl font-semibold lg:text-4xl">Know More About Me!</h1>
                    <p>Follow my social media</p>
                </div>
            </div>
        </div>
        <div className=" ">
            <div className="flex flex-wrap justify-center">
                <div className="w-auto self-center px-4">
                        <div className="bg-white rounded-lg shadow-lg py-4 px-6 lg:">
                            <div className="flex justify-center space-x-5 ">
                                <a href="https://facebook.com/vincent2703"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook--v1.png" alt="facebook--v1"/></a>
                                <a href="https://instagram.com/feruu.nando"><img width="50" height="50" src="https://img.icons8.com/material-rounded/48/instagram-new.png" alt="instagram-new"/></a>
                                <a href="https://discord.com/users/579136952930926601"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/discord-logo.png" alt="discord-logo"/></a>
                                <a href="https://linkedin.com/in/vincent-louis-fernando"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/></a>
                                <a href="https://github.com/yorunaka"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a>
                            </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>  
    )
}

export default Contacts