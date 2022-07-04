import { Router } from 'express'
const controller = require('../controllers/pointsOfInterest')

const router = Router()

router
  .get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .get('/:id/events', controller.getEventsById)
  .get('/:id/itineraries_by_id', controller.getItinerariesByPoi)

module.exports = router
