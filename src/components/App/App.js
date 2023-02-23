import React, { useState } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App () {
  const [state, setState] = useState({
    searchResults: [
      {
        uri: 'td1',
        name: 'Tiny Dancer',
        artist: 'Elton John',
        album: 'Madman Across The Water'
      },
      {
        uri: 'td2',
        name: 'Tiny Dancer',
        artist: 'Tim McGraw',
        album: 'Love Story'
      }
    ],
    playlistName: 'Liked List',
    playlistTracks: [
      {
        uri: 'pr1',
        name: 'Stronger',
        artist: 'Britney Spears',
        album: 'Oops!... I Did It Again'
      },
      {
        uri: 'pr2',
        name: 'So Emotional',
        artist: 'Whitney Houston',
        album: 'Whitney'
      }
    ]
  })

  const addTrack = (track) => {
    if (!state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setState({
        ...state,
        playlistTracks: [
          ...state.playlistTracks,
          track
        ]
      })
    }
  }

  const changePlaylistName = (playlistName) => {
    setState({...state, playlistName: playlistName })
  }

  const removeTrack = (trackId) => {
    if (state.playlistTracks.find(savedTrack => savedTrack.id === trackId)) {
      const trackIndex = state.playlistTracks.map(track => track.id).indexOf(trackId)
      const newPlaylistTracks = [...state.playlistTracks]
      newPlaylistTracks.splice(trackIndex, 1)
      setState({
        ...state,
        playlistTracks: newPlaylistTracks
      })
    }
  }

  return (
  <div>
    <h1>Spotify<span className="highlight">Playlists</span></h1>
    <div className="App">
        <SearchBar />
        <div className="App-playlist">
        <SearchResults onAdd={addTrack} playlistTracks={state.playlistTracks} searchResults={state.searchResults} />
        <Playlist changePlaylistName={changePlaylistName} onRemove={removeTrack} playlistName={state.playlistName} playlistTracks={state.playlistTracks} />
      </div>
    </div>
  </div>
  )
}

export default App
