const express = require('express')
const { createApi } = require('./database/database')
const app = express()
const initialize = require('./initialize').default
app.use(express.json())

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

async function runMainApi() {
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000
  const models = await initializeDatabaseConnection()
  await initialize(models)

  app.get('/page-info/:topic', (req, res) => {
    const { topic } = req.params
    const result = pageContentObject[topic]
    return res.json(result)
  })

  app.get('/cats/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Cat.findOne({
      where: { id },
      include: [{ model: models.Location }],
    })
    return res.json(result)
  })

  // HTTP GET api that returns all the cats in our actual database
  app.get('/cats', async (req, res) => {
    const result = await models.Cat.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        img: element.img,
        breed: element.breed,
        id: element.id,
      })
    }
    return res.json(filtered)
  })

  // HTTP POST api, that will push (and therefore create) a new element in
  // our actual database
  app.post('/cats', async (req, res) => {
    const { body } = req
    await models.Cat.create(body)
    return res.sendStatus(200)
  })
  app.listen(port, host)
}

runMainApi()
try {
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000
  createApi()
  app.listen(port, () => {
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
  })
} catch (error) {}

export default app
