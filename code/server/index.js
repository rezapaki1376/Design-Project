import dotenv from 'dotenv'
// import logging from './logging'
const express = require('express')
const { createApi } = require('./database/database')
const app = express()
dotenv.config({ override: true, path: `.env.${process.env.NODE_ENV}` })
app.use(express.json())

// app.use(logging)

app.use('/events', require('./routes/events'))
app.use('/itineraries', require('./routes/itineraries'))
app.use('/point-of-interests', require('./routes/pointsOfInterest'))
app.use('/services', require('./routes/services'))
try {
  // const host = process.env.HOST || '127.0.0.1'
  // const port = process.env.PORT || 3001
  createApi()
  // app.listen(port, () => {
  //   console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
  // })
} catch (error) {}

export default app
