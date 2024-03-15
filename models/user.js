'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.UserType, { foreignKey: 'userTypeId', as: 'userType' })
      User.belongsToMany(models.Role, { through: models.UserRole, foreignKey: 'userId',otherKey: 'roleId', as: 'roles' });
      User.belongsToMany(models.Permission, { through: models.PermissionUser, foreignKey: 'userId',otherKey: 'permissionId', as: 'permissions' });
    }
  }
  User.init({
    userName: DataTypes.STRING,
    userTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'UserTypes',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    },
    password: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};