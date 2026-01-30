import { useState, useEffect } from 'react'
import './LoveLetter.css'

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false)

  // Lock body scroll when letter is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    // Scroll to footer after closing
    setTimeout(() => {
      const footer = document.querySelector('footer')
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300) // Wait for close animation
  }

  return (
    <section className="love-letter">
      <div className="container">
      <div className={`letter-header-section ${isOpen ? 'hidden' : ''}`}>
        <h2 className="section-title letter-title">A Letter From My Heart</h2>
        <p className="letter-subtitle letter-subtitle-text">
          {isOpen ? 'Click the ✕ button to close' : 'Click the envelope to read my message to you'}
        </p>
      </div>
        
        <div className={`envelope-wrapper ${isOpen ? 'opened' : ''}`}>
          <div className="envelope" onClick={() => !isOpen && handleOpen()}>
            <div className="envelope-flap"></div>
            <div className="envelope-body"></div>
            <div className="heart-seal">💌</div>
          </div>
          
          <div className="letter-content glass-card">
            <button className="close-letter-btn" onClick={handleClose} aria-label="Close letter">
              ✕
            </button>
            <div className="letter-header">
              <div className="letter-date">January 29, 2026</div>
              <div className="letter-to">To My Dearest Love,</div>
            </div>
            
            <div className="letter-body">
              <p>
                As I sit here reflecting on this incredible year we've shared together, 
                my heart overflows with gratitude and love. You've brought so much joy, 
                laughter, and meaning into my life.
              </p>
              
              <p>
                From our first conversation to this very moment, every day with you has 
                been an adventure. You've shown me what it means to truly love and be loved. 
                Your smile brightens my darkest days, and your laughter is my favorite sound.
              </p>
              
              <p>
                Thank you for being patient with me, for supporting my dreams, and for 
                sharing yours with me. Thank you for the little things – the morning texts, 
                the surprise hugs, the way you look at me like I'm the only person in the room.
              </p>
              
              <p>
                This past year has been just the beginning of our story. I can't wait to 
                create more memories, overcome more challenges together, and continue growing 
                side by side. You are my best friend, my partner, and my greatest blessing.
              </p>
              
              <p className="letter-closing">
                Here's to us, to our love, and to many more years of happiness together.
              </p>
              
              <div className="letter-signature">
                <p>Forever yours,</p>
                <p className="signature-name">Your Love</p>
                <div className="signature-hearts">💕 ❤️ 💖</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoveLetter

