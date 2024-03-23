'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('permission_roles', [
       {
        id: 1,
        permissionId: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 2,
        permissionId: 2,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        permissionId: 3,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        permissionId: 4,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        permissionId: 5,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        permissionId: 5,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        permissionId: 6,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        permissionId: 5,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        permissionId: 7,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        permissionId: 2,
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        permissionId: 5,
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        permissionId: 8,
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        permissionId: 9,
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        permissionId: 5,
        roleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        permissionId: 10,
        roleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        permissionId: 11,
        roleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        permissionId: 12,
        roleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        permissionId: 5,
        roleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        permissionId: 6,
        roleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        permissionId: 13,
        roleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        permissionId: 14,
        roleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        permissionId: 15,
        roleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        permissionId: 16,
        roleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        permissionId: 17,
        roleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        permissionId: 18,
        roleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        permissionId: 19,
        roleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        permissionId: 20,
        roleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        permissionId: 21,
        roleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        permissionId: 22,
        roleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 30,
        permissionId: 23,
        roleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        permissionId: 24,
        roleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 32,
        permissionId: 5,
        roleId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

     ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permission_roles', null, {});
  }
};
