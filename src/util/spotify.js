let accessToken
const clientId = 'b78d085fb7d94c2f9b55094f0004d8a0'
const redirectUri = 'http://localhost:3000/'

const getAccessToken = () => {
  const accessTokenRegex = /access_token=([^&]*)/
  // const accessExpiresRegex = /expires_in=([^&]*)/
  if (window.location.href.match(accessTokenRegex)) {
    const urlAccessToken = window.location.href.match(accessTokenRegex)
    accessToken = urlAccessToken[1]
    return accessToken
  } else if (accessToken) {
    return accessToken
  } else {
    // localStorage.setItem(stateKey, state);
    const scope = 'playlist-modify-public'
    let url = 'https://accounts.spotify.com/authorize'
    url += '?response_type=token'
    url += '&client_id=' + encodeURIComponent(clientId)
    url += '&scope=' + encodeURIComponent(scope)
    url += '&redirect_uri=' + encodeURIComponent(redirectUri)
    window.location = url
  }
}

export default getAccessToken
