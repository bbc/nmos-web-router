import initialise from './initialise-dispatcher'
import update from './update-dispatcher'
import initialiseError from './initialise-error-dispatcher'
import toggleSender from './connections/toggle-sender-dispatcher'
import unroute from './connections/unroute-dispatcher'
import route from './connections/route-dispatcher'
import nodeRendered from './connections/node-rendered-dispatcher'
import search from './choose/search-dispatcher'
import allVisible from './choose/all-visible-dispatcher'
import check from './choose/check-dispatcher'
import alert from './notifications/alert-dispatcher'
import info from './notifications/info-dispatcher'
import allClear from './notifications/all-clear-dispatcher'
import checkForExpired from './check-for-expired-dispatcher'
import deleteExpired from './delete-expired-dispatcher'
import changeMode from './change-mode-dispatcher'
import addChange from './confirm/add-change-dispatcher'
import unstageChange from './confirm/unstage-change-dispatcher'
import deployRoute from './confirm/deploy-route-dispatcher'
import deployUnroute from './confirm/deploy-unroute-dispatcher'

export default {
  initialise,
  initialiseError,
  toggleSender,
  unroute,
  route,
  nodeRendered,
  update,
  search,
  allVisible,
  check,
  alert,
  info,
  allClear,
  checkForExpired,
  deleteExpired,
  changeMode,
  addChange,
  unstageChange,
  deployRoute,
  deployUnroute
}
