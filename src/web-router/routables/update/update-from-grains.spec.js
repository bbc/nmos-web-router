import updateFromGrains from './update-from-grains'

describe('updating from grains', () => {
  let add
  let added
  let remove
  let removed
  let data
  let id

  beforeEach(() => {
    added = 'not added'
    removed = 'not removed'
    data = {}
    id = 'id'
    add = () => {
      added = 'added'
    }
    remove = () => {
      removed = 'removed'
    }
  })

  it('removes when there is a pre only', () => {
    let grains = [{pre: {id}}]

    updateFromGrains({add, remove, grains, data})

    expect(removed).toBe('removed')
    expect(added).not.toBe('added')
  })

  it('adds when there is a post only', () => {
    let grains = [{post: {id}}]

    updateFromGrains({add, remove, grains, data})

    expect(removed).not.toBe('removed')
    expect(added).toBe('added')
  })

  it('does nothing if no post or pre', () => {
    let grains = [{}]

    updateFromGrains({add, remove, grains, data})

    expect(removed).not.toBe('removed')
    expect(added).not.toBe('added')
  })
})
