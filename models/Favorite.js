const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {}

Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    font1: {
      type: DataTypes.STRING,
    },
    font2: {
      type: DataTypes.STRING,
    },
    font3: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite',
  }
);

module.exports = Favorite;
