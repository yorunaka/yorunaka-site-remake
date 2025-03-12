import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Chatbot = () => {
  return (
    <div className='h-screen flex flex-col place-content-between'>
        <div className='p-4'>
            <div className='mockup-window rounded-md w-full h-full bg-white p-8'>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
                </div>
                <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-bubble">It was you who would bring balance to the Force</div>
                </div>
                <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-bubble">Not leave it in Darkness</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
                    </div>
                    <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="chat-bubble">It was you who would bring balance to the Force</div>
                    </div>
                    <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="chat-bubble">Not leave it in Darkness</div>
                </div>
                <div className='pt-8'>
                    <input type="text" placeholder='masukkan teks anda' className='input w-full' id="" />
                </div>
            </div>
        </div>
        <div className=''>
            <Footer/>
        </div>
    </div>
  )
}

export default Chatbot