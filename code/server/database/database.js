import { Sequelize } from 'sequelize'
const databaseSeeding = require('./initialization').default
const dbName = process.env.PGDATABASE
const dbUser = process.env.PGUSER
const dbHost = process.env.PGHOST
const dbPassword = process.env.PGPASSWORD
// process.env.DATABASE_URL
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'postgres',
  protocol: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // ssl: true,
  dialectOptions:
    process.env.NODE_ENV === 'production'
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : null,
})

async function initializeDatabaseConnection() {
  await sequelize.authenticate()
  await sequelize.sync({ force: true })
}

async function createApi() {
  await initializeDatabaseConnection()
  await databaseSeeding()
}

module.exports = { createApi, sequelize }
