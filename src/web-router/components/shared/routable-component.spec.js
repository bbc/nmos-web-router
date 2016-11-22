import React from 'react'
import Routable from './routable-component'
import renderer from 'react-test-renderer'

const routable = {
  label: 'routable-label',
  state: ['routable-first', 'routable-second'],
  node: {
    state: ['node-first', 'node-second']
  }
}

describe('Routable Component', () => {
  it('Default has no node, no checkbox and all functions are noop, help icon and a label', () => {
    const tree = renderer.create(
      <Routable
        routable={routable}
        />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Can have an optional baseState', () => {
    const tree = renderer.create(
      <Routable
        routable={routable}
        baseState='base-state'
        />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Can have a node but routable needs to have state and a node state', () => {
    const tree = renderer.create(
      <Routable
        routable={routable}
        node
        />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Can have a checkbox', () => {
    const tree = renderer.create(
      <Routable
        routable={routable}
        checkbox
        />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Can have onClick which is applied to parent routable', () => {
    const tree = renderer.create(
      <Routable
        routable={routable}
        onClick={() => { }}
        />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Can have onButton which is an onClick on the button', () => {
    const tree = renderer.create(
      <Routable
        routable={routable}
        onButton={() => { }}
        />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Can have onNode which is an onClick on the node, must have node', () => {
    const tree = renderer.create(
      <Routable
        routable={routable}
        onNode={() => { }}
        node
        />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Can have onCheckbox which is an onClick on the checkbox, must have checkbox', () => {
    const tree = renderer.create(
      <Routable
        routable={routable}
        onCheckbox={() => { }}
        checkbox
        />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Can have onNodeRender which is fired when a node is rendered for the first time, must have a node', () => {
    let rendered = 'not fired'
    const tree = renderer.create(
      <Routable
        routable={routable}
        onNodeRender={() => { rendered = 'was rendered' }}
        node
        />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(rendered).toBe('was rendered')
  })
})
