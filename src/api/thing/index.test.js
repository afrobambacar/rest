import request from 'supertest'
import jsend from 'jsend'
import express from '../../services/express'
import { apiRoot } from '../../config'
import routes from '.'
import { Thing } from '../../services/sequelize'

const app = () => express(apiRoot, routes)

let thing

beforeEach(async () => {
  thing = await Thing.create({ title: 'hello', body: 'world', active: true })
})

test('GET /things to be 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(jsend.isValid(body)).toBe(true)
})

test('GET /things/1 to be 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/1`)
  expect(status).toBe(200)
  expect(jsend.isValid(body)).toBe(true)
  expect(body.data.id).toBe(thing.id)
})

test('GET /things/2 to be 404', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/2`)
  expect(status).toBe(404)
})

test('POST /things to be 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({
      title: 'hello',
      body: 'world'
    })
    .set('Content-Type', 'application/json')
  expect(status).toBe(201)
  expect(jsend.isValid(body)).toBe(true)
})

test('PATCH /things/1 to be 200', async () => {
  const { status, body } = await request(app())
    .patch(`${apiRoot}/1`)
    .send({
      title: 'howdy',
      body: 'world'
    })
    .set('Content-Type', 'application/json')
  expect(status).toBe(200)
  expect(jsend.isValid(body)).toBe(true)
  expect(body.data.title).toMatch(/howdy/)
})

test('PATCH /things/1 to be 200', async () => {
  const { status, body } = await request(app())
    .patch(`${apiRoot}/1`)
    .send({
      title: 'howdy',
      body: 'world',
      active: false
    })
    .set('Content-Type', 'application/json')
  expect(status).toBe(200)
  expect(jsend.isValid(body)).toBe(true)
  expect(body.data.title).toMatch(/howdy/)
  expect(body.data.active).toBe(false)
})

test('DELETE /things/1 to be 204', async () => {
  const { status, body } = await request(app())
    .delete(`${apiRoot}/1`)
  expect(status).toBe(204)
  expect(typeof body).toBe('object')
})
