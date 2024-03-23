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
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      resource_id: {
        type: Sequelize.INTEGER,
      },
      resource_type: {
        type: Sequelize.STRING,
      },
      resource_title_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'resource_titles',
          key: 'id'
        }
      },
      resource_qualification_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'resource_qualifications',
          key: 'id'
        }
      },
      registration_no: {
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