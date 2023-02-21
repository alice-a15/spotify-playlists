import React, { useState } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App () {
  const [state, setState] = useState({
    searchResults: [
      {
        id: 'td1',
        name: 'Tiny Dancer',
        artist: 'Elton John',
        album: 'Madman Across The Water'
      },
      {
        id: 'td2',
        name: 'Tiny Dancer',
        artist: 'Tim McGraw',
        album: 'Love Story'
      }
    ],
    playlistName: 'Liked List',
    playlistTracks: [
      {
        id: 'pr1',
        name: 'Stronger',
        artist: 'Britney Spears',
        album: 'Oops!... I Did It Again'
      },
      {
        id: 'pr2',
        name: 'So Emotional',
        artist: 'Whitney Houston',
        album: 'Whitney'
      }
    ]
  })

  return (
  <div>
    <h1>Spotify<span className="highlight">Playlists</span></h1>
    <div className="App">
        <SearchBar />
        <div className="App-playlist">
        <SearchResults searchResults={state.searchResults}/>
        <Playlist playlistName={state.playlistName} playlistTracks={state.playlistTracks}/>
      </div>
    </div>
  </div>
  )
}

export default App
