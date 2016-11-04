import initialise from './initialise'
import initialiseError from './initialise-error-reducer'
import toggleSender from './connections/toggle-sender-reducer'
import unroute from './connections/unroute-reducer'
import route from './connections/route-reducer'
import update from './update'
import locationChange from './location-change-reducer'
import allVisible from './choose/all-visible-reducer'

export default {
  initialise,
  initialiseError,
  toggleSender,
  unroute,
  route,
  update,
  allVisible,
  all: {
    router: {
      LOCATION_CHANGE: locationChange
    }
  }
}
