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

const get = require('./get')

jest.mock('axios', () => {
  return {
    get (url) {
      let data
      return new Promise((resolve, reject) => {
        if (url === 'baseUrl/x-nmos/query/apiVersion/object/') data = {}
        else if (url === 'baseUrl/x-nmos/query/apiVersion/array/') {
          data = [{
            id: '',
            label: 'b'
          }, {
            id: '',
            label: 'a'
          }]
        }
        resolve({data})
      })
    }
  }
})

let testGetter = (getter, done, callback) => {
  getter()
    .then(data => {
      callback(data)
      done()
    })
    .catch(error => {
      fail(error)
      done()
    })
}

describe('getting', () => {
  it('adds the name as a type to object before returning', (done) => {
    let getter = get('baseUrl', 'apiVersion', 'object')
    testGetter(getter, done, (data) => {
      expect(data.type).toBe('object')
    })
  })

  it('adds the name as a type to each object in the array before returning', (done) => {
    let getter = get('baseUrl', 'apiVersion', 'array')
    testGetter(getter, done, (data) => {
      data.forEach(d => {
        expect(d.type).toBe('array')
      })
    })
  })

  it('sorts the data before returning', (done) => {
    let getter = get('baseUrl', 'apiVersion', 'array')
    testGetter(getter, done, (data) => {
      expect(data.length).toBe(2)
      expect(data[0].label).toBe('a')
      expect(data[1].label).toBe('b')
    })
  })
})
