const jest = require('jest')
const watch = require('node-watch')
const path = require('path')

const TEST_DIR = path.join(process.cwd(), '__tests__')
const SRC_DIR = path.join(process.cwd(), 'src')

process.stdout.write('\033c')
console.log('WAITING FOR FILES CHANGES IN\n', TEST_DIR, '\n', SRC_DIR, '\n')
jest.run()
watch([TEST_DIR, SRC_DIR], () => {
  jest.run()
  process.stdout.write('\033c')
})
