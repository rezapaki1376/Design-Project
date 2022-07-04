import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize'

const { sequelize } = require('../database')
const Event = require('./events')

export interface PointOfInterestInterface {
  id: number
  title: string
  verboseIdentifier: string
  description: string
  imageUrl: string
  address: string
  openingHours: string
}
class PointOfInterest extends Model<
  InferAttributes<PointOfInterest>,
  InferCreationAttributes<PointOfInterest>
> {
  declare id: number
  declare title: string
  declare verboseIdentifier: string
  declare description: string
  declare imageUrl: string
  declare address: string
  declare openingHours: string
}

PointOfInterest.init(
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
    verboseIdentifier: {
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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    openingHours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'pointsOfInterest',
    sequelize,
  }
)

PointOfInterest.hasMany(Event, {
  foreignKey: {
    allowNull: true,
    name: 'pointOfInterestId',
  },
})
Event.belongsTo(PointOfInterest, {
  foreignKey: {
    allowNull: true,
    name: 'pointOfInterestId',
  },
})
module.exports = PointOfInterest
