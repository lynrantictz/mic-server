'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Card , { foreignKey: 'parent_id', as: 'parent' })
      this.belongsTo(models.Insurer , { foreignKey: 'insurer_id', as: 'insurer' })
      this.belongsTo(models.Member , { foreignKey: 'member_id', as: 'member' })
      this.belongsTo(models.Scheme , { foreignKey: 'scheme_id', as: 'scheme' })
    }
  }
  Card.init({
    startAt: {
      type: DataTypes.STRING
    },
    expiresAt: {
      type: DataTypes.STRING
    },
    status: {
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
    modelName: 'Card',
  });
  return Card;
};