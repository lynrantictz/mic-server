'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResourceQualification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResourceQualification.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ResourceQualification',
    tableName: 'Resource_qualifications'
  });
  return ResourceQualification;
};