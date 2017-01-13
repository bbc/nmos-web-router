let Subscriptions = require('./subscriptions')

describe('Subscriptions', () => {
  let subscriptions, allData
  beforeEach(() => {
    allData = [{ id: '0' }]
    let collections = {
      subscriptions: {
        all: () => {
          return allData
        }
      }
    }
    subscriptions = Subscriptions(collections, () => { return 0 })
  })

  it('Returns everything', (done) => {
    subscriptions()
      .then(data => {
        expect(data).toEqual(allData)
        done()
      })
      .catch(error => {
        fail(error)
        done()
      })
  })
})
