/* eslint-disable no-use-before-define */
import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  EnumDataType,
} from 'sequelize'

const { sequelize } = require('../database')

export enum SeasonType {
  spring = 'SPRING',
  summer = 'SUMMER',
  autumn = 'AUTUMN',
  winter = 'WINTER',
}
export interface EventInterface {
  id: number
  poiId: string
  description: string
  imageUrl: string
  eventType: string
  date: Date
  time: string
  timeDuration: number
  eventUrl: string
  price: number
  preregisterNeccessary: boolean
  address: string
  organisation: string
  season: SeasonType
  title: string
  pointOfInterestId: number
  createdAt: Date
  updatedAt: Date
}

class Event extends Model<
  InferAttributes<Event>,
  InferCreationAttributes<Event>
> {
  declare id: CreationOptional<number>
  declare poiId: string
  declare description: string
  declare imageUrl: string
  declare date: Date
  declare time: string
  declare timeDuration: number
  declare eventUrl: string
  declare eventType: string
  declare price: number
  declare preregisterNeccessary: CreationOptional<boolean>
  declare address: string
  declare organisation: string
  declare season: EnumDataType<SeasonType>
  declare title: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    poiId: {
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
    eventType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timeDuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eventUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preregisterNeccessary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organisation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM('SUMMER', 'WINTER'),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
    tableName: 'events',
    modelName: 'Event',
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
module.exports = Event
