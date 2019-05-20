import { sequelize } from '../src/services/sequelize'

beforeAll(async () => {
  await sequelize.authenticate()
})

afterAll(async () => {
  await sequelize.close()
})

afterEach(async () => {
  const { models } = sequelize
  const promises = Object.values(models).map((model) =>
    model.truncate({ force: true })
  )
  await Promise.all(promises)
})
