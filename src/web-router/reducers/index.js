import initialise from './initialise-reducer'
import updateData from './update-data-reducer'
import initialiseError from './initialise-error-reducer'
import reset from './reset-reducer'
import toggleConnections from './toggle-connections-reducer'
import updateConnections from './update-connections-reducer'
import remove from './remove-reducer'
import drag from './drag-reducer'
import location from './location-reducer'

export default {
  initialise,
  updateData,
  initialiseError,
  reset,
  toggleConnections,
  updateConnections,
  remove,
  drag,
  all: {
    router: {
      LOCATION_CHANGE: location
    }
  }
}
