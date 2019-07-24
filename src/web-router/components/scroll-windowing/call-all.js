/**
 * This returns a function that will call all the given functions with
 * the arguments with which it's called. It does a null-check before
 * attempting to call the functions and can take any number of functions.
 */
export default (...fns) => (...args) =>
  fns.forEach(fn => fn && fn(...args))
