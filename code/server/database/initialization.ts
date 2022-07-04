import { EventInterface } from './models/events'
export default async function databaseSeeding() {
  const pointsOfInterestData = require('../database/data/points_of_interests.json')
  const PointOfInterest = require('../database/models/pointsOfInterest')

  await pointsOfInterestData.forEach(async (element) => {
    const poiInstance = await PointOfInterest.create(element)
    Promise.all(
      element.eventList.map(async (eventItem) => {
        const createdEventItem = await poiInstance.createEvent(eventItem)
        console.log(createdEventItem)
      })
    )
  })
  // const poiInstance = await PointOfInterest.create(pointsOfInterestData[0])
  // console.log(poiInstance)
  // await poiInstance.createEvent(pointsOfInterestData[0].eventList[0])

  // const bla = await pointsOfInterestData.forEach(async (element) => {
  //   console.log(element.verboseIdentifier)
  //   await PointOfInterest.create(element, {
  //     association: Event,
  //     as: 'events',
  //   })
  // })
  // const eventsData = require('../database/data/events.json')
  // const Events = require('../database/models/events')
  // const eventsItems = await Events.bulkCreate(eventsData)

  // const itinerariesData = require('../database/data/itineraries.json')
  // const Itinerary = require('../database/models/itineraries')
  // const itinerariesItems = await Itinerary.bulkCreate(itinerariesData)

  const serviceData = require('../database/data/services.json')
  const Service = require('../database/models/services')
  const servicesItems = await Service.bulkCreate(serviceData)

  return []
}
