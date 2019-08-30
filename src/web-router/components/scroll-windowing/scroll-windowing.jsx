import React, { PropTypes } from 'react'
import { cancelTimeout, requestTimeout } from './timeout'
import debounce from './debounce'
import callAll from './call-all'

/**
 * A "windowing" on scroll render prop.
 *
 * This render prop doesn't actually apply any windowing, instead it tracks
 * the scroll event and calculates which "rows" are currently visible within
 * the viewport, then passes the start and end range down.
 *
 * Any child component can then uses the `visibleStartRow` and `visibleEndRow`
 * values to apply their own method of windowing optimisation - mount/unmount,
 * shouldComponentUpdate, etc - to the relevant content items ("rows").
 *
 * Example usage:
 * ```
 * <ScrollWindowing rowHeight={48}>
 *  {({ getScrollProps, visibleStartRow, visibleEndRow }) => (
 *    // Scrollable container
 *    <div {...getScrollProps()}>
 *      {someContent.map((row, index) => (
 *        <MyComponent renderMe={index >= visibleStartRow && index <= visibleEndRow} />
 *      ))}
 *    </div>
 *  )}
 * </ScrollWindowing>
 * ```
 */
class ScrollWindowing extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isScrolling: false,
      scrollOffset: 0,
      visibleStartRow: 0,
      visibleEndRow: 0
    }

    this.initialsed = false
    this.ref = null
    this.resetTimeoutId = null

    this.getScrollProps = this.getScrollProps.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.setRef = this.setRef.bind(this)

    /**
     * Resizing is quite intensive, so it has been debounced to
     * only update once the user has finished or paused resizing.
     */
    this.onResize = debounce(150, this.onResize.bind(this))
  }

  /**
   * Listen for window resizing
   */
  componentDidMount () {
    window.addEventListener('resize', this.onResize)
  }

  /**
   * Unbind any event listener
   */
  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }

  /**
   * Stores a reference to the child's scrollable DOM element.
   *
   * @param {HTMLElemet} element
   */
  setRef (element) {
    if (element) {
      this.ref = element

      if (!this.initialsed) {
        this.initialsed = true
        /**
         * Trigger the `onScroll` event on first load to get the viewport
         * dimensions and set the visible indexes.
         */
        this.onScroll({ currentTarget: this.ref }, true)
      }
    }
  }

  /**
   * Trigger the `onScroll` event on resize/zoom to update
   * the viewport dimensions and visible indexes.
   */
  onResize () {
    if (this.ref && this.initialsed) {
      this.onScroll({ currentTarget: this.ref }, true)
    }
  }

  /**
   * Scroll event handler.
   *
   * This calculates which rows are visible to the user and
   * updates the row indexes in state.
   */
  onScroll (event, forceUpdate = false) {
    const { clientHeight, scrollHeight, scrollTop } = event.currentTarget

    this.setState(prevState => {
      // Ignore events if the position hasn't changed
      if (prevState.scrollOffset === scrollTop && !forceUpdate) {
        return null
      }

      // Get props
      const { rowBuffer, rowHeight } = this.props

      // Apply bounding limits - ignores any browser applied elastic easing
      const scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight))

      // Determine which rows should be rendered (are visible)
      const visibleStartRow = Math.max(0, Math.floor((scrollOffset / rowHeight) - rowBuffer))
      const visibleEndRow = Math.ceil((clientHeight / rowHeight) + visibleStartRow + (rowBuffer * 2))

      return {
        isScrolling: true,
        scrollOffset,
        visibleStartRow,
        visibleEndRow
      }
    }, this.resetIsScrolling)
  }

  /**
   * Resets the `state.isScrolling` property.
   *
   * This causes an additional render, so is debounced until
   * scrolling has finished.
   */
  resetIsScrolling () {
    // Cancel any old timeouts
    if (this.resetTimeoutId !== null) {
      cancelTimeout(this.resetTimeoutId)
    }

    // Start a new timeout (debounce)
    this.resetTimeoutId = requestTimeout(() => {
      this.setState({
        isScrolling: false
      })
    }, this.props.resetDelay)
  }

  /**
   * Return all props needed for the scollable child DOM element.
   * This must be spread over the DOM element by the user, e.g.
   * `<div {...getScrollProps()}>`
   */
  getScrollProps (userProps = {}) {
    const propKeys = Object.keys(userProps)
    const elementProps = { onScroll: this.onScroll }

    /**
     * Users can pass in custom event bindings (onScroll: () => ...) as props.
     * These are merged with our own, preventing either from being overwritten
     * when bound to the element.
     */
    const mergedProps = Object.keys(elementProps).reduce(
      (mergedObject, key) => {
        if (propKeys.includes(key) && typeof userProps[key] === 'function') {
          mergedObject[key] = callAll(elementProps[key], userProps[key])
        } else {
          mergedObject[key] = elementProps[key]
        }

        return mergedObject
      },
      {}
    )

    /**
     * Assemble all the values we want to expose to the user as `props`.
     * Order matters here because we want to override any custom event bindings passed
     * in by the user with the `mergedProps` that we constructed above,
     * so `mergedProps` must come after `userProps`.
     */
    return {
      ref: this.setRef,
      ...userProps,
      ...mergedProps
    }
  }

  /**
   * Properties exposed to the child component.
   */
  getStateAndHelpers () {
    /**
     * If the `rowCount` prop has been provided, then the user is probably only
     * mounting components when they're in the viewport. This means the browser
     * scroll bar will fluctuate in height. To avoid this, we provide a "spacer"
     * element which can be used to fix the child height.
     */
    const spacer = <div style={{
      display: 'block',
      position: 'relative',
      width: '0',
      height: `${this.props.rowHeight * this.props.rowCount}px`,
      float: 'left'
    }} />

    return {
      ...this.state,
      getScrollProps: this.getScrollProps,
      spacer
    }
  }

  render () {
    return this.props.children(this.getStateAndHelpers())
  }
}

ScrollWindowing.defaultProps = {
  // Debounce duration before reverting `isScrolling` to `false`
  resetDelay: 150,
  // The number of extra rows to render outside of the viewport
  rowBuffer: 2,
  // Total number of rows. Used to set the `spacer` height (if provided)
  rowCount: 0
}

ScrollWindowing.propTypes = {
  children: PropTypes.func.isRequired,
  resetDelay: PropTypes.number,
  rowBuffer: PropTypes.number,
  rowCount: PropTypes.number,
  rowHeight: PropTypes.number.isRequired
}

export default ScrollWindowing
