import dispatchError from '../error-dispatcher'
import storeToken from '../../security/access-token'
import signInRequest from '../../security/signin-request'
import initialiseDispatcher from '../initialise-dispatcher'

export default (actions) => {
  return (username, password) => {
    signInRequest(username, password)
      .then(response => {
        // stores Bearer Token in sessionStorage and returns decoded JWT
        let expiryTime = storeToken(response.data).exp
        let currentTime = Math.floor(new Date().getTime() / 1000)
        let timeTillExpire = expiryTime - currentTime

        setTimeout(function () {
          actions.signOut()
        }, timeTillExpire * 1000)

        actions.signIn()
        initialiseDispatcher(actions)()
      })
      .catch(error => {
        if (error.message === 'Network Error') error = 'Unable to connect to the Authorisation Server'
        dispatchError(actions)(error)
      })
  }
}
