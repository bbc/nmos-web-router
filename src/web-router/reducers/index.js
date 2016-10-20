import initialise from './initialise'
import initialiseError from './initialise-error-reducer'
import toggleSender from './connections/toggle-left-reducer'
import unroute from './connections/unroute-reducer'
import route from './connections/route-reducer'
import update from './update'

export default {
  initialise,
  initialiseError,
  toggleSender,
  unroute,
  route,
  update
}
