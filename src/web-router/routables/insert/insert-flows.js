import mapSenderFormats from '../common/map-sender-formats'
import addUnique from './add-unique'

export default (data, flows) => {
  if (!data.hasOwnProperty('flows')) data.flows = []
  addUnique(data, 'flows', flows)
  mapSenderFormats(data)
}
