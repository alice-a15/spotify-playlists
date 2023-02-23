import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

function TrackList ({ listType, onAdd, onRemove, playlistTracks, tracks }) {
  return (
    <div className="TrackList">
      {
        tracks && tracks.map((track) => <Track isRemoval={listType === 'playlist' || playlistTracks?.find(savedTrack => savedTrack.id === track.id)} key={track.id} listType={listType} onAdd={onAdd} onRemove={onRemove} playlistTracks={playlistTracks} track={track} />)
      }
    </div>
  )
}

export default TrackList
