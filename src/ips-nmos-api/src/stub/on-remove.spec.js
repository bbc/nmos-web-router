let onRemove = require('./on-remove')
let collections = require('./collections')

describe('Inserting', () => {
  it('Populates post only on new item', () => {
    let id = 'id'
    let collection = collections().receivers

    let post, pre
    onRemove(collection, (data) => {
      post = data.post
      pre = data.pre
    })

    collection.insert({id, value: 0})
    let item = collection.findOne({id})
    collection.remove(item)

    expect(pre).toEqual({id, value: 0})
    expect(post).toEqual({})
  })
})
