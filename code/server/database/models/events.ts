import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize'

const { sequelize } = require('../database')
const Customer = require('./customers')

export interface OrderInterface {
  id: number
  createdAt: Date
  updatedAt: Date
}

// TODO: Complexity the products type
class Order {
  declare id: CreationOptional<number>
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    requestedDeliveryDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderDate: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.NOW,
    },
    priority: {
      type: DataTypes.STRING,
      defaultValue: 'low',
    },
    destinationAddress: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    products: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
    tableName: 'orders',
    sequelize,
  }
)
Order.belongsTo(Customer, {
  foreignKey: {
    allowNull: true,
    name: 'customerId',
  },
})
Customer.hasMany(Order, {
  foreignKey: {
    allowNull: true,
    name: 'customerId',
  },
})
module.exports = Event
