'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scheme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(model.Insurer, { foreignKey: 'insurer_id', as: 'insurer' })
    }
  }
  Scheme.init({
    title: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Scheme',
    tableName: 'schemes'
  });
  return Scheme;
};