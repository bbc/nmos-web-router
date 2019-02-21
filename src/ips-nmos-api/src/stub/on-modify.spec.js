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

let onModify = require('./on-modify')
let collections = require('./collections')

describe('Modifiying', () => {
  it('Populates post and pre only on modified item', () => {
    let id = 'id'
    let collection = collections().receivers

    let post, pre
    onModify(collection, (data) => {
      post = data.post
      pre = data.pre
    })

    collection.insert({id, value: 0})

    let item = collection.findOne({id})
    collection.modify(item, {value: 10})

    expect(pre).toEqual({id, value: 0})
    expect(post).toEqual({id, value: 10})
  })
})
