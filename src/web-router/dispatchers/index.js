import initialise from './initialise-dispatcher'
import update from './update-dispatcher'
import initialiseError from './initialise-error-dispatcher'
import toggleSender from './connections/toggle-left-dispatcher'
import unroute from './connections/unroute-dispatcher'
import route from './connections/route-dispatcher'

export default {
  initialise,
  initialiseError,
  toggleSender,
  unroute,
  route,
  update
}
