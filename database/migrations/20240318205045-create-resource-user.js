'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resource_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
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
          model: 'resource_titles',
          key: 'id'
        }
      },
      resourceQualificationId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'resource_qualifications',
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
    await queryInterface.dropTable('resource_users');
  }
};