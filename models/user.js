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
      User.belongsTo(models.UserType, { foreignKey: 'user_type_id', as: 'userType' })
      User.belongsToMany(models.Role, { through: models.UserRole, foreignKey: 'user_id',otherKey: 'role_id', as: 'roles' });
      User.belongsToMany(models.Permission, { through: models.PermissionUser, foreignKey: 'user_id',otherKey: 'permission_id', as: 'permissions' });
      User.hasOne(models.ResourceUser, { foreignKey: 'user_id', as: 'resource' })
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
    tableName: 'users'
  });
  return User;
};