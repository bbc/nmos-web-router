import Subscribe from '../../../src/ips-api/stub/subscribe'
import collections from '../../../src/ips-api/stub/collections'

describe('Subscribe', () => {
  let subscribe = Subscribe(collections, 0)
  let post, pre
  subscribe.receivers((data) => {
    post = data.post
    pre = data.pre
  })

  it('Populates post only on new item', () => {
    collections.receivers.insert({id: 'id', value: 0})

    expect(pre).toEqual({})
    expect(post).toEqual({id: 'id', value: 0})
  })

  it('Populates post and pre on updated item (must also emit a pre before updating)', () => {
    let item = collections.receivers.findOne({id: 'id'})
    collections.receivers.modify(item, {value: 10})

    expect(pre).toEqual({id: 'id', value: 0})
    expect(post).toEqual({id: 'id', value: 10})
  })

  it('Populates pre only on removed item', () => {
    let item = collections.receivers.findOne({id: 'id'})
    collections.receivers.remove(item)

    expect(pre).toEqual({id: 'id', value: 10})
    expect(post).toEqual({})
  })
})
