import AccessToken from './access-token'

export default (actions) => {
  return () => {
    // stores Bearer Token in sessionStorage and returns decoded JWT
    let accessToken = AccessToken(actions)
    let token = accessToken.fetch()
    if (token) {
      if (!accessToken.isExpired()) {
        let timeTillExpired = accessToken.timeTillExpired()
        setTimeout(function () {
          actions.signOut()
        }, timeTillExpired * 1000)

        actions.signIn()
      } else {
        accessToken.remove()
        actions.signOut()
      }
    }
  }
}
