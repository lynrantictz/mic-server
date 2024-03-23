'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InsurerContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InsurerContact.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InsurerContact',
    tableName: 'insurer_contacts'
  });
  return InsurerContact;
};