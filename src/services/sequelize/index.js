import Sequelize from 'sequelize'
import { db } from '../../config'

let sequelize

if (db.uri && db.uri.length > 0) {
  sequelize = new Sequelize(db.uri, db.options)
} else {
  sequelize = new Sequelize(db.options)
}

export default sequelize
