import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize'

const { sequelize } = require('../database')

export interface LocationsInterface {
  name: string
  imageUrl: string
  address: string
  openinHours: string
  url: string
  contactInformation: string
}

export interface ServiceInterface {
  id: number
  title: string
  description: string
  imageUrl: string
  locations: Array<LocationsInterface>
  tags: Array<string>
}
class Service extends Model<
  InferAttributes<Service>,
  InferCreationAttributes<Service>
> {
  declare id: number
  declare title: string
  declare description: string
  declare imageUrl: string
  declare locations: Array<LocationsInterface>
  declare tags: Array<string>
}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locations: {
      type: DataTypes.JSONB,
      defaultValue: null,
      allowNull: true,
    },
    tags: {
      type: DataTypes.JSONB,
      defaultValue: null,
      allowNull: true,
    },
  },
  {
    tableName: 'services',
    sequelize,
  }
)

// Order.belongsTo(Customer, {
//   foreignKey: {
//     allowNull: true,
//     name: 'customerId',
//   },
// })
// Customer.hasMany(Order, {
//   foreignKey: {
//     allowNull: true,
//     name: 'customerId',
//   },
// })
module.exports = Service
