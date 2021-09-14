import express from 'express'
const server = express()

if (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production') {
  require('../build-path-resolver') // make sure the path is correct, in this example this code will call from `dist/server.js`, back one step and call `build-path-resolver.js` from root folder
}

import 'tsconfig-paths/register'
import config from '@config/config'

server.listen(config.port, () => console.log(`Server running on port ${config.port}.`))