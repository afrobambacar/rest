import glob from 'glob'
import Sequelize from 'sequelize'
import { db } from '../../config'

let sequelize

if (db.uri && db.uri.length > 0) {
  sequelize = new Sequelize(db.uri, db.options)
} else {
  sequelize = new Sequelize(db.options)
}

const files = glob.sync('/src/services/sequelize/models/**.js', {
  root: process.cwd()
})

const models = { sequelize }

files.forEach((file) => {
  const model = sequelize.import(file)
  models[model.name] = model
})

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

module.exports = models
export default module.exports
