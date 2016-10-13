import changeCase from 'change-case'
import chalk from 'chalk'
import Discovery from '../../src/ips-api/discovery2'

const types = {
  flows: '4e133174-0a34-47d7-90ae-7f1191e27d21',
  nodes: '59faee58-78f4-11e6-abfc-0cc47aa8aff8',
  devices: 'c0aacab4-d8c0-308e-9500-0e28072ebb69',
  senders: '442b2e2b-8286-4ed4-906d-e5eb34a0ea0d',
  receivers: 'd1ea51b2-556e-42e6-8d21-2825f621d6fd'
}

const typesSortedByLabelOnly = [
  'nodes',
  'devices',
  'senders'
]

const typesSortedByFormatThenLabel = {
  receivers: {
    video: [0, 22],
    audio: [22, 24]
  },
  flows: {
    video: [0, 57],
    audio: [57, 73],
    data: [73, 75]
  }
}

function expectToBeAlphabetical (data) {
  let labels = data
    .map(receiver => {
      return receiver.label.toUpperCase()
    })
  let clone = [].concat(labels)
  labels.sort()
  expect(labels).toEqual(clone)
}

function prettyName (name) {
  return chalk.bold.yellow(changeCase.title(name) + '\x1b[0m')
}

function resolvePromise (promise, done, test) {
  promise.then(data => {
    test(data)
    done()
  }).catch(error => {
    fail(error)
    done()
  })
}

function rejectPromise (promise, done, test, resolveFailMessage) {
  promise
    .then(data => {
      fail(resolveFailMessage(data))
      done()
    })
    .catch(error => {
      try {
        test(error)
      } catch (e) {
        fail(e)
        done()
      }
      done()
    })
}

describe('Discovery - stub data', () => {
  let discovery = Discovery({ stub: true })

  describe('Subscriptions', () => {
    pit('Returns all data', (done) => {
      resolvePromise(discovery.subscriptions(), done, (data) => {
        expect(data).toEqual(jasmine.any(Array))
        expect(data).not.toEqual([])
      })
    })
  })

  Object.keys(types).forEach(type => {
    let id = types[type]

    describe(changeCase.title(type), () => {
      pit('Errors on invalid id', (done) => {
        rejectPromise(discovery[type]('invalid'), done, (error) => {
          expect(error).toBe('404')
        }, (data) => {
          return `${prettyName(type)} should have errored but instead resolved with ${chalk.red(JSON.stringify(data))}`
        })
      })

      pit('Returns all data if no id given', (done) => {
        resolvePromise(discovery[type](), done, (data) => {
          expect(data).toEqual(jasmine.any(Array))
          expect(data).not.toEqual([])
        })
      })

      pit('Has no loki data', (done) => {
        resolvePromise(discovery[type](id), done, (data) => {
          expect(data.version).not.toBeDefined()
          expect(data.meta).not.toBeDefined()
          expect(data['$loki']).not.toBeDefined()
        })
      })

      pit('Returns item with same id', (done) => {
        resolvePromise(discovery[type](id), done, (data) => {
          expect(data.id).toBe(id)
        })
      })
    })
  })

  describe('Sorting', () => {
    Object.keys(typesSortedByFormatThenLabel).forEach(type => {
      pit(`Sorts ${prettyName(type)} by format (video > audio > data) then label`, (done) => {
        resolvePromise(discovery[type](), done, (data) => {
          let formatRanges = typesSortedByFormatThenLabel[type]

          Object.keys(formatRanges).forEach(format => {
            let range = formatRanges[format]
            for (let i = range[0]; i < range[1]; i++) expect(data[i].format).toContain(format)

            let sample = data
            .filter(receiver => {
              return receiver.format.includes(format)
            })
            expectToBeAlphabetical(sample)
          })
        })
      })
    })

    typesSortedByLabelOnly.forEach((type) => {
      pit(`Sorts ${prettyName(type)} by label`, (done) => {
        resolvePromise(discovery[type](), done, (data) => {
          expectToBeAlphabetical(data)
        })
      })
    })
  })
})
