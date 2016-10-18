import StubDiscovery from './stub'
import Discovery from './discovery'

export default function (options) {
  let stub = options.stub

  let delay = function () { return 0 }
  if (options.delay) delay = function () { return options.delay }
  else if (options.random) delay = function () { return Math.floor(Math.random() * 3000) }

  let NMOS = Discovery(options)
  if (stub) NMOS = StubDiscovery(delay)

  NMOS.defaultSort = function () {}

  return NMOS
}
