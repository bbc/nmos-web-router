const RATIO = 12
const SCROLL_JUMP = 15
const POINT_WIDTH = 10

export default (actions) => {
  let webRouterContainer, webRouterContainerRects, webRouterContainerHeight, boundary

  function getMouse (evt) {
    let x = -3 * POINT_WIDTH
    if (evt.changedTouches) x += evt.changedTouches[0].pageX
    else if (evt.pageX) x += evt.pageX
    let offset = webRouterContainer.scrollTop - webRouterContainerRects.top
    let y = offset - window.scrollY
    if (evt.changedTouches) y += evt.changedTouches[0].pageY
    else if (evt.pageY) y += evt.pageY
    return { x, y, offset }
  }

  function drag (evt, routable, status, side) {
    let mouse = getMouse(evt)
    actions.drag({
      routable,
      status,
      side,
      mouse
    })
  }

  function scrollWebRouterContainer (evt, webRouterContainer, webRouterContainerRects, boundary) {
    let mouseY = -webRouterContainerRects.top
    if (evt.changedTouches) mouseY += evt.changedTouches[0].pageY
    else if (evt.pageY) mouseY += evt.pageY
    let scrollDistance = 0
    if (mouseY < boundary) scrollDistance = -SCROLL_JUMP
    else if (mouseY > (RATIO - 1) * boundary) scrollDistance = SCROLL_JUMP
    webRouterContainer.scrollTop += scrollDistance
  }

  let scroll = function () {}
  let interval = null
  function createScroll (routable, side) {
    return function (evt) {
      evt.preventDefault()
      clearInterval(interval)
      interval = setInterval(function () {
        scrollWebRouterContainer(evt, webRouterContainer, webRouterContainerRects, boundary)
        drag(evt, routable, 'dragging', side)
      }, 100)
    }
  }

  function addScrollEventListeners (routable, side) {
    scroll = createScroll(routable, side)
    document.addEventListener('touchmove', scroll)
    document.addEventListener('mousemove', scroll)
  }

  function removeScrollEventListeners () {
    clearInterval(interval)
    document.removeEventListener('touchmove', scroll)
    document.removeEventListener('mousemove', scroll)
  }

  return (evt, routable, status, side) => {
    webRouterContainer = document.querySelector('.web-router-container')
    webRouterContainerRects = webRouterContainer.getClientRects().item(0)
    webRouterContainerHeight = webRouterContainerRects.height - webRouterContainerRects.top
    boundary = webRouterContainerHeight / RATIO

    if (status === 'started') addScrollEventListeners(routable, side)
    else if (status === 'stopped') removeScrollEventListeners()

    scrollWebRouterContainer(evt, webRouterContainer, webRouterContainerRects, boundary)
    drag(evt, routable, status, side)
  }
}
