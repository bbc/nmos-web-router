import axios from 'axios'

const NMOS = 'x-nmos'
const V1_0 = 'v1.0'
const QUERY = 'query'
const NODE = 'node'
const QUERY_URL = [NMOS, QUERY, V1_0].join('/')
const NODE_URL = [NMOS, NODE, V1_0].join('/')

function get (baseUrl, id, name) {
  let url = `${baseUrl}/${QUERY_URL}/${name}/`
  if (id) url += `${id}/`
  return axios.get(url)
    .then(response => {
      let data = response.data
      if (Array.isArray(response.data)) {
        data = response.data.map(d => {
          d.type = name
          return d
        })
        data.sort((left, right) => {
          if (left.format === right.format || left.format === undefined || right.format === undefined) return left.label.toUpperCase() < right.label.toUpperCase() ? -1 : 1
          else if (left.format.includes('video')) return -1
          else if (right.format.includes('video')) return 1
          else if (left.format.includes('audio')) return -1
          else if (right.format.includes('audio')) return 1
          return 0
        })

      } else data.type = name
      return data
    })
}

function getStub (id, name) {
  let data = require(`./stub-data/${name}.json`)
  if (id) data = data.filter(d => {
    return d.id === id
  })[0]

  if (Array.isArray(data)) {
    data = data.map(d => {
      d.type = name
      return d
    })

    data.sort((left, right) => {
      if (left.format === right.format || left.format === undefined || right.format === undefined) return left.label.toUpperCase() < right.label.toUpperCase() ? -1 : 1
      else if (left.format.includes('video')) return -1
      else if (right.format.includes('video')) return 1
      else if (left.format.includes('audio')) return -1
      else if (right.format.includes('audio')) return 1
      return 0
    })

  } else data.type = name

  return new Promise(resolve => {
    resolve(data)
  })
}

function route (baseUrl, id, sender) {
  return axios.put(
    `${baseUrl}/${NODE_URL}/receivers/${id}/target`,
    sender,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      return response.data
    })
}

export default function (usestub, baseUrl) {
  return {
    subscriptions () {
      if (usestub) {
        let data = require('./stub-data/subscriptions.json')
        return new Promise(resolve => {
          resolve(data)
        })
      }
      return axios.get(`${baseUrl}/subscriptions`)
        .then(response => {
          return response.data
        })
    },
    flows (id) {
      if (usestub) return getStub(id, 'flows')
      return get(baseUrl, id, 'flows')
    },
    sources (id) {
      if (usestub) return getStub(id, 'sources')
      return get(baseUrl, id, 'sources')
    },
    nodes (id) {
      if (usestub) return getStub(id, 'nodes')
      return get(baseUrl, id, 'nodes')
    },
    devices (id) {
      if (usestub) return getStub(id, 'devices')
      return get(baseUrl, id, 'devices')
    },
    senders (id) {
      if (usestub) return getStub(id, 'senders')
      return get(baseUrl, id, 'senders')
    },
    receivers (id) {
      if (usestub) return getStub(id, 'receivers')
      return get(baseUrl, id, 'receivers')
    },
    route (id, sender) {
      sender.routingTo = id
      if (usestub) return new Promise(resolve => {
        setTimeout(function () {
          resolve()
        }, 1000)
      })
      return route(baseUrl, id, sender)
    },
    unroute (id) {
      if (usestub) return new Promise(resolve => {
        resolve()
      })
      return route(baseUrl, id, {})
    }
  }
}
