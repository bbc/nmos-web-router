const get = require('./get')

jest.mock('axios', () => {
  return {
    get (url) {
      let data
      return new Promise((resolve, reject) => {
        if (url === 'baseUrl/x-nmos/query/v1.0/object/') data = {}
        else if (url === 'baseUrl/x-nmos/query/v1.0/array/') {
          data = [{
            id: '',
            label: 'b'
          }, {
            id: '',
            label: 'a'
          }]
        }
        resolve({data})
      })
    }
  }
})

let testGetter = (getter, done, callback) => {
  getter()
    .then(data => {
      callback(data)
      done()
    })
    .catch(error => {
      fail(error)
      done()
    })
}

describe('getting', () => {
  it('adds the name as a type to object before returning', (done) => {
    let getter = get('baseUrl', 'object')
    testGetter(getter, done, (data) => {
      expect(data.type).toBe('object')
    })
  })

  it('adds the name as a type to each object in the array before returning', (done) => {
    let getter = get('baseUrl', 'array')
    testGetter(getter, done, (data) => {
      data.forEach(d => {
        expect(d.type).toBe('array')
      })
    })
  })

  it('sorts the data before returning', (done) => {
    let getter = get('baseUrl', 'array')
    testGetter(getter, done, (data) => {
      expect(data.length).toBe(2)
      expect(data[0].label).toBe('a')
      expect(data[1].label).toBe('b')
    })
  })
})
