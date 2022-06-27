import { Sequelize } from 'sequelize'
const databaseSeeding = require('./initialization').default
// const dbName = process.env.PGDATABASE
// const dbUser = process.env.PGUSER
// const dbHost = process.env.PGHOST
// const dbPassword = process.env.PGPASSWORD

// const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
//   host: dbHost,
//   dialect: 'postgres',
//   protocol: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
//   dialectOptions:
//     process.env.NODE_ENV === 'production'
//       ? {
//           ssl: {
//             require: true,
//             rejectUnauthorized: false,
//           },
//         }
//       : null,
// })

const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost:5432/postgres-art-town'
)

async function initializeDatabaseConnection() {
  const auth = await sequelize.authenticate()
  console.log('aut-working')
  console.log(auth)
  await sequelize.sync({ force: true })
}

async function createApi() {
  await initializeDatabaseConnection()
  // const Event = require('./models/events')
  const response = await databaseSeeding()
  console.log('Seeding: ')
  console.log(response)
}

module.exports = { createApi, sequelize }
