var jwtDecode = require('jwt-decode')

export default (bearerToken) => {
  function validateToken (token) { // TODO Add token validation?
    return true
  }
  let accessToken = ''
  let storageName = 'bearerToken'
  if (window.sessionStorage) {
    if (bearerToken && validateToken(bearerToken)) {
      window.sessionStorage.setItem(storageName, JSON.stringify(bearerToken))
      accessToken = jwtDecode(bearerToken.access_token)
      // If no parameters are passed, get token from session storage
    } else if (!bearerToken && window.sessionStorage.getItem(storageName)) {
      let bearerTokenString = JSON.parse(window.sessionStorage.getItem(storageName))
      accessToken = jwtDecode(bearerTokenString.access_token)
    }
  }
  return accessToken
}
