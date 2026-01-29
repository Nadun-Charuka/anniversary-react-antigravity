import { useState } from 'react'
import './SpecialMoments.css'

function SpecialMoments() {
  const [selectedMoment, setSelectedMoment] = useState(null)
  
  const moments = [
    {
      id: 1,
      title: 'First Date',
      description: 'The nervous excitement, the butterflies, the magic of our first date.',
      emoji: '🥰',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Sunset Together',
      description: 'Watching the sun set, hand in hand, knowing I found my forever.',
      emoji: '🌅',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Late Night Talks',
      description: 'Those 3 AM conversations where time stood still and we shared our dreams.',
      emoji: '🌙',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Dancing in Rain',
      description: 'Getting caught in the rain and dancing like nobody was watching.',
      emoji: '💃',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      title: 'Cooking Together',
      description: 'Making a mess in the kitchen but creating perfect memories.',
      emoji: '👨‍🍳',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      title: 'Movie Marathons',
      description: 'Cozy nights, your favorite snacks, and endless laughter.',
      emoji: '🍿',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 7,
      title: 'Surprise Gifts',
      description: 'Those little surprises that showed how much you care.',
      emoji: '🎁',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 8,
      title: 'Road Trips',
      description: 'Adventures on the open road with my favorite co-pilot.',
      emoji: '🚗',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      id: 9,
      title: 'Lazy Sundays',
      description: 'Perfect mornings with coffee, cuddles, and nowhere to be.',
      emoji: '☕',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    }
  ]

  return (
    <section className="special-moments">
      <div className="container">
        <h2 className="section-title">Special Moments</h2>
        <p className="moments-subtitle">A collection of memories that make my heart smile</p>
        
        <div className="moments-grid">
          {moments.map((moment, index) => (
            <div
              key={moment.id}
              className={`moment-card glass-card ${selectedMoment === moment.id ? 'selected' : ''}`}
              onClick={() => setSelectedMoment(selectedMoment === moment.id ? null : moment.id)}
              style={{ 
                '--moment-gradient': moment.gradient,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="moment-emoji">{moment.emoji}</div>
              <h3 className="moment-title">{moment.title}</h3>
              <p className="moment-description">{moment.description}</p>
              <div className="moment-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialMoments
