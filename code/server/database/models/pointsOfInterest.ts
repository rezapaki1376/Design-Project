import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize'

const { sequelize } = require('../database')

export interface PointOfInterestInterface {
  id: number
  title: string
  description: string
  imageUrl: string
  address: string
  openingHours: string
  tags: Array<string>
  createdAt: Date
  updatedAt: Date
}
class PointOfInterest extends Model<
  InferAttributes<PointOfInterest>,
  InferCreationAttributes<PointOfInterest>
> {
  declare id: number
  declare title: string
  declare description: string
  declare imageUrl: string
  declare address: string
  declare openingHours: string
  declare tags: Array<string>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
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
    tags: {
      type: DataTypes.JSONB,
      defaultValue: null,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
    tableName: 'pointsOfInterest',
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
module.exports = PointOfInterest
