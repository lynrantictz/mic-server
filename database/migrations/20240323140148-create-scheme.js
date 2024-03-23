'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schemes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      insurer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'insurers',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('schemes');
  }
};