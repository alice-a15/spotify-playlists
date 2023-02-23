import React from 'react'
import './Track.css'

function Track ({ isRemoval, listType, onAdd, onRemove, track }) {
  const addTrack = () => {
    onAdd(track)
  }

  const removeTrack = () => {
    onRemove(track.uri)
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{ track.name }</h3>
        <p>{ `${track.artist} | ${track.album}` }</p>
      </div>
      <button className="Track-action" onClick={isRemoval ? () => removeTrack() : () => addTrack()} >{isRemoval ? listType === 'playlist' ? '-' : '' : '+'}</button>
    </div>
  )
}

export default Track
