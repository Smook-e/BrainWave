import { useState } from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import Header from './components/Header'
import Hero from './components/Hero'

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className=' pt-19 lg:pt-23'>
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
