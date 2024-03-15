'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('PermissionRoles', [
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
        id: 12,
        permissionId: 9,
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        permissionId: 5,
        roleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        permissionId: 10,
        roleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        permissionId: 11,
        roleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        permissionId: 12,
        roleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      


     ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PermissionRoles', null, {});
  }
};
