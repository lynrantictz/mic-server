'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Insurer , { foreignKey: 'insurer_id', as: 'insurer' })
      this.belongsTo(models.Employer , { foreignKey: 'employer_id', as: 'employer' })
      this.belongsTo(models.Identification , { foreignKey: 'identification_id', as: 'identification' })
    }
  }
  Member.init({
    name: {
      type: DataTypes.STRING
    },
    number: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    dob: {
      type: DataTypes.STRING
    },
    isActive: {
      type: DataTypes.BOOLEAN
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
  }, {
    sequelize,
    modelName: 'Member',
    tableName: 'members',
  });
  return Member;
};