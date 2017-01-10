let Loki = require('lokijs')
let Collection = require('../../src/stub/collection')

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
