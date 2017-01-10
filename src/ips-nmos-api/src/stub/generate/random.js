const chance = require('chance')()
const RandExp = require('randexp')
const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/g
const formats = [
  'urn:x-nmos:format:video',
  'urn:x-nmos:format:audio',
  'urn:x-nmos:format:data'
]
const transports = [
  'urn:x-nmos:transport:rtp',
  'urn:x-nmos:transport:rtp.ucast',
  'urn:x-nmos:transport:rtp.mcast',
  'urn:x-nmos:transport:dash'
]
const types = [
  'devices',
  'flows',
  'nodes',
  'receivers',
  'senders',
  'sources'
]

module.exports = {
  type () { return chance.pickone(types) },
  ms () { return chance.integer({min: 0, max: 10 * 1000}) },
  description () { return chance.pickone(['', chance.paragraph()]) },
  format () { return chance.pickone(formats) },
  tags () {
    let words = chance.integer({min: 0, max: 3})
    let keys = []
    if (words > 0) keys = chance.sentence({words}).split(' ')
    let tags = {}
    keys.forEach(key => {
      let words = chance.integer({min: 1, max: 3})
      tags[key] = chance.sentence({words}).split(' ')
    })
    return tags
  },
  caps () { return {} },
  label () { return chance.sentence() },
  transport () { return chance.pickone(transports) },
  id () { return new RandExp(regex).gen() },
  subscription () { return { sender_id: chance.pickone([null, this.id()]) } },
  url () { return chance.url() },
  ids () {
    let count = chance.integer({min: 0, max: 20})
    let ids = []
    for (let i = 0; i < count; i++) ids.push(this.id())
    return ids
  },
  hostname () { return chance.pickone(['', chance.word()]) },
  service () {
    return {
      href: chance.url(),
      type: chance.word()
    }
  },
  services () {
    let count = chance.integer({min: 0, max: 20})
    let services = []
    for (let i = 0; i < count; i++) services.push(this.service())
    return services
  },
  bool () { return chance.bool() }
}
