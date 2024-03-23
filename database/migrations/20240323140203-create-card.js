'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'cards',
          key: 'id'
        }
      },
      insurer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'insurers',
          key: 'id'
        }
      },
      member_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'members',
          key: 'id'
        }
      },
      scheme_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'schemes',
          key: 'id'
        }
      },
      startAt: {
        type: Sequelize.STRING
      },
      expiresAt: {
        type: Sequelize.STRING
      },
      status: {
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
    await queryInterface.dropTable('cards');
  }
};