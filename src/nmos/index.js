import Stub from './stub'
import Http from './http'
import defaultSort from './default-sort'

export default function (options) {
  let stub = options.stub

  let delay = function () { return 0 }
  if (options.delay) delay = function () { return options.delay }
  else if (options.random) delay = function () { return Math.floor(Math.random() * 3000) }

  let NMOS = Http(options)
  if (stub) NMOS = Stub(delay)

  NMOS.defaultSort = defaultSort

  return NMOS
}
