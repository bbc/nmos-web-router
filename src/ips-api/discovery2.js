import StubDiscovery from './stub'

export default function (options) {
  let stub = options.stub
  let delay = options.delay || 0
  if (stub) return StubDiscovery(delay)
}
