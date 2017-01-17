import insertFlows from '../insert/insert-flows'

export default ({data, grain}) => {
  insertFlows(data, [grain.post])
}
