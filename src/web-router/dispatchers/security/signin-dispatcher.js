import dispatchError from '../error-dispatcher'
import storeToken from '../../security/store-token'
import signInRequest from '../../security/signin-request'

export default (actions) => {
  return (username, password) => {
    signInRequest(username, password)
      .then(response => {
        let expiryTime = storeToken(response.data)
        let currentTime = Math.floor(new Date().getTime() / 1000)
        let timeTillExpire = expiryTime - currentTime

        setTimeout(function () {
          actions.signOut()
        }, timeTillExpire * 1000)

        actions.signIn()
      })
      .catch(error => {
        if (error.message === 'Network Error') error = 'Unable to connect to the Authorisation Server'
        dispatchError(actions)(error)
      })
  }
}
