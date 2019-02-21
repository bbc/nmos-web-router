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

let Loki = require('lokijs')
let Collection = require('./collection')

describe('Collection', () => {
  let db = new Loki('test.json')
  let collection = Collection(db, 'senders')
  let id = collection.data[0].id
  let pre
  collection.on('pre', (data) => { pre = data })

  it('`all` returns all the data for a collection', () => {
    expect(collection.all().length > 0).toBe(true)
  })

  it('Find returns `null` if nothing is found', () => {
    expect(collection.find({id: 'invalid'})).toBe(null)
  })

  it('Find returns the item without loki values', () => {
    let found = collection.find({id})
    expect(found).not.toBe(null)
    expect(found.version).not.toBeDefined()
    expect(found['$loki']).not.toBeDefined()
    expect(found.meta).not.toBeDefined()
  })

  it('Modify updates in db only', () => {
    let found = collection.findOne({id})
    let label = found.label
    collection.modify(found, {label: 'test'})
    let reFound = collection.findOne({id})
    expect(found.label).toBe(label)
    expect(reFound.label).toBe('test')
  })

  it('Modify emits pre event with pre data', () => {
    let found = collection.findOne({id})
    collection.modify(found, {label: 'test'})
    expect(pre.id).toBe(found.id)
    expect(pre.label).toBe(found.label)
  })
})
