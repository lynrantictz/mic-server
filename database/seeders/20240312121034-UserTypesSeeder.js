'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('UserTypes', [
        {
          id: 1,
          name: 'Insuerer',
          description: 'As the top-tier super user within the digital claims processing system, the Insurer holds a pivotal role in overseeing both members and healthcare providers. This user possesses the authority to register new members and acts as the primary authority responsible for approving medical claim forms.',
          uuid: '5d7ac03e-dc71-4546-95c1-c3f1a920781e',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Health Provider',
          description: 'The Health Provider is a crucial entity within the digital claims processing system, responsible for initiating medical claim forms on behalf of members. Once a member seeks healthcare services, the Health Provider initiates the medical claim form, which then undergoes approval by the Insurer before the member can proceed with their health check.',
          uuid: '225cdd4b-82e4-4a0a-b7df-4bfafd69fcad',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Member',
          description: 'The Member plays a pivotal role within the digital claims processing system as the individual who authorizes the medical form. Upon receiving notification that a medical claim form has been initiated by the Health Provider, the Member is responsible for providing authorization for the form to proceed.',
          uuid: 'baf22d90-959a-4cc9-b068-d55d299c7dc0',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('UserTypes', null, {});
  }
};
