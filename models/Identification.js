'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberIdentity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Member, { foreignKey:'identification_id', as: 'members' })
    }
  }
  MemberIdentity.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Identification',
    tableName: 'identifications'
  });
  return MemberIdentity;
};