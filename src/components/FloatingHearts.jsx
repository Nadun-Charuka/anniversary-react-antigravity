import { useEffect } from 'react'
import './FloatingHearts.css'

function FloatingHearts() {
  useEffect(() => {
    const createHeart = () => {
      const heartsContainer = document.querySelector('.floating-hearts-container')
      if (!heartsContainer) return

      const heart = document.createElement('div')
      heart.className = 'floating-heart'
      heart.innerHTML = '❤️'
      heart.style.left = `${Math.random() * 100}%`
      heart.style.animationDuration = `${5 + Math.random() * 5}s`
      heart.style.fontSize = `${1 + Math.random() * 1.5}rem`
      heart.style.opacity = Math.random() * 0.5 + 0.3
      
      heartsContainer.appendChild(heart)
      
      setTimeout(() => {
        heart.remove()
      }, 10000)
    }

    const interval = setInterval(createHeart, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return <div className="floating-hearts-container"></div>
}

export default FloatingHearts
