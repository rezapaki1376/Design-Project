import dotenv from 'dotenv'
import logging from './logging'
const express = require('express')
const { createApi } = require('./database/database')
const app = express()
dotenv.config({ override: true, path: `.env.${process.env.NODE_ENV}` })
app.use(express.json())
app.use(logging)
app.use('/api/events', require('./routes/events'))
app.use('/api/itineraries', require('./routes/itineraries'))
app.use('/api/point-of-interests', require('./routes/pointOfInterests'))
try {
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000
  createApi()
  app.listen(port, () => {
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
  })
} catch (error) {}

export default app
