import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  
  const getUserMessage = (value) => {
    setUserMessage(value)
  } 
  
  const handleSendMessage = (e) => {
    if(userMessage.trim === '') return 

    const newMessage = { sender: 'You', text: userMessage }
    const updatedChat = [...chatHistory, newMessage]

    setChatHistory(updatedChat);
    localStorage.setItem('chatHistory', JSON.stringify(updatedChat))

    setUserMessage('')
  }

  const getUserMessageFromStorage = () => {
    let a = localStorage.getItem('userMessage')
    
    return a
  }
  
  // debugger
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('chatHistory')) || []
    setChatHistory(storedMessages)
}, [])  

  return (
    <div className='h-screen flex flex-col place-content-between'>
        <div className='p-4'>
            <div className='mockup-window rounded-md w-full h-full bg-white p-8'>
                {chatHistory.map((msg, index) => (
                <div key={index} className={`chat ${msg.sender === "You" ? "chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Chat Avatar"
                        src={msg.avatar || "https://img.icons8.com/ios-filled/50/user.png"}
                    />
                    </div>
                </div>
                <div className="chat-bubble bg-blue-500 text-white">{msg.text}</div>
                </div>
            ))}
                <div className='pt-8'>
                    <div className='flex flex-row'>
                        <input type="text" placeholder='Masukkan teks anda' className='input w-full rounded-l-md' id="" 
                        onChange={(e) => {
                            getUserMessage(e.target.value)
                        }}
                        value={userMessage}
                        />
                        <button className='bg-blue-300 rounded-r-md hover:bg-blue-500 hover:cursor-pointer hover:transition hover:delay-75'
                        onClick={handleSendMessage}>
                            <img className='w-10 h-10 p-1' src="https://img.icons8.com/ios/50/sent--v1.png" alt="sent--v1"/>
                        </button>
                    </div>
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