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
        title: 'Approve Claims',
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
      {
        id: 10,
        name: 'initiate_claim',
        title: 'Initiate claim form',
        description: 'Initiate medical claim form on behalf of patients.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'edit_claim',
        title: 'Edit claim form',
        description: 'Edit medical claims initiated by the user.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'delete_claim',
        title: 'Delete claim form',
        description: 'Delete medical claims initiated by the user.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'write_procedures',
        title: 'Write procedures',
        description: 'Write and edit procedures to claim form.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: 'write_dosage',
        title: 'Write dosage',
        description: 'Write and edit dosage to claim form.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        name: 'write_lab_investigations',
        title: 'Write lab investigation',
        description: 'Write and edit laboratory investigation to claim form.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        name: 'populate_claim',
        title: 'Polupate claim',
        description: 'Write and edit and update claim form.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        name: 'add_member',
        title: 'Write dosage',
        description: 'Ability to add new members to the system.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        name: 'update_member',
        title: 'Write dosage',
        description: 'Ability to update members to the system.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        name: 'activate_member',
        title: 'Write lab investigation',
        description: 'Ability to eactivate existing members.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        name: 'deactivate_member',
        title: 'Polupate claim',
        description: 'Ability to deactivate (suspend or disable) existing members.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        name: 'delete_member',
        title: 'Polupate claim',
        description: 'Ability to permanently delete members from the system.',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 22,
        name: 'create_card',
        title: 'Create Card',
        description: 'Ability to cards.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        name: 'update_card',
        title: 'Update card',
        description: 'Ability to update cards.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        name: 'delete_card',
        title: 'Delete card',
        description: 'Ability to delete cards.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
     ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
