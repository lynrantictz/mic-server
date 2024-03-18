'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ResourceUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      resourceId: {
        type: Sequelize.INTEGER,
      },
      resourceType: {
        type: Sequelize.STRING,
      },
      resourceTitleId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ResourceTitles',
          key: 'id'
        }
      },
      resourceQualificationId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ResourceQualifications',
          key: 'id'
        }
      },
      registrationNo: {
        type: Sequelize.STRING,
        allowNull:true,
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
    await queryInterface.dropTable('ResourceUsers');
  }
};