import updateFromGrains from './update-from-grains'

import insert from '../insert/insert-flows'
import remove from './remove-flow'

export default (data) => {
  return (grains) => {
    updateFromGrains({
      grains,
      data,
      add ({grain}) {
        insert(data, [grain.post])
      },
      remove
    })
  }
}
