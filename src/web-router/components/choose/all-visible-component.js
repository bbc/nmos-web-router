import React, { PropTypes } from 'react'
import { LongPrimer } from '../../../gel-react/typography'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Checkbox from '../../../components/checkbox-component'

let Visible = ({type, allVisible, state}) => {
  return <LayoutItem gels='1/1' className='all-visible-label'>
    <LongPrimer>All Visible</LongPrimer>
    <Checkbox
      onClick={function () {
        allVisible(type)
      }}
      state={state} />
  </LayoutItem>
}

Visible.propTypes = {
  type: PropTypes.string.isRequired,
  allVisible: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired
}

let AllVisible = ({allVisible, state}) => {
  return <Layout>
    <LayoutItem className='all-visible all-visible-left' gels='1/2'>
      <Visible
        state={state.senders}
        type='senders'
        allVisible={allVisible} />
    </LayoutItem>
    <LayoutItem className='all-visible all-visible-right' gels='1/2'>
      <Visible
        state={state.receivers}
        type='receivers'
        allVisible={allVisible} />
    </LayoutItem>
  </Layout>
}

AllVisible.propTypes = {
  allVisible: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}

export default AllVisible
