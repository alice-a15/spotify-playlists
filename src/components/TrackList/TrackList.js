import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

function TrackList ({ isRemoval, onAdd, tracks }) {
  return (
    <div className="TrackList">
      {
        tracks && tracks.map((track) => <Track key={track.id} onAdd={onAdd} track={track} />)
      }
    </div>
  )
}

export default TrackList
