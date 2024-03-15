'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Permissions', [
       {
         id: 1,
         name: 'manage_system',
         title: 'Manage System',
         description: 'Manage system configuration settings, user accounts, roles, and permissions.',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        id: 2,
        name: 'manage_users',
        title: 'Manage Users',
        description: 'Create, read, update, and delete user accounts.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'manage_roles',
        title: 'Manage Roles',
        description: 'Assign and remove roles to users',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'manage_permissions',
        title: 'Manage Permissions',
        description: 'Assign and remove permission to users',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'view_claim',
        title: 'View Claims',
        description: 'Ability to view medical claim form',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'approve_claim',
        title: 'View Claims',
        description: 'Ability to approve medical claims.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'manage_financials',
        title: 'Manage Financials',
        description: 'Access financial data and reports, manage budgeting, accounting, and financial reporting functionalities..',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'view_high_level_reports',
        title: 'View high level reports',
        description: 'Access high-level insights and reports, monitor system performance, assess business outcomes, and provide strategic oversight.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'view_executive_dashboard',
        title: 'View executive dashboard',
        description: 'Access high-level insights dashboard monitor system performance, assess business outcomes, and provide strategic oversight.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
     ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
