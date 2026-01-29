import { useState } from 'react'
import './Hero.css'

function Hero({ onEnter }) {
  const [entered, setEntered] = useState(false)

  const handleEnter = () => {
    setEntered(true)
    setTimeout(() => {
      onEnter()
      // Scroll to the very top of the page first
      window.scrollTo({ top: 0, behavior: 'instant' })
      // Then scroll to countdown section
      setTimeout(() => {
        const countdownElement = document.getElementById('countdown')
        if (countdownElement) {
          const elementPosition = countdownElement.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({ top: elementPosition, behavior: 'smooth' })
        }
      }, 100)
    }, 1000)
  }

  return (
    <section className={`hero ${entered ? 'fade-out' : ''}`}>
      <div className="hero-content">
        <div className="heart-icon">
          <svg viewBox="0 0 32 29.6" className="beating-heart">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
        </div>
        
        <h1 className="hero-title">One Year of Us</h1>
        
        <p className="hero-subtitle">
          365 days of love, laughter, and unforgettable memories
        </p>
        
        <div className="hero-date">
          <span className="date-label">Together Since</span>
          <span className="date-value">January 29, 2025</span>
        </div>
        
        <button className="btn btn-primary hero-btn" onClick={handleEnter}>
          Begin Our Journey
          <span className="btn-arrow">→</span>
        </button>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </div>
      
      <div className="hero-bg-hearts">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="bg-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            ❤
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
