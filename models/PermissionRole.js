'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PermissionRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PermissionRole.init({
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Role',
        key: 'id'
      }
    },
    permission_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Permission',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'PermissionRole',
    tableName: 'permission_roles'
  });
  return PermissionRole;
};