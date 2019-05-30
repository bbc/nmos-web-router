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

import create from './create'

let url
let body
let response

jest.mock('axios', () => {
  return {
    post (resultUrl, resultBody) {
      url = resultUrl
      body = resultBody
      return new Promise((resolve, reject) => {
        resolve('response from post')
      })
    }
  }
})

var addToken = {
  fetch () {},
  addAuthHeaders () {},
  addAuthQuery () {}
}

describe('create', () => {
  beforeEach((done) => {
    url = 'no url'
    body = 'no body'
    response = 'no response'

    create({
      body: {},
      baseUrl: 'baseUrl',
      apiVersion: 'apiVersion',
      type: 'type',
      addToken: addToken
    })
    .then(resoltResponse => {
      response = resoltResponse
      done()
    })
    .catch(() => {
      done()
    })
  })

  it('uses base url for post', () => {
    expect(url).toBe('baseUrl/x-nmos/query/apiVersion/subscriptions')
  })

  describe('default body sets', () => {
    it('max update rate ms is 100', () => {
      expect(body.max_update_rate_ms).toBe(100)
    })

    it('params to be blank when created by ips-nmos-api', () => {
      expect(body.params).toEqual({})
    })

    it('persist to be false', () => {
      expect(body.persist).toBe(false)
    })

    it('secure to be false', () => {
      expect(body.secure).toBe(false)
    })
  })

  it('sets resource_path to the type provided', () => {
    expect(body.resource_path).toBe('/type')
  })

  it('resolves with what the post returns', () => {
    expect(response).toBe('response from post')
  })
})
