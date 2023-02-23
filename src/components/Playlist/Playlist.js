import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

function Playlist ({ changePlaylistName, onRemove, onSave, playlistTracks, playlistName }) {
  const handleNameChange = (e) => {
    changePlaylistName(e.target.value)
  }

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} value={playlistName}/>
      <TrackList listType="playlist" onRemove={onRemove} tracks={playlistTracks}/>
      <button className="Playlist-save" onClick={onSave} >SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
