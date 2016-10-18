import onModify from '../../../src/ips-api/stub/on-modify'
import collections from '../../../src/ips-api/stub/collections'

describe('Modifiying', () => {
  it('Populates post only on new item', () => {
    let id = 'id'
    let collection = collections.receivers

    let post, pre
    onModify(collection, (data) => {
      post = data.post
      pre = data.pre
    })

    collections.receivers.insert({id, value: 0})

    let item = collections.receivers.findOne({id})
    collections.receivers.modify(item, {value: 10})

    expect(pre).toEqual({id, value: 0})
    expect(post).toEqual({id, value: 10})
  })
})
