import processorGenerator from './processor-generator'

describe('processor generator', () => {
  xit('integers', () => {
    let out = processorGenerator.spec.integer()
    console.log(out)
  })

  xit('choices', () => {
    let out = processorGenerator.spec.choice()
    console.log(out)
  })

  xit('tags', () => {
    let out = processorGenerator.spec.tags()
    console.log(out)
  })

  xit('boolean', () => {
    let out = processorGenerator.spec.boolean()
    console.log(out)
  })

  xit('float', () => {
    let out = processorGenerator.spec.float()
    console.log(out)
  })

  xit('timestamp', () => {
    let out = processorGenerator.spec.timestamp()
    console.log(out)
  })

  xit('object', () => {
    let out = processorGenerator.spec.object()
    console.log(out)
  })

  xit('array', () => {
    let out = processorGenerator.spec.array()
    console.log(out)
  })

  xit('pair', () => {
    let out = processorGenerator.spec.pair()
    console.log(out)
  })
})
