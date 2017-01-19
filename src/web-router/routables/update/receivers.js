import updateFromGrains from './update-from-grains'

import insert from '../insert/insert-receivers'
import remove from './remove-receiver'

export default (data) => {
  return (grains) => {
    updateFromGrains({
      grains,
      data,
      add ({grain}) {
        insert(data, [grain.post], true)
      },
      remove
    })
  }
}
