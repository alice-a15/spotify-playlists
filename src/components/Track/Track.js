import React from 'react'
import './Track.css'

function Track ({ onAdd, track }) {
  const addTrack = () => {
    onAdd(track);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{ track.name }</h3>
        <p>{ `${track.artist} | ${track.album}` }</p>
      </div>
      <button className="Track-action" onClick={addTrack} >{/* <!-- + or - will go here --> */}</button>
    </div>
  )
}

export default Track
