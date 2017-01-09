import 'normalize.css'
import './index.css'
import start from './start'
import parseURL from './parse-url'
import initNMOS from './init-nmos'

const parsedUrl = parseURL(window.location)
const queryUrl = parsedUrl.query('url').string
const queryStub = parsedUrl.query('stub').boolean

if (queryStub || queryUrl) start(queryStub, queryUrl)
else initNMOS(start)
