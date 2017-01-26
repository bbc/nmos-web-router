const chance = require('chance')()
const noop = () => {}

let spec = (type, defaultFn) => {
  defaultFn = defaultFn || noop
  return {
    type,
    writeable: chance.bool(),
    max_modify_state: chance.integer({
      min: 0,
      max: 100
    }),
    detail_level: chance.pick([0, 1]),
    description: chance.sentence(),
    default: defaultFn()
  }
}

let randomObject = () => {
  let keys = chance.sentence().replace('.', '').split(' ')
  let items = {}
  keys.forEach(key => {
    items[key] = chance.word()
  })
  return items
}

let randomDefaultObject = (items) => {
  return items[chance.pick(Object.keys(items))]
}

module.exports = {
  spec: {
    integer () {
      let out = spec('INTEGER', () => {
        return chance.integer({min: 1, max: 999})
      })
      out.div_per_unit = 1
      out.scale = chance.pick(['LIN', 'port'])
      out.min = chance.integer({min: 1, max: 99})
      out.max = chance.integer({min: 100, max: 999})
      out.units = chance.word()
      return out
    },
    float () {
      let out = spec('INTEGER', () => {
        return chance.floating({min: 1, max: 999})
      })
      out.div_per_unit = 1
      out.scale = chance.pick(['LIN', 'port'])
      out.min = chance.floating({min: 1, max: 99})
      out.max = chance.floating({min: 100, max: 999})
      out.units = chance.word()
      return out
    },
    choice () {
      let items = randomObject()
      let out = spec('CHOICE', randomDefaultObject)
      out.items = items
      return out
    },
    tags () {
      let items = randomObject()
      let out = spec('TAGS', () => {
        return items
      })
      return out
    },
    boolean () {
      let out = spec('BOOLEAN', () => {
        return chance.bool()
      })
      return out
    },
    timestamp () {
      let out = spec('TIMESTAMP', () => {
        let date = chance.date()
        return `${date.getHours()}:${date.getMinutes()}`
      })
      return out
    },
    array () {
      let out = spec('ARRAY', () => {
        return []
      })
      return out
    },
    pair () {
      let out = spec('PAIR', () => {
        return []
      })
      return out
    },
    object () {
      let out = spec('OBJECT', () => {
        return {}
      })
      return out
    }
  }
}
