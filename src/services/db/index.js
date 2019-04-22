import glob from 'glob'
import { syncModels } from '../../config'
import Sequelize from 'sequelize'
import sequelize from '../../services/sequelize'

const db = { Sequelize, sequelize }
const files = glob.sync('/src/api/**/model.js', {
  root: process.cwd()
})

files.forEach((file) => {
  const model = sequelize['import'](file)
  db[model.name] = model
})

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

if (syncModels) {
  db.sequelize.sync({
    force: false
  })
}

export default db
