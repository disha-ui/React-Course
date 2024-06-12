import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
    <div style={{display:'flex'}}>
      <Card
      img src='images/food-1.jpeg' body="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates fugiat maiores corrupti sint quo repellendus odio sapiente ratione, optio architecto, unde libero. Laudantium enim ab voluptatibus sit harum esse." heading="This are Vagitables" date="03/9/20"/>
    
      <Card/>
      <Card/>
      <Card/>
      </div>
    </>
  )
}

export default App
