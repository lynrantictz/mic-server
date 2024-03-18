'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResourceUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     getResource(options) {
      if (!this.resourceType) return Promise.resolve(null);
      const mixinMethodName = `get${uppercaseFirst(this.resourceType)}`;
      return this[mixinMethodName](options);
    }

    static associate(models) {
      ResourceUser.belongsTo(models.User, { foreignKey: 'userId', as: 'User' })
      ResourceUser.belongsTo(models.ResourceTitle, { foreignKey: 'resourceTitleId', as: 'Title' })
      ResourceUser.belongsTo(models.ResourceQualification, { foreignKey: 'resourceQualificationId', as: 'Qualification' })
    }
  }
  ResourceUser.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    resourceId: DataTypes.INTEGER,
    resourceType: DataTypes.STRING,
    resourceTitleId: {
      type: DataTypes.STRING,
      references: {
        model: 'ResourceTitle',
        key: 'id'
      }
    },
    resourceQualificationId: {
      type: DataTypes.STRING,
      references: {
        model: 'ResourceQualification',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'ResourceUser',
  });
  return ResourceUser;
};