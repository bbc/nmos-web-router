var jwtDecode = require('jwt-decode')
import { BEARER_KEY } from './constants'

export default (bearerToken) => {
  function validateToken (token) { // TODO Add bearer token validation?
    return true
  }
  let accessToken = ''
  if (window.sessionStorage) {
    // If Bearer Token passed as param, store bearer token
    if (bearerToken && validateToken(bearerToken)) {
      window.sessionStorage.setItem(BEARER_KEY, JSON.stringify(bearerToken))
      accessToken = jwtDecode(bearerToken.access_token)
      // If no parameters are passed, get token from session storage
    } else if (!bearerToken && window.sessionStorage.getItem(BEARER_KEY)) {
      let bearerToken = JSON.parse(window.sessionStorage.getItem(BEARER_KEY))
      accessToken = jwtDecode(bearerToken.access_token)
    }
  }
  return accessToken
}
