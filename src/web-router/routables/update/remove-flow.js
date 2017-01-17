import mapSenderFormats from '../common/map-sender-formats'

export default ({data, grain}) => {
  let flow = grain.pre
  let index = -1
  data.flows.forEach((f, i) => {
    if (f.id === flow.id) index = i
  })
  data.flows.splice(index, 1)

  mapSenderFormats(data)
}
