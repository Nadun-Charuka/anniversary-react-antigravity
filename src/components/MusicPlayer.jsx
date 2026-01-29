import { useState } from 'react'
import './MusicPlayer.css'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  
  const playlist = [
    { title: 'Our Song', artist: 'Love Playlist' },
    { title: 'Perfect', artist: 'Ed Sheeran' },
    { title: 'All of Me', artist: 'John Legend' }
  ]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length)
  }

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length)
  }

  return (
    <div className="music-player glass-card">
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
  )
}

export default MusicPlayer
