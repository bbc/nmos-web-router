import 'normalize.css'
import './index.css'
import start from './start'
import parseURL from './parse-url'
import initNMOS from './init-nmos'

const parsedUrl = parseURL(window.location)
const queryUrl = parsedUrl.query('url').string
const apiVersion = parsedUrl.query('version').string
const queryStub = parsedUrl.query('stub').boolean

if (queryStub || (queryUrl && apiVersion)) start(queryStub, queryUrl, apiVersion)
else initNMOS(start)
