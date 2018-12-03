import dispatchError from '../../web-router/dispatchers/error-dispatcher'
// import signinRequest from '../security/signin-request'
import storeToken from '../security/store-token'
const axios = require('axios')
const qs = require('qs')

export default (actions) => {
  return (username, password) => {
    let clientID = 'EUrkTVN0RNCMhd8FZXcBlcTD'
    let clientSecret = 'fooIeREp5JtETq70bNqmzK9yIHHXFm8MitOBeGhnGzLdNi3u'
    let scope = 'is05'
    let url = 'http://localhost:4999/oauth/token'
    let data = {
      grant_type: 'password',
      scope: scope,
      username: username,
      password: password
    }
    return axios({
      url: url,
      method: 'post',
      data: qs.stringify(data),
      auth: {
        username: clientID,
        password: clientSecret
      }
    }).then(response => {
      storeToken(response.data)
      return 'Success'
    })
      .catch(error => {
        error = 'SIGN IN ERROR'
        dispatchError(actions)(error)
        return 'Error'
      })
  }
}

//
// (username, password, clientID = 'EUrkTVN0RNCMhd8FZXcBlcTD',
//                     clientSecret = 'fooIeREp5JtETq70bNqmzK9yIHHXFm8MitOBeGhnGzLdNi3u', scope = 'is05') => {
//   const url = 'http://localhost:4999/oauth/token'
//   const data = {
//     grant_type: 'password',
//     scope: scope,
//     username: username,
//     password: password
//   }
//   return axios({
//     url: url,
//     method: 'post',
//     data: qs.stringify(data),
//     auth: {
//       username: clientID,
//       password: clientSecret
//     }
//   }).then(response => {
//     storeToken(response.data)
//     return 'Success'
//   })
//    .catch((error) => {
//      console.error(error)
//      return 'Error'
//    })
// }
