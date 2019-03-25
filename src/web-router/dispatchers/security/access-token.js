var jwtDecode = require('jwt-decode')
import { TOKEN_KEY } from './constants'
import dispatchError from '../error-dispatcher'

export default (actions) => {
  if (!window.sessionStorage) {
    dispatchError(actions)('Please use a browser that supports Session Storage')
    return
  }

  function validateBearerToken (bearerToken) { // TODO Add bearer token validation?
    return true
  }

  function decode (accessToken) {
    try {
      let decodedToken = jwtDecode(accessToken)
      return decodedToken
    } catch (error) {
      dispatchError(actions)(`Unable to decode JSON Web Token: ${error}`)
    }
  }

  return {
    store (bearerToken) {
      if (bearerToken && validateBearerToken(bearerToken)) {
        let accessToken = bearerToken.access_token
        window.sessionStorage.setItem(TOKEN_KEY, accessToken)
        return true
      }
    },
    fetch () {
      if (window.sessionStorage.getItem(TOKEN_KEY)) {
        let accessToken = window.sessionStorage.getItem(TOKEN_KEY)
        validateBearerToken(accessToken)
        return accessToken
      }
    },
    expiryTime () {
      let accessToken = this.fetch()
      let expiryTime = decode(accessToken).exp
      return expiryTime
    },
    isExpired () {
      let expiryTime = this.expiryTime()
      let currentTime = Math.floor(new Date().getTime() / 1000)
      if (expiryTime) return expiryTime < currentTime
    },
    timeTillExpired () {
      let expiryTime = this.expiryTime()
      let currentTime = Math.floor(new Date().getTime() / 1000)
      if (expiryTime) return expiryTime - currentTime
    },
    remove () {
      if (window.sessionStorage) {
        window.sessionStorage.removeItem(TOKEN_KEY)
      }
    }
  }
}
