/**
 * Delay a function call by an amount of time
 * since the last call attempt.
 *
 * @param {Number} delay wait before function is called
 * @param {Function} fn function to call after delay
 */
export default (delay, fn) => {
  let timerId

  return (...args) => {
    if (timerId) {
      window.clearTimeout(timerId)
    }

    /**
     * Call the function after a delay. This will be
     * cleared and restarted debounce is called again.
     */
    timerId = window.setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}
