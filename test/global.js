import { sequelize } from '../src/services/sequelize'
import { syncForce, syncModels } from '../src/config'

export default async () => {
  await sequelize.authenticate()

  if (syncModels) {
    await sequelize.sync({ force: syncForce })
  }
}
