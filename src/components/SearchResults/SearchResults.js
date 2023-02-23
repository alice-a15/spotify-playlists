import React from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

function SearchResults ({ onAdd, searchResults }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList isRemoval={false} onAdd={onAdd} tracks={searchResults} />
    </div>
  )
}

export default SearchResults
