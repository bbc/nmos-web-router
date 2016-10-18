import Get from '../../../src/ips-api/stub/get'

describe('Get', () => {
  let get
  beforeEach(() => {
    let allData = [{
      id: '0',
      label: 'B',
      format: 'video'
    }, {
      id: '1',
      label: 'a',
      format: 'video'
    }, {
      id: '2',
      label: 'a',
      format: 'audio'
    }, {
      id: '3',
      label: 'a',
      format: 'data'
    }, {
      id: '4',
      label: 'a'
    }]
    let collections = {
      collection: {
        find: (query) => {
          return allData.filter(data => {
            return data.id === query.id
          })[0] || null
        },
        all: () => {
          return allData
        }
      }
    }
    get = Get(collections, 0, 'collection')
  })

  it('Returns everything without an id sorted format ( video > audio > data > none ) then by label (ignore case)', (done) => {
    get().then(data => {
      expect(data[0].format).toBe('video')
      expect(data[0].label).toBe('a')
      expect(data[1].label).toBe('B')
      expect(data[2].format).toBe('audio')
      expect(data[3].format).toBe('data')
      expect(data[4].format).not.toBeDefined()
      done()
    }).catch(error => {
      fail(error)
      done()
    })
  })

  it('Returns the matching item by it\'s id', (done) => {
    get('2').then(data => {
      expect(data.id).toBe('2')
      done()
    }).catch(error => {
      fail(error)
      done()
    })
  })

  it('Errors 404 if can not find matching id', (done) => {
    get('invalid').then(data => {
      fail('should not get here')
      done()
    }).catch(error => {
      try {
        expect(error).toBe('404')
      } catch (e) {
        fail(e)
        done()
      }
      done()
    })
  })
})
