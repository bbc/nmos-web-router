import updateFromGrains from './update-from-grains'

describe('updating from grains', () => {
  let add
  let added
  let update
  let updated
  let remove
  let removed
  let data
  let id

  beforeEach(() => {
    added = 'not added'
    removed = 'not removed'
    updated = 'not updated'
    data = {}
    id = 'id'
    add = () => {
      added = 'added'
    }
    remove = () => {
      removed = 'removed'
    }
    update = () => {
      updated = 'updated'
    }
  })

  it('updates when there is a post and a pre', () => {
    let grains = [{post: {id}, pre: {id}}]

    updateFromGrains({add, remove, update, grains, data})

    expect(updated).toBe('updated')
    expect(removed).not.toBe('removed')
    expect(added).not.toBe('added')
  })

  it('removes when there is a pre only', () => {
    let grains = [{pre: {id}}]

    updateFromGrains({add, remove, update, grains, data})

    expect(updated).not.toBe('updated')
    expect(removed).toBe('removed')
    expect(added).not.toBe('added')
  })

  it('adds when there is a post only', () => {
    let grains = [{post: {id}}]

    updateFromGrains({add, remove, update, grains, data})

    expect(updated).not.toBe('updated')
    expect(removed).not.toBe('removed')
    expect(added).toBe('added')
  })

  it('does nothing if no post or pred', () => {
    let grains = [{post: {}, pre: {}}]

    updateFromGrains({add, remove, update, grains, data})

    expect(updated).not.toBe('updated')
    expect(removed).not.toBe('removed')
    expect(added).not.toBe('added')
  })
})
