import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'

import About from './components/About'
import Contact from './component/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Contact />
      <About />
    </>
  )
}

export default App;