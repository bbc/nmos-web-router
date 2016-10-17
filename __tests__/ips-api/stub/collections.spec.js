import collections from '../../../src/ips-api/stub/collections'

describe('Collections', () => {
  it('Has subscriptions', () => {
    expect(collections.subscriptions).toBeDefined()
  })

  it('Has flows', () => {
    expect(collections.flows).toBeDefined()
  })

  it('Has nodes', () => {
    expect(collections.nodes).toBeDefined()
  })

  it('Has devices', () => {
    expect(collections.devices).toBeDefined()
  })

  it('Has receivers', () => {
    expect(collections.receivers).toBeDefined()
  })

  it('Has senders', () => {
    expect(collections.senders).toBeDefined()
  })

  it('`all` returns all the data for a collection', () => {
    expect(collections.senders.all().length).toBe(39)
  })

  it('Find returns `null` if nothing is found', () => {
    expect(collections.senders.find({id: 'invalid'})).toBe(null)
  })

  it('Find returns the item without loki values', () => {
    let found = collections.senders.find({id: 'dd2c0f87-d17f-4798-a4fc-e1a51576f25f'})
    expect(found).not.toBe(null)
    expect(found.version).not.toBeDefined()
    expect(found['$loki']).not.toBeDefined()
    expect(found.meta).not.toBeDefined()
  })
})
