var jwtDecode = require('jwt-decode')

export default (bearerToken) => {
  function validateToken (token) { // TODO Add token validation?
    return true
  }
  if (window.sessionStorage && bearerToken && validateToken(bearerToken)) {
    window.sessionStorage.setItem('bearerToken', JSON.stringify(bearerToken))

    let accessToken = jwtDecode(bearerToken.access_token)
    return accessToken.exp // expiry time in UTC
  }
}
