import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  EnumDataType,
} from 'sequelize'

const { sequelize } = require('../database')

export interface EventInterface {
  id: string
  poiId: number
  description: string
  imageUrl: string
  eventType: string
  date: Date
  timeDuration: string
  eventUrl: string
  price: string
  preregisterNeccessary: boolean
  address: string
  organisation: string
  season: SeasonType
  title: string
  createdAt: Date
  updatedAt: Date
}
export enum SeasonType {
  spring = 'SPRING',
  summer = 'SUMMER',
  autumn = 'AUTUMN',
  winter = 'WINTER',
}
class Event extends Model<
  InferAttributes<Event>,
  InferCreationAttributes<Event>
> {
  declare id: CreationOptional<number>
  declare poiId: number
  declare description: string
  declare imageUrl: string
  declare date: Date
  declare timeDuration: string
  declare eventUrl: string
  declare price: string
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
      type: DataTypes.INTEGER,
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
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeDuration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
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
      type: DataTypes.ENUM('SPRING', 'SUMMER', 'AUTUMN', 'WINTER'),
      defaultValue: 'undefined',
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
