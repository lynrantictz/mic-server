'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insurer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Country, { foreignKey: 'country_id', as: 'country' })
    }
  }
  Insurer.init({
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Countries',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING(100)
    },
    logo: {
      type: DataTypes.STRING(1000)
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
  }, {
    sequelize,
    modelName: 'Insurer',
    tableName: 'insurers'
  });
  return Insurer;
};