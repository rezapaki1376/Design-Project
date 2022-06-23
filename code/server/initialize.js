export default async (models) => {
  const locationList = [
    {
      name: 'Cat Paradise',
      city: 'Milan',
    },
    {
      name: 'Cat City',
      city: 'Rome',
    },
  ]
  const location0 = await models.Location.create(locationList[0])
  const location1 = await models.Location.create(locationList[1])
  const catList = [
    {
      name: 'Cat 1',
      breed: 'Siberian',
      description: 'Details about cat 1',
      img: 'https://fs.i3lab.group/hypermedia/cats/siberian.jpg',
      locationId: location0.id,
    },
    {
      name: 'Cat 2',
      breed: 'Birman',
      description: 'Details about cat 2',
      img: 'https://fs.i3lab.group/hypermedia/cats/birman.jpg',
      locationId: location0.id,
    },
    {
      name: 'Cat 3',
      breed: 'Bombay',
      description: 'Details about cat 3',
      img: 'https://fs.i3lab.group/hypermedia/cats/bombay.jpg',
      locationId: location0.id,
    },
    {
      name: 'Cat 4',
      breed: 'Calico',
      description: 'Details about cat 4',
      img: 'https://fs.i3lab.group/hypermedia/cats/calico.jpg',
      locationId: location1.id,
    },
    {
      name: 'Cat 5',
      breed: 'Maine Coon',
      description: 'Details about cat 5',
      img: 'https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg',
      locationId: location1.id,
    },
  ]
  await models.Cat.bulkCreate(catList)
}
