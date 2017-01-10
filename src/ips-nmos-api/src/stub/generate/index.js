let chance = require('chance')()

function generate (generateFunc, count) {
  if (count === 'random') count = chance.natural({min: 1, max: 100})
  count = count || chance.natural({min: 1, max: 100})
  let data = []
  for (let i = 0; i < count; i++) data.push(generateFunc())
  return data
}

module.exports = {
  device: require('./device'),
  devices (count) {
    return generate(this.device, count)
  },
  flow: require('./flow'),
  flows (count) {
    return generate(this.flow, count)
  },
  node: require('./node'),
  nodes (count) {
    return generate(this.node, count)
  },
  random: require('./random'),
  randoms (count) {
    return generate(this.random, count)
  },
  receiver: require('./receiver'),
  receivers (count) {
    return generate(this.receiver, count)
  },
  sender: require('./sender'),
  senders (count) {
    return generate(this.sender, count)
  },
  source: require('./source'),
  sources (count) {
    return generate(this.source, count)
  },
  subscription: require('./subscription'),
  subscriptions (count) {
    return generate(this.subscription, count)
  }
}
