import { useState } from 'react'
import Header from './components/Header'
import Index from './router/Index'


function App() {

  return (
    <div className='bg-slate-400/25 h-full w-full top-0'>
      <Header />
      <Index />
    </div>
  )
}

export default App
