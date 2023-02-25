import React, { useState, useEffect } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import { getAccessToken, searchSpotify } from '../../util/spotify'

function App () {
  const [state, setState] = useState({
    isLoading: false,
    searchResults: [
    ],
    playlistName: 'Liked List',
    playlistTracks: [],
    searchTerm: ''
  })

  useEffect(() => {
    getAccessToken()
  }, [])

  const addTrack = (track) => {
    if (!state.playlistTracks.find(savedTrack => savedTrack.uri === track.uri)) {
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
    setState({ ...state, playlistName })
  }

  const removeTrack = (trackUri) => {
    if (state.playlistTracks.find(savedTrack => savedTrack.uri === trackUri)) {
      const trackIndex = state.playlistTracks.map(track => track.uri).indexOf(trackUri)
      const newPlaylistTracks = [...state.playlistTracks]
      newPlaylistTracks.splice(trackIndex, 1)
      setState({
        ...state,
        playlistTracks: newPlaylistTracks
      })
    }
  }

  const savePlaylist = () => {
    const trackURIs = []
    state.playlistTracks.map(track => trackURIs.push(track.uri))
  }

  const changeSearchTerm = (searchTerm) => {
    setState({ ...state, searchTerm })
  }

  const onSearch = () => {
    setState({
      ...state,
      isLoading: true
    })
    searchSpotify(state.searchTerm)
      .then(results => setState({
        ...state,
        isLoading: false,
        searchResults: results
      }))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <h1>Spotify<span className="highlight">Playlists</span></h1>
      <div className="App">
          <SearchBar changeSearchTerm={changeSearchTerm} isLoading={state.isLoading} onSearch={onSearch} searchTerm={state.searchTerm} />
          <div className="App-playlist">
          <SearchResults onAdd={addTrack} playlistTracks={state.playlistTracks} searchResults={state.searchResults} />
          <Playlist changePlaylistName={changePlaylistName} onRemove={removeTrack} onSave={savePlaylist} playlistName={state.playlistName} playlistTracks={state.playlistTracks} />
        </div>
      </div>
    </div>
  )
}

export default App
