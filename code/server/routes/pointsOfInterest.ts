import { Router } from 'express'
const controller = require('../controllers/pointsOfInterest')

const router = Router()

router
  .get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .get('/:id/events', controller.getEventsById)

module.exports = router
