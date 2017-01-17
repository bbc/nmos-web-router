import View from '../view'
import isEmpty from '../common/is-empty'
const noop = () => {}

export default ({add, remove, grains, data}) => {
  grains.forEach(grain => {
    let hasPost = !isEmpty(grain.post)
    let hasPre = !isEmpty(grain.pre)
    let map = noop
    if (hasPost) map = add
    else if (hasPre) map = remove
    map({data, grain})
  })
  return View(data)
}
