import updateFromGrains from './update-from-grains'

import insert from '../insert/insert-sens'
import remove from './remove-sender'

export default (data) => {
  return (grains) => {
    updateFromGrains({
      grains,
      data,
      add (grain) {
        insert(data, [grain.post])
      },
      remove
    })
  }
}
