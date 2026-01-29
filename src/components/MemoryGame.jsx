import { useState, useEffect } from 'react'
import './MemoryGame.css'

function MemoryGame() {
  const emojis = ['💕', '💖', '💗', '💝', '💘', '💞', '💓', '❤️']
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }))
    setCards(shuffled)
    setFlipped([])
    setMatched([])
    setMoves(0)
    setGameWon(false)
  }

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return
    }

    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      const [first, second] = newFlipped
      
      if (cards[first].emoji === cards[second].emoji) {
        setMatched([...matched, first, second])
        setFlipped([])
        
        if (matched.length + 2 === cards.length) {
          setTimeout(() => setGameWon(true), 500)
        }
      } else {
        setTimeout(() => setFlipped([]), 1000)
      }
    }
  }

  return (
    <section className="memory-game">
      <div className="container">
        <h2 className="section-title">Love Memory Game</h2>
        <p className="game-subtitle">Match the hearts and test your memory!</p>
        
        <div className="game-stats">
          <div className="stat-box glass-card">
            <span className="stat-label">Moves:</span>
            <span className="stat-value">{moves}</span>
          </div>
          <div className="stat-box glass-card">
            <span className="stat-label">Matched:</span>
            <span className="stat-value">{matched.length / 2} / {emojis.length}</span>
          </div>
        </div>

        <div className="game-board">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`game-card ${
                flipped.includes(index) || matched.includes(index) ? 'flipped' : ''
              } ${matched.includes(index) ? 'matched' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-pattern">?</div>
                </div>
                <div className="card-back">
                  <div className="card-emoji">{card.emoji}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {gameWon && (
          <div className="game-won-modal">
            <div className="modal-content glass-card">
              <div className="trophy">🏆</div>
              <h3>Congratulations!</h3>
              <p>You matched all the hearts in {moves} moves!</p>
              <p className="love-message">Just like how we're a perfect match! 💕</p>
              <button className="btn btn-primary" onClick={initializeGame}>
                Play Again
              </button>
            </div>
          </div>
        )}

        <button className="btn btn-primary reset-btn" onClick={initializeGame}>
          Reset Game
        </button>
      </div>
    </section>
  )
}

export default MemoryGame
