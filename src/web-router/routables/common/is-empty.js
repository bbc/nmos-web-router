export default (obj) => {
  return obj === undefined ||
    obj === null ||
    Object.keys(obj).length === 0 && obj.constructor === Object
}
