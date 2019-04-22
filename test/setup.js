import sequelize from '../src/services/sequelize'

beforeAll(async () => {
  await sequelize.authenticate()
})

afterAll(async () => {
  await sequelize.close()
})

afterEach(async () => {
  const { models } = sequelize
  const promises = []
  Object.values(models).map((model) => {
    promises.push(model.sync({
      force: true
    }))
  })
  await Promise.all(promises)
})
