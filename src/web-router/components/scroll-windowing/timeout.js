// Animation frame based implementation of setTimeout
// Based on the `react-window.timer` implementation - https://github.com/bvaughn/react-window
const getTime = typeof window.performance === 'object' && typeof window.performance.now === 'function'
  ? window.performance
  : Date

const cancelTimeout = timeout => window.cancelAnimationFrame(timeout.id)

const requestTimeout = (callback, delay) => {
  const start = getTime.now()

  const tick = () => {
    if (getTime.now() - start >= delay) {
      callback && callback()
    } else {
      timeout.id = window.requestAnimationFrame(tick)
    }
  }

  const timeout = {
    id: window.requestAnimationFrame(tick)
  }

  return timeout
}

export { cancelTimeout, requestTimeout }
