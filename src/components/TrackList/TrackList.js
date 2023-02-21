import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

function TrackList ({ tracks }) {
  return (
    <div className="TrackList">
      {
        tracks && tracks.map((track) => <Track track={track} key={track.id} />)
      }
    </div>
  )
}

export default TrackList
