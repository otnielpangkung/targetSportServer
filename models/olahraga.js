'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Olahraga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Olahraga.init({
    namaOlahraga: DataTypes.STRING,
    target: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Olahraga',
  });
  return Olahraga;
};