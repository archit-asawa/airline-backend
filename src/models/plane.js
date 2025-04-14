'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class plane extends Model {
    static associate(models) {
      // define association here
    }
  }

  plane.init({
    modelnumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'plane',
  });

  return plane;
};
