let onInsert = require('../../src/stub/on-insert')
let collections = require('../../src/stub/collections')

describe('Inserting', () => {
  it('Populates post only on new item', () => {
    let id = 'id'
    let collection = collections().receivers

    let post, pre
    onInsert(collection, (data) => {
      post = data.post
      pre = data.pre
    })

    collection.insert({id, value: 0})

    expect(pre).toEqual({})
    expect(post).toEqual({id, value: 0})
  })
})
