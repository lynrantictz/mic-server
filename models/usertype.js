'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserType.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    uuid: {
      type: DataTypes.UUID,
      defaultValue: uuidv4 // Use uuidv4 to generate default UUIDv4 values
    }
  }, {
    sequelize,
    modelName: 'UserType',

    // getterMethods: {
    //   createdAt() {
    //     const rawValue = this.getDataValue('createdAt');
    //     // Customize the format of createdAt if needed
    //     return rawValue; // Return as-is for the default behavior
    //   },
    //   updatedAt() {
    //     const rawValue = this.getDataValue('updatedAt');
    //     // Customize the format of updatedAt if needed
    //     return rawValue; // Return as-is for the default behavior
    //   }
    // }


  });
  return UserType;
};