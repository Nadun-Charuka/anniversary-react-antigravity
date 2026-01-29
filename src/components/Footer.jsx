import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-hearts-bg">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="footer-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              ❤️
            </div>
          ))}
        </div>

        <div className="container">
          <div className="footer-main">
            <div className="footer-quote">
              <div className="quote-icon">💕</div>
              <blockquote className="quote-text">
                "Love is not about how many days, months, or years you've been together. 
                It's about how much you love each other every single day."
              </blockquote>
            </div>

            <div className="footer-wishes">
              <h3 className="wishes-title">Wishing Us...</h3>
              <div className="wishes-grid">
                <div className="wish-item">
                  <span className="wish-icon">🌟</span>
                  <p className="wish-text">Endless Adventures</p>
                </div>
                <div className="wish-item">
                  <span className="wish-icon">💖</span>
                  <p className="wish-text">Boundless Love</p>
                </div>
                <div className="wish-item">
                  <span className="wish-icon">😊</span>
                  <p className="wish-text">Infinite Laughter</p>
                </div>
                <div className="wish-item">
                  <span className="wish-icon">🌈</span>
                  <p className="wish-text">Colorful Memories</p>
                </div>
                <div className="wish-item">
                  <span className="wish-icon">🤝</span>
                  <p className="wish-text">Unwavering Support</p>
                </div>
                <div className="wish-item">
                  <span className="wish-icon">✨</span>
                  <p className="wish-text">Magical Moments</p>
                </div>
              </div>
            </div>

            <div className="footer-message">
              <div className="message-content">
                <h3 className="message-title">Here's to Our Forever</h3>
                <p className="message-text">
                  May our love continue to grow stronger with each passing day. 
                  May we always find reasons to smile, laugh, and cherish every moment together. 
                  Here's to a lifetime of love, happiness, and beautiful memories.
                </p>
                <div className="message-hearts">
                  <span className="animated-heart">💕</span>
                  <span className="animated-heart">💖</span>
                  <span className="animated-heart">💗</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <p className="footer-copyright">
              Made with <span className="heart-beat">❤️</span> for Our One Year Anniversary
            </p>
            <p className="footer-date">January 29, 2025 - Forever</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
