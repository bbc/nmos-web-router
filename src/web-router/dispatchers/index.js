import initialise from './initialise-dispatcher'
import update from './update-dispatcher'
import initialiseError from './initialise-error-dispatcher'
import toggleSender from './connections/toggle-sender-dispatcher'
import unroute from './connections/unroute-dispatcher'
import route from './connections/route-dispatcher'
import search from './choose/search-dispatcher'
import allVisible from './choose/all-visible-dispatcher'
import check from './choose/check-dispatcher'
import alert from './notifications/alert-dispatcher'
import allClear from './notifications/all-clear-dispatcher'

export default {
  initialise,
  initialiseError,
  toggleSender,
  unroute,
  route,
  update,
  search,
  allVisible,
  check,
  alert,
  allClear
}
