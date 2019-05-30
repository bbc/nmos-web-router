import dispatchError from '../error-dispatcher'
import AccessToken from './access-token'
import signInRequest from './signin-request'
import initialiseDispatcher from '../initialise-dispatcher'
// import updateDispatcher from '../update-dispatcher'

export default (actions) => {
  return (username, password) => {
    signInRequest(username, password)
      .then(response => {
        // stores Bearer Token in sessionStorage and returns decoded JWT
        let accessToken = AccessToken(actions)
        accessToken.store(response.data)
        let timeTillExpired = accessToken.timeTillExpired()

        setTimeout(function () {
          actions.signOut()
        }, timeTillExpired * 1000)

        actions.signIn()

        // Must disconnect from existing websockets before re-initialising
        let subscriptions = ['senders', 'receivers', 'flows']
        subscriptions.forEach(subscription => {
          window.nmos.subscription[subscription]().disconnect()
        })

        initialiseDispatcher(actions)()
      })
      .catch(error => {
        if (error.message === 'Network Error') error = 'Unable to connect to the Authorisation Server'
        dispatchError(actions)(error)
      })
  }
}
