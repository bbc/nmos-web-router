import React from 'react'
import Routable from './routable-component'
import renderer from 'react-test-renderer'

const routable = {
  label: 'routable-label'
}

describe('Routable Component', () => {
  it('Default has no node, no checkbox and all functions are noop, help icon and a label', () => {
    const tree = renderer.create(
      <Routable
        routable={routable}
        />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
