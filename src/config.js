/* eslint-disable no-unused-vars */
import path from 'path'
import merge from 'lodash/merge'

/* istanbul ignore next */
const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable')
  }
  return process.env[name]
}

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv-safe')
  dotenv.load({
    sample: path.join(__dirname, '../.env')
  })
}

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: process.env.API_ROOT || '',
    syncModels: false,
    db: {
      options: {
        dialect: 'mysql',
        timezone: 'Asia/Seoul',
        logging: false,
        benchmark: false,
        operatorsAliases: false
      }
    }
  },
  test: {
    syncModels: true,
    db: {
      uri: 'mysql://root:example@localhost:9001/api_dev'
    }
  },
  development: {
    syncModels: true,
    db: {
      uri: 'mysql://root:example@host.docker.internal:3306/api_dev'
    }
  },
  production: {}
}

module.exports = merge(config.all, config[config.all.env])
export default module.exports
