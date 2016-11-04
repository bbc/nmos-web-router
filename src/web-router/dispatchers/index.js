import initialise from './initialise-dispatcher'
import update from './update-dispatcher'
import initialiseError from './initialise-error-dispatcher'
import toggleSender from './connections/toggle-sender-dispatcher'
import unroute from './connections/unroute-dispatcher'
import route from './connections/route-dispatcher'
import search from './choose/search-dispatcher'
import allVisible from './choose/all-visible-dispatcher'

export default {
  initialise,
  initialiseError,
  toggleSender,
  unroute,
  route,
  update,
  search,
  allVisible
}
