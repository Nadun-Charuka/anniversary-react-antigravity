import { useState, useEffect } from 'react'
import './MusicPlayer.css'

function MusicPlayer({ showContent }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const playlist = [
    { title: 'Our Song', artist: 'Love Playlist' },
    { title: 'Perfect', artist: 'Ed Sheeran' },
    { title: 'All of Me', artist: 'John Legend' }
  ]

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const togglePlay = () => setIsPlaying(prev => !prev)

  const nextSong = () => {
    setCurrentSong(prev => (prev + 1) % playlist.length)
  }

  const prevSong = () => {
    setCurrentSong(prev => (prev - 1 + playlist.length) % playlist.length)
  }

  const handleMinimize = () => setIsMinimized(true)
  const handleExpand = () => setIsMinimized(false)

  // Hide player on mobile if hero visible
  if (isMobile && !showContent) return null

  return (
    <>
      {/* Minimized Floating Button */}
      {isMobile && isMinimized && (
        <button 
          type="button"
          className="music-player-minimized visible"
          onClick={handleExpand}
          aria-label="Open music player"
        >
          <span className="music-icon-mini">🎵</span>

          {isPlaying && (
            <div className="mini-visualizer">
              <div className="mini-bar"></div>
              <div className="mini-bar"></div>
              <div className="mini-bar"></div>
            </div>
          )}
        </button>
      )}

      {/* Full Player */}
      {!isMinimized && (
        <div className="music-player glass-card">
          
          {/* Close Button (Mobile Only) */}
          {isMobile && (
            <button 
              type="button"
              className="minimize-btn"
              onClick={handleMinimize}
              aria-label="Minimize music player"
            >
              ✕
            </button>
          )}

          <div className="player-header">
            <div className="music-icon">🎵</div>
            <div className="song-info">
              <div className="song-title">{playlist[currentSong].title}</div>
              <div className="song-artist">{playlist[currentSong].artist}</div>
            </div>
          </div>

          <div className="player-controls">
            <button className="control-btn" onClick={prevSong}>⏮️</button>
            <button className="control-btn play-btn" onClick={togglePlay}>
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button className="control-btn" onClick={nextSong}>⏭️</button>
          </div>

          {isPlaying && (
            <div className="music-visualizer">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default MusicPlayer
