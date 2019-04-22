import express from 'express'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'
import jsend from 'jsend'
import errorHandler from 'errorhandler'
import { env } from '../../config'

export default (apiRoot, routes) => {
  const app = express()

  /* istanbul ignore next */
  if (env === 'production' || env === 'development') {
    app.use(cors())
    app.use(compression())
  }

  app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }))
  app.use(bodyParser.json())
  app.use(jsend.middleware)
  app.use(apiRoot, routes)
  app.use(errorHandler())

  return app
}
