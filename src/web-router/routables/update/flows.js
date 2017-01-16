import updateFromGrains from './update-from-grains'

import update from './update-flow'
import add from './add-flow'
import remove from './remove-flow'

export default (data) => {
  return (grains) => {
    updateFromGrains({
      grains,
      data,
      add,
      remove,
      update
    })
  }
}
