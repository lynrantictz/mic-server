'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('permission_roles', [
       {
        id: 1,
        permission_id: 1,
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 2,
        permission_id: 2,
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        permission_id: 3,
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        permission_id: 4,
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        permission_id: 5,
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        permission_id: 5,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        permission_id: 6,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        permission_id: 5,
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        permission_id: 7,
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        permission_id: 2,
        role_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        permission_id: 5,
        role_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        permission_id: 8,
        role_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        permission_id: 9,
        role_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        permission_id: 5,
        role_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        permission_id: 10,
        role_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        permission_id: 11,
        role_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        permission_id: 12,
        role_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        permission_id: 5,
        role_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        permission_id: 6,
        role_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        permission_id: 13,
        role_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        permission_id: 14,
        role_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        permission_id: 15,
        role_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        permission_id: 16,
        role_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        permission_id: 17,
        role_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        permission_id: 18,
        role_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        permission_id: 19,
        role_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        permission_id: 20,
        role_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        permission_id: 21,
        role_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        permission_id: 22,
        role_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 30,
        permission_id: 23,
        role_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        permission_id: 24,
        role_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 32,
        permission_id: 5,
        role_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

     ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permission_roles', null, {});
  }
};
