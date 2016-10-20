import initialise from './initialise-dispatcher'
import update from './update-dispatcher'
import initialiseError from './initialise-error-dispatcher'
import toggleLeft from './connections/toggle-left-dispatcher'
import unroute from './connections/unroute-dispatcher'
import route from './connections/route-dispatcher'

export default {
  initialise,
  initialiseError,
  toggleLeft,
  unroute,
  route,
  update
}
