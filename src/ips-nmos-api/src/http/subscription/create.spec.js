import create from './create'

let url
let body
let response

jest.mock('axios', () => {
  return {
    post (resultUrl, resultBody) {
      url = resultUrl
      body = resultBody
      return new Promise((resolve, reject) => {
        resolve('response from post')
      })
    }
  }
})

describe('create', () => {
  beforeEach((done) => {
    url = 'no url'
    body = 'no body'
    response = 'no response'

    create({
      body: {},
      baseUrl: 'baseUrl',
      type: 'type'
    })
    .then(resoltResponse => {
      response = resoltResponse
      done()
    })
    .catch(() => {
      done()
    })
  })

  it('uses base url for post', () => {
    expect(url).toBe('baseUrl/x-nmos/query/v1.0/subscriptions')
  })

  describe('default body sets', () => {
    it('max update rate ms is 100', () => {
      expect(body.max_update_rate_ms).toBe(100)
    })

    it('params to be created by ips-nmos-api', () => {
      expect(body.params).toEqual({
        created_by: 'ips-nmos-api'
      })
    })

    it('persist to be false', () => {
      expect(body.persist).toBe(false)
    })

    it('secure to be false', () => {
      expect(body.secure).toBe(false)
    })
  })

  it('sets resource_path to the type provided', () => {
    expect(body.resource_path).toBe('/type')
  })

  it('resolves with what the post returns', () => {
    expect(response).toBe('response from post')
  })
})
