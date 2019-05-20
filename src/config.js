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
    syncForce: false,
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
      uri: requireProcessEnv('DB_TEST_URI')
    }
  },
  development: {
    syncModels: true,
    db: {
      uri: requireProcessEnv('DB_URI')
    }
  },
  production: {}
}

module.exports = merge(config.all, config[config.all.env])
export default module.exports
