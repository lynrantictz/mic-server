'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('roles', [
      {
        id: 1,
        userTypeId: null,
        name: 'Administrator',
        description: 'Oversees system configuration, user management, and overall functionality. Administrators have comprehensive access privileges to configure system settings, manage user accounts, and ensure smooth system operation.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 2,
        userTypeId: 1,
        name: 'Approver',
        description: 'Reviews and approves various activities within the system, particularly related to medical claim forms. Approvers validate and authorize medical claims submitted by members and health providers, ensuring adherence to predefined criteria and guidelines.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 3,
        userTypeId: null,
        name: 'Finance',
        description: 'Manages financial aspects within the system, including budgeting, accounting, and financial reporting. Finance users have access to financial data and reports, enabling them to track expenses, analyze financial trends, and ensure fiscal responsibility in claims management.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 4,
        userTypeId: null,
        name: 'Executive',
        description: 'Holds strategic roles within the insurer organization, providing oversight and direction for key initiatives and operations. Executives have access to high-level insights and reports, enabling them to monitor system performance, assess business outcomes, and make informed decisions.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 5,
        userTypeId: 2,
        name: 'Initiator',
        description: 'Initiates medical claim forms on behalf of patients receiving healthcare services within the provider\'s facility. Initiators accurately capture and enter relevant information into the system, ensuring the timely initiation of claims and the efficient capture of essential data.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 6,
        userTypeId: 2,
        name: 'Doctor',
        description: 'Reviews and validates medical claim forms initiated by initiators. Doctors assess the accuracy and medical necessity of services rendered to patients, ensuring claims comply with established medical standards and guidelines.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 7,
        userTypeId: 1,
        name: 'Member Manager',
        description: 'Manages members within the insurer organization, including adding new members, deactivating memberships, and handling member deletions.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        userTypeId: 1,
        name: 'Card Manager',
        description: 'Manages membership cards for members within the insurer organization. This role involves creating new membership cards, updating card details, and deactivating cards as needed.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        userTypeId: null,
        name: 'Coordinator',
        description: 'Responsible for coordinating and managing claims-related activities. Claims Coordinators have permissions to view and export claim reports, as well as access claim statuses within the system. They play a crucial role in overseeing the processing and coordination of claims to ensure efficient reimbursement for healthcare services.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
