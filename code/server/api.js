import dotenv from 'dotenv'
const express = require('express')
const { createApi } = require('./database/database')
const app = express()
app.use(express.json())
dotenv.config({ override: true, path: `.env.${process.env.NODE_ENV}` })

console.log(
  'Details' +
    process.env.PGDATABASE +
    ' ' +
    process.env.PGUSER +
    ' ' +
    process.env.PGHOST
)
console.log(process.env)
try {
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000
  createApi()
  app.listen(port, () => {
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
  })
} catch (error) {}

export default app
