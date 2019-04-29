const axios = require('axios')
const qs = require('qs')
import { CLIENT_ID, CLIENT_SECRET, AUTH_API_VERSION } from './constants'
import { getServiceUrl } from '../../../init-nmos'

export default (username, password) => {
  let scope = 'is05'
  let data = {
    grant_type: 'password',
    scope: scope,
    username: username,
    password: password
  }

  return getServiceUrl('nmos-auth', AUTH_API_VERSION, null)
    .then(href => {
      return axios({
        url: href + '/x-nmos/auth/v1.0/token',
        method: 'post',
        data: qs.stringify(data),
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET
        }
      })
    })
}
