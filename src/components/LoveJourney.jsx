import { useState } from 'react'
import './LoveJourney.css'

function LoveJourney() {
  const milestones = [
    {
      date: 'January 29, 2025',
      title: 'Our First Meeting',
      description: 'The day our eyes met and everything changed. I knew from that moment you were special.',
      icon: '✨',
      color: '#ff6b9d'
    },
    {
      date: 'February 14, 2025',
      title: 'First Valentine\'s Day',
      description: 'Our first Valentine\'s together, filled with roses, chocolates, and endless love.',
      icon: '🌹',
      color: '#ff8fab'
    },
    {
      date: 'March 2025',
      title: 'First Adventure',
      description: 'Our first trip together, creating memories that will last forever.',
      icon: '🗺️',
      color: '#ffa3ba'
    },
    {
      date: 'June 2025',
      title: 'Six Months Together',
      description: 'Half a year of love, laughter, and growing closer every day.',
      icon: '💑',
      color: '#ffb7c8'
    },
    {
      date: 'September 2025',
      title: 'Our Special Place',
      description: 'Found our favorite spot where we love to spend time together.',
      icon: '🏞️',
      color: '#ffcbd6'
    },
    {
      date: 'January 29, 2026',
      title: 'One Year Anniversary',
      description: 'A whole year of us! Here\'s to many more years of love and happiness.',
      icon: '🎉',
      color: '#ffd700'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="love-journey">
      <div className="container">
        <h2 className="section-title">Our Love Journey</h2>
        <p className="journey-subtitle">Every moment with you is a milestone worth celebrating</p>
        
        <div className="timeline">
          <div className="timeline-line"></div>
          
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`timeline-item ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ '--item-color': milestone.color }}
            >
              <div className="timeline-dot">
                <span className="timeline-icon">{milestone.icon}</span>
              </div>
              
              <div className="timeline-content glass-card">
                <div className="timeline-date">{milestone.date}</div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LoveJourney
