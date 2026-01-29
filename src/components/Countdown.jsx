import { useState, useEffect } from 'react'
import './Countdown.css'

function Countdown() {
  const anniversaryDate = new Date('2025-01-03')
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = now - anniversaryDate
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setTimeElapsed({ days, hours, minutes, seconds })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="countdown" id="countdown">
      <div className="container">
        <h2 className="section-title">Time Together</h2>
        <p className="countdown-subtitle">Every second with you is precious</p>
        
        <div className="countdown-grid">
          <div className="countdown-item glass-card">
            <div className="countdown-value">{timeElapsed.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          
          <div className="countdown-item glass-card">
            <div className="countdown-value">{timeElapsed.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          
          <div className="countdown-item glass-card">
            <div className="countdown-value">{timeElapsed.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          
          <div className="countdown-item glass-card">
            <div className="countdown-value">{timeElapsed.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">💕</div>
            <div className="stat-value">{timeElapsed.days * 24}</div>
            <div className="stat-label">Hours of Love</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">😊</div>
            <div className="stat-value">{Math.floor(timeElapsed.days * 100)}</div>
            <div className="stat-label">Smiles Shared</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">🌟</div>
            <div className="stat-value">∞</div>
            <div className="stat-label">Memories Created</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown
