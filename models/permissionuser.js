'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PermissionUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PermissionUser.init({
    permission_id: {
      type: DataTypes.STRING,
      references: {
        model: 'Permission',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'PermissionUser',
    tableName: 'permission_users'
  });
  return PermissionUser;
};