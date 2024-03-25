'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Employer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.EmployerType, { foreignKey:'employer_type_id', as: 'type' })
      this.belongsTo(models.Country, { foreignKey:'country_id', as: 'country' })
    }
  }
  Employer.init({
    tin: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    employer_type_id: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
  }, {
    sequelize,
    modelName: 'Employer',
    tableName: 'employers',
    hooks: {
      // beforeCreate : (record, options) => {
      //   const authenticatedUser = req.user.UserId
      //   record.user_id = authenticatedUser
      // }
    }
  });
  return Employer;
};