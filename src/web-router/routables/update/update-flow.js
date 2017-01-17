import mapSenderFormats from '../common/map-sender-formats'

export default ({data, grain}) => {
  data.flows.forEach((flow, index) => {
    if (flow.id === grain.pre.id) data.flows[index] = grain.post
  })

  mapSenderFormats(data)
}
