'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('members', {
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
      employer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'employers',
          key: 'id'
        }
      },
      identification_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'identifications',
          key: 'id'
        }
      },
      identification_no: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      dob: {
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
    await queryInterface.dropTable('members');
  }
};