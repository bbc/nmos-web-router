import StubDiscovery from './stub'

export default function (options) {
  let stub = options.stub

  let delay = function () { return 0 }
  if (options.delay) delay = function () { return options.delay }
  else if (options.random) delay = function () { return Math.floor(Math.random() * 3000) }

  if (stub) return StubDiscovery(delay)
}
