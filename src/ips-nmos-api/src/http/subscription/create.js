/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const axios = require('axios')
const constants = require('../constants')

module.exports = ({body, baseUrl, apiVersion, type, downgrade, downgradeVersion, addToken}) => {
  let options = {}
  if (addToken.fetch()) options.headers = addToken.addAuthHeaders()
  body.max_update_rate_ms = body.max_update_rate_ms || 100
  if (downgrade) body.params = {'query.downgrade': `${downgradeVersion}`}
  else body.params = body.params || {}
  if (!body.hasOwnProperty('persist')) body.persist = false
  const secure = baseUrl.startsWith('https')
  if (!body.hasOwnProperty('secure')) body.secure = secure
  body.resource_path = `/${type}`
  return axios.post(`${baseUrl}/${constants.QUERY_URL}/${apiVersion}/subscriptions`, body, options)
}
