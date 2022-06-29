import { EventInterface } from './models/events'

export default async function databaseSeeding() {
  const eventsData = require('../database/data/events.json')
  const Events = require('../database/models/events')
  const eventsItems = await Events.bulkCreate(eventsData)

  const itinerariesData = require('../database/data/itineraries.json')
  const Itinerary = require('../database/models/itineraries')
  const itinerariesItems = await Itinerary.bulkCreate(itinerariesData)

  const pointsOfInterestData = require('../database/data/points_of_interests.json')
  const PointOfInterest = require('../database/models/pointsOfInterest')
  const pointsOfInterestItems = await PointOfInterest.bulkCreate(
    pointsOfInterestData
  )

  const serviceData = require('../database/data/services.json')
  const Service = require('../database/models/services')
  const servicesItems = await Service.bulkCreate(serviceData)

  return servicesItems
}
