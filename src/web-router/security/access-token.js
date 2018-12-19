var jwtDecode = require('jwt-decode')

export default (bearerToken) => {
  function validateToken (token) { // TODO Add token validation?
    return true
  }
  let accessToken = ''
  if (window.sessionStorage) {
    if (bearerToken && validateToken(bearerToken)) {
      window.sessionStorage.setItem('bearerToken', JSON.stringify(bearerToken))
      accessToken = jwtDecode(bearerToken.access_token)
      // If no parameters are passed, get token from session storage
    } else if (!bearerToken && window.sessionStorage.getItem('bearerToken')) {
      let bearerTokenString = JSON.parse(window.sessionStorage.getItem('bearerToken'))
      accessToken = jwtDecode(bearerTokenString.access_token)
    }
  }
  return accessToken
}
