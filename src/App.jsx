import { useState } from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import './index.css'

import Collaboration from './components/Collaboration'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className=' pt-19 lg:pt-23'>
        <Header />
        <Hero />
        <Benefits />

        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
