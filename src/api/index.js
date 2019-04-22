import { Router } from 'express'
import thing from './thing'

const router = new Router()

router.use('/things', thing)

export default router
