import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

function App() {

  return (
    <div className='card-container'>
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}

export default App
