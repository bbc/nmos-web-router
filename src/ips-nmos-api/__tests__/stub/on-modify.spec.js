let onModify = require('../../src/stub/on-modify')
let collections = require('../../src/stub/collections')

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
