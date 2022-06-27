import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize'

const { sequelize } = require('../database')

export interface ItineraryInterface {
  id: number
  title: string
  description: string
  imageUrl: string
  totalDuration: string
  journey: Array<unknown>
  tags: Array<string>
  suggestedAudience: Array<string>
  createdAt: Date
  updatednumberAt: Date
}
class Itinerary extends Model<
  InferAttributes<Itinerary>,
  InferCreationAttributes<Itinerary>
> {
  declare id: number
  declare title: string
  declare description: string
  declare imageUrl: string
  declare totalDuration: string
  declare journey: Array<unknown>
  declare tags: Array<string>
  declare suggestedAudience: Array<string>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

Itinerary.init(
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
    totalDuration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    journey: {
      type: DataTypes.JSONB,
      defaultValue: null,
      allowNull: true,
    },
    tags: {
      type: DataTypes.JSONB,
      defaultValue: null,
      allowNull: true,
    },
    suggestedAudience: {
      type: DataTypes.JSONB,
      defaultValue: null,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
    tableName: 'itineraries',
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
module.exports = Itinerary
