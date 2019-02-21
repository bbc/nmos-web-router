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

import updateFromGrains from './update-from-grains'

describe('updating from grains', () => {
  let add
  let added
  let remove
  let removed
  let data
  let id

  beforeEach(() => {
    added = 'not added'
    removed = 'not removed'
    data = {}
    id = 'id'
    add = () => {
      added = 'added'
    }
    remove = () => {
      removed = 'removed'
    }
  })

  it('removes when there is a pre only', () => {
    let grains = [{pre: {id}}]

    updateFromGrains({add, remove, grains, data})

    expect(removed).toBe('removed')
    expect(added).not.toBe('added')
  })

  it('adds when there is a post only', () => {
    let grains = [{post: {id}}]

    updateFromGrains({add, remove, grains, data})

    expect(removed).not.toBe('removed')
    expect(added).toBe('added')
  })

  it('does nothing if no post or pre', () => {
    let grains = [{}]

    updateFromGrains({add, remove, grains, data})

    expect(removed).not.toBe('removed')
    expect(added).not.toBe('added')
  })
})
