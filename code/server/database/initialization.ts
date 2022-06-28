import { EventInterface } from './models/events'

export default async function databaseSeeding() {
  const Event = require('../database/models/events')
  const Itinerary = require('../database/models/itineraries')
  const PointOfInterest = require('../database/models/pointOfInterests')

  const event1 = await Event.create({
    poiId: 1,
    description: 'This is a decription of the point of interest',
    imageUrl: 'URL/pointOfInterest.png',
    date: '12.12.2015',
    timeDuration: '20:00-21:00',
    eventUrl: 'eventURL/pointOfInterest.png',
    price: 50,
    address: 'Carl-von-Ossietzykt.33, Potsdam, Australia',
    title: 'This is a title of the point of interest',
    organisation: 'ByteAffairs',
    season: 'WINTER',
  })
  return event1
}
