import { Router } from 'express'
const controller = require('../controllers/events')

const router = Router()

router
  .get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .get('/:id/point_of_interest', controller.getPointOfInterest)
// .put('/:id', adminAuth.verifyAdmin, controller.updateOne)
// .delete('/:id', adminAuth.verifyAdmin, controller.deleteOne)

module.exports = router
