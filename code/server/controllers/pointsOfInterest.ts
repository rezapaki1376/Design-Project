const PointOfInterest = require('../database/models/pointsOfInterest')

exports.getAll = async (req, res, next) => {
  try {
    const all = await PointOfInterest.findAll()
    return res.status(200).json(all)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const poi = await PointOfInterest.findByPk(req.params.id)
    return res.status(200).json(poi)
  } catch (error) {
    return res.status(500).json(error)
  }
}

exports.getEventsById = async (req, res, next) => {
  try {
    const poi = await PointOfInterest.findByPk(req.params.id)
    const events = await poi.getEvents()
    return res.status(200).json(events)
  } catch (error) {
    return res.status(500).json(error)
  }
}
exports.getItinerariesByPoi = async (req, res, next) => {
  try {
    const poi = await PointOfInterest.findByPk(req.params.id)
    const itineraries = await poi.getItineraries()
    return res.status(200).json(itineraries)
  } catch (error) {
    return res.status(500).json(error)
  }
}

// exports.createOne = async (req, res, next) => {
//   try {
//     const truck_model: Omit<
//       PointOfInterestInterface,
//       'id' | 'createdAt' | 'updatedAt' | 'getDriver'
//     > = {
//       licenceplate: req.body.licenceplate,
//       inUse: req.body.inUse,
//       currentPosition: req.body.lastPosition,
//     }
//     try {
//       const truck = await PointOfInterest.create(truck_model)
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
//       PointOfInterestInterface,
//       'currentPosition' | 'inUse' | 'licenceplate'
//     > = {
//       currentPosition: req.body.username,
//       inUse: req.body.email,
//       licenceplate: req.body.email,
//     }
//     const driver = await PointOfInterest.update(driver_model, {
//       where: { id: req.params.id },
//     })
//     return res.status(201).json(driver)
//   } catch (error) {
//     return res.status(500).json(error)
//   }
// }

// exports.deleteOne = async (req, res, next) => {
//   try {
//     const driver = await PointOfInterest.destroy({ where: { id: req.params.id } })
//     return res.status(200).json(driver)
//   } catch (error) {
//     return res.status(500).json(error)
//   }
// }
