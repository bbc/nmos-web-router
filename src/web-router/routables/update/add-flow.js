import mapSenderFormats from '../common/map-sender-formats'

export default ({data, grain}) => {
  data.flows.push(grain.post)
  mapSenderFormats(data)
}
