import { Router } from 'express'
const controller = require('../controllers/pointOfInterests')

const router = Router()

router.get('/', controller.getAll).get('/:id', controller.getOne)
// .post('/', adminAuth.verifyAdmin, controller.createOne)
// .put('/:id', adminAuth.verifyAdmin, controller.updateOne)
// .delete('/:id', adminAuth.verifyAdmin, controller.deleteOne)

module.exports = router
