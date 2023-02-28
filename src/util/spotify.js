let accessToken
const clientId = 'b78d085fb7d94c2f9b55094f0004d8a0'
const redirectUri = 'http://localhost:3000/'

const parseTracks = (tracks) => {
  const parsedTracks = []
  tracks.items.map(track => (
    parsedTracks.push({
      uri: track.uri,
      name: track.name,
      artist: track.artists[0]?.name || 'Unknown Artist',
      album: track.album?.name || 'Unknown Album'
    }
    )))
  return parsedTracks;
}

export const getAccessToken = () => {
  const accessTokenRegex = /access_token=([^&]*)/
  // const accessExpiresRegex = /expires_in=([^&]*)/
  if (window.location.href.match(accessTokenRegex)) {
    const urlAccessToken = window.location.href.match(accessTokenRegex)
    accessToken = urlAccessToken[1]
    return accessToken
  } else if (accessToken) {
    return accessToken
  } else {
    // localStorage.setItem(stateKey, state)
    const scope = 'playlist-modify-public'
    let url = 'https://accounts.spotify.com/authorize'
    url += '?response_type=token'
    url += '&client_id=' + encodeURIComponent(clientId)
    url += '&scope=' + encodeURIComponent(scope)
    url += '&redirect_uri=' + encodeURIComponent(redirectUri)
    window.location = url
  }
}

export const searchSpotify = (searchTerm) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${getAccessToken()}`
      }
    })
      .then(response => response.json())
      .then(response => resolve(response?.tracks?.items ? parseTracks(response.tracks) : []))
      .catch(err => console.error(err))
  })
}

/*
export const savePlaylist = (playlistName, trackURIs) => {
  return new Promise((resolve, reject) => {
    if (!playlistName && trackURIs?.length === 0) {
      reject(new Error('Empty'));
    }
    fetch("https://api.spotify.com/v1/me", {
      method: 'GET',
      headers: {
        authorization: `Bearer ${getAccessToken()}`
      }
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err))
  })
}
*/

export const savePlaylist = async (playlistName, trackURIs) => {
  if (!playlistName && trackURIs?.length === 0) {
    throw new Error('Empty!');
  }
  const accessToken = getAccessToken();
  const userData = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  })
  if (!userData.ok) {
    throw new Error(userData.status);
  }
  let res = await userData.json()
  const userId = res.id

  const playlistData = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({ name: playlistName })
  })
  console.log(playlistData)
  if (!playlistData.ok) {
    throw new Error(playlistData.status);
  }
  res = await playlistData.json()
  const playlistId = res.id

  const trackData = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks/`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({ uris: trackURIs })
  })
  if (!trackData.ok) {
    throw new Error(trackData.status);
  }
  return await trackData.json()
}
