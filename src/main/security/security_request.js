const axios = require('axios')
const qs = require('qs')
import storeToken from './store-token'

let oauthRequest = (username, password, clientID = 'EUrkTVN0RNCMhd8FZXcBlcTD',
                    clientSecret = 'fooIeREp5JtETq70bNqmzK9yIHHXFm8MitOBeGhnGzLdNi3u', scope = 'is04') => {
  const url = 'http://localhost:4999/oauth/token'
  const data = {
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
   .catch((error) => {
     console.log('error ' + error)
     return 'Error'
   })
}

export default oauthRequest
