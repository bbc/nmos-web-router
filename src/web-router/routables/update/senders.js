import updateFromGrains from './update-from-grains'

import insert from '../insert/insert-senders'
import remove from './remove-sender'

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
