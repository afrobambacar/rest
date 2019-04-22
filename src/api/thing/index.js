import { Router } from 'express'
import { index, show, create, update, destroy } from './controller'

const router = new Router()

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.patch('/:id', update)
router.delete('/:id', destroy)

export default router
