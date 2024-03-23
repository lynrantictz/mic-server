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
      ResourceUser.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
      ResourceUser.belongsTo(models.ResourceTitle, { foreignKey: 'resource_title_id', as: 'title' })
      ResourceUser.belongsTo(models.ResourceQualification, { foreignKey: 'resource_qualification_id', as: 'qualification' })
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
    resource_id: DataTypes.INTEGER,
    resource_type: DataTypes.STRING,
    resource_title_id: {
      type: DataTypes.STRING,
      references: {
        model: 'ResourceTitle',
        key: 'id'
      }
    },
    resource_qualification_id: {
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

  // ResourceUser.addHook("afterFind", findResult => {
  //   if (!Array.isArray(findResult)) findResult = [findResult];
  //   for (const instance of findResult) {
  //     if (instance.resourceType === "insurer" && instance.insurer !== undefined) {
  //       instance.resource = instance.insurer;
  //     } 
  //     else if (instance.commentableType === "user" && instance.user !== undefined) {
  //       instance.resource = instance.user;
  //     }
  //     // To prevent mistakes:
  //     delete instance.insurer;
  //     delete instance.dataValues.insurer;
  //     delete instance.user;
  //     delete instance.dataValues.user;
  //   }
  // })


  return ResourceUser;
};