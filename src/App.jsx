import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import LoveJourney from './components/LoveJourney'
import SpecialMoments from './components/SpecialMoments'
import MemoryGame from './components/MemoryGame'
import LoveLetter from './components/LoveLetter'
import Countdown from './components/Countdown'
import MusicPlayer from './components/MusicPlayer'
import FloatingHearts from './components/FloatingHearts'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Create particle background
    const particlesContainer = document.querySelector('.particles')
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 15}s`
        particle.style.animationDuration = `${10 + Math.random() * 10}s`
        particlesContainer.appendChild(particle)
      }
    }
  }, [])

  return (
    <div className="app">
      <div className="particles"></div>
      <FloatingHearts />
      <MusicPlayer showContent={showContent} />
      
      <Hero onEnter={() => setShowContent(true)} />
      
      {showContent && (
        <>
          <Countdown />
          <LoveJourney />
          <SpecialMoments />
          <MemoryGame />
          <LoveLetter />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
