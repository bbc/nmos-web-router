import updateFromGrains from './update-from-grains'

import add from './add-receiver'
import remove from './remove-receiver'

export default (data) => {
  return (grains) => {
    updateFromGrains({
      grains,
      data,
      add,
      remove
    })
  }
}
