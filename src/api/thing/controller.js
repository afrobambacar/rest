import { success, notFound } from '../../services/response'
import db from '../../services/db'

const Model = db.Thing

export const index = (req, res, next) =>
  Model.findAll()
    .then(success(res))
    .catch(next)

export const show = (req, res, next) => {
  const query = { where: { id: req.params.id } }
  return Model.findOne(query)
    .then(notFound(res))
    .then(success(res))
    .catch(next)
}

export const create = (req, res, next) =>
  Model.create(req.body)
    .then(success(res, 201))
    .catch(next)

export const update = (req, res, next) => {
  const query = { where: { id: req.params.id } }
  return Model.findOne(query)
    .then(notFound(res))
    .then(model =>
      model.update(req.body)
        .then(success(res))
    )
    .catch(next)
}

export const destroy = (req, res, next) => {
  const query = { where: { id: req.params.id } }
  return Model.destroy(query)
    .then(notFound(res))
    .then(success(res, 204))
    .catch(next)
}
