import mapSenderFormats from '../common/map-sender-formats'

export default (data, flows) => {
  if (!data.hasOwnProperty('flows')) data.flows = flows
  else data.flows = data.flows.concat(flows)
  mapSenderFormats(data)
}
