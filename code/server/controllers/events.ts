import { EventInterface } from '../database/models/events'

const Event = require('../database/models/events')

exports.getAll = async (req, res, next) => {
  try {
    const all = await Event.findAll()
    return res.status(200).json(all)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const driver = await Event.findByPk(req.params.id)
    return res.status(200).json(driver)
  } catch (error) {
    return res.status(500).json(error)
  }
}

// exports.createOne = async (req, res, next) => {
//   try {
//     const truck_model: Omit<
//       EventInterface,
//       'id' | 'createdAt' | 'updatedAt' | 'getDriver'
//     > = {
//       licenceplate: req.body.licenceplate,
//       inUse: req.body.inUse,
//       currentPosition: req.body.lastPosition,
//     }
//     try {
//       const truck = await Event.create(truck_model)
//       return res.status(201).json(truck)
//     } catch (error) {
//       return res.status(500).json(error)
//     }
//   } catch (error) {
//     return res.status(500).json(error)
//   }
// }
// exports.updateOne = async (req, res, next) => {
//   try {
//     const driver_model: Pick<
//       EventInterface,
//       'currentPosition' | 'inUse' | 'licenceplate'
//     > = {
//       currentPosition: req.body.username,
//       inUse: req.body.email,
//       licenceplate: req.body.email,
//     }
//     const driver = await Event.update(driver_model, {
//       where: { id: req.params.id },
//     })
//     return res.status(201).json(driver)
//   } catch (error) {
//     return res.status(500).json(error)
//   }
// }

// exports.deleteOne = async (req, res, next) => {
//   try {
//     const driver = await Event.destroy({ where: { id: req.params.id } })
//     return res.status(200).json(driver)
//   } catch (error) {
//     return res.status(500).json(error)
//   }
// }
