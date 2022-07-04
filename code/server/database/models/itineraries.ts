import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize'

const { sequelize } = require('../database')
const PointOfInterest = require('./pointsOfInterest')
export interface ItineraryInterface {
  id: number
  title: string
  description: string
  imageUrl: string
  totalDuration: string
  tags: Array<string>
  suggestedAudience: Array<string>
  createdAt: Date
  updatedAt: Date
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
      type: DataTypes.STRING(1000),
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
Itinerary.belongsToMany(PointOfInterest, {
  through: 'PoiItinerary',
})
PointOfInterest.belongsToMany(Itinerary, {
  through: 'PoiItinerary',
})

module.exports = Itinerary
