import Routables from '..'
import isEmpty from '../common/is-empty'
const noop = () => {}

export default ({add, remove, update, grains, data}) => {
  grains.forEach(grain => {
    let hasPost = !isEmpty(grain.post)
    let hasPre = !isEmpty(grain.pre)
    let map = noop
    if (hasPost && hasPre) map = update
    else if (hasPost) map = add
    else if (hasPre) map = remove
    map({data, grain})
  })
  return Routables(data)
}
