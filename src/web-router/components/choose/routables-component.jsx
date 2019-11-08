import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'
import { ROUTABLE_ROW_HEIGHT } from '../scroll-windowing/constants'

class Routables extends React.Component {
  constructor (props) {
    super(props)

    this.onCheckbox = this.onCheckbox.bind(this)
  }

  onCheckbox (routable) {
    const { actions, expanded, type } = this.props

    if (!expanded.state.includes('contracted')) {
      actions.toggleSender(expanded)
    }
    actions.check(routable, type)
  }

  render () {
    const { side, visibleStartRow, visibleEndRow } = this.props

    // Only mount the elements within the viewport
    const routables = this.props.routables
      // Store the original index so we can calculate the element's correct absolute position
      .map((routable, index) => ({ routable, originalIndex: index }))
      // Remove any components not visible to the user - this greatly improves the search performance
      .filter((_, index) => index >= visibleStartRow && index <= visibleEndRow)
      .map(({routable, originalIndex}, index) => {
        /**
         * We need to push the first element down to the position it would have been, had
         * element in the list been rendered. If we don't then, as they're all positioned
         * relatively, the list will remain at the top of the parent container, rather
         * than move inline with the scroll.
         */
        const positionStyling = index === 0
          ? { marginTop: `${originalIndex * ROUTABLE_ROW_HEIGHT}px` }
          : null
        return (
          <div
            key={`${side}-${routable.id}`}
            style={positionStyling}
          >
            <Routable
              baseState='static'
              checkbox
              routable={routable}
              onCheckbox={this.onCheckbox}
            />
          </div>
        )
      })

    return <LayoutItem gels='1/2' className={`routables-${side}`}>
      {routables}
    </LayoutItem>
  }
}

Routables.propTypes = {
  routables: PropTypes.array.isRequired,
  side: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired,
  visibleStartRow: PropTypes.number.isRequired,
  visibleEndRow: PropTypes.number.isRequired
}

export default Routables
