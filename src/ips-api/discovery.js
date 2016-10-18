import defaultSort from './default-sort.js'

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
        data.sort(defaultSort)

      } else data.type = name
      return data
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

export default function (options) {
  return {
    subscriptions () {
      return axios.get(`${options.get}/subscriptions`)
        .then(response => {
          return response.data
        })
    },
    flows (id) {
      return get(options.get, id, 'flows')
    },
    sources (id) {
      return get(options.get, id, 'sources')
    },
    nodes (id) {
      return get(options.get, id, 'nodes')
    },
    devices (id) {
      return get(options.get, id, 'devices')
    },
    senders (id) {
      return get(options.get, id, 'senders')
    },
    receivers (id) {
      return get(options.get, id, 'receivers')
    },
    route (id, sender) {
      sender.routingTo = id
      return route(options.put, id, sender)
    },
    unroute (id) {
      return route(options.put, id, {})
    },
    subscribe: {
      flows (callback) {
      },
      sources (callback) {
      },
      nodes (callback) {
      },
      devices (callback) {
      },
      senders (callback) {
      },
      receivers (callback) {
      }}
  }
}
