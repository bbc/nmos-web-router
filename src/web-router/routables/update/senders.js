import updateFromGrains from './update-from-grains'

import update from './update-sender'
import add from './add-sender'
import remove from './remove-sender'

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
