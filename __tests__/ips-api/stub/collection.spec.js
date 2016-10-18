import Loki from 'lokijs'
import Collection from '../../../src/ips-api/stub/collection'

describe('Collection', () => {
  let db = new Loki('test.json')
  let collection = Collection(db, 'senders')
  let pre
  collection.on('pre', (data) => { pre = data })

  it('`all` returns all the data for a collection', () => {
    expect(collection.all().length).toBe(39)
  })

  it('Find returns `null` if nothing is found', () => {
    expect(collection.find({id: 'invalid'})).toBe(null)
  })

  it('Find returns the item without loki values', () => {
    let found = collection.find({id: 'dd2c0f87-d17f-4798-a4fc-e1a51576f25f'})
    expect(found).not.toBe(null)
    expect(found.version).not.toBeDefined()
    expect(found['$loki']).not.toBeDefined()
    expect(found.meta).not.toBeDefined()
  })

  it('Modify updates in db only', () => {
    let found = collection.findOne({id: 'dd2c0f87-d17f-4798-a4fc-e1a51576f25f'})
    collection.modify(found, {label: 'test'})
    let reFound = collection.findOne({id: 'dd2c0f87-d17f-4798-a4fc-e1a51576f25f'})
    expect(found.label).toBe('MCUK F55 UHD')
    expect(reFound.label).toBe('test')
  })

  it('Modify emits pre event with pre data', () => {
    let found = collection.findOne({id: 'dd2c0f87-d17f-4798-a4fc-e1a51576f25f'})
    collection.modify(found, {label: 'test'})
    expect(pre.id).toBe(found.id)
    expect(pre.label).toBe(found.label)
  })
})
